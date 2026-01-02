import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, userService, User, UserPreferences } from '../services/api';

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (data: { name?: string; email?: string }) => Promise<void>;
  updatePreferences: (preferences: Partial<UserPreferences>) => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      setIsLoading(true);
      const storedUser = await authService.getStoredUser();

      if (storedUser) {
        // Verify token is still valid
        const verifiedUser = await authService.verifyToken();
        if (verifiedUser) {
          setUser(verifiedUser);
        } else {
          // Token invalid, clear storage
          await authService.logout();
          setUser(null);
        }
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      const response = await authService.login(email, password);
      setUser(response.user);
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Erreur de connexion');
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      const response = await authService.register(email, password, name);
      setUser(response.user);
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Erreur d\'inscription');
    }
  };

  const logout = async () => {
    try {
      await authService.logout();
      setUser(null);
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const updateProfile = async (data: { name?: string; email?: string }) => {
    try {
      const updatedUser = await userService.updateProfile(data);
      setUser(updatedUser);
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Erreur de mise à jour');
    }
  };

  const updatePreferences = async (preferences: Partial<UserPreferences>) => {
    try {
      const updatedPreferences = await userService.updatePreferences(preferences);
      if (user) {
        setUser({ ...user, preferences: updatedPreferences });
      }
    } catch (error: any) {
      throw new Error(error.response?.data?.error || 'Erreur de mise à jour des préférences');
    }
  };

  const refreshUser = async () => {
    try {
      const profile = await userService.getProfile();
      setUser(profile);
    } catch (error) {
      console.error('Error refreshing user:', error);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    updatePreferences,
    refreshUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};
