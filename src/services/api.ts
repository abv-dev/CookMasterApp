import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Meat, CookingResult, HistoryEntry } from '../types/models';

// API Configuration
const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL || 'http://localhost:3000/api';

const TOKEN_KEY = '@cookmaster_token';
const USER_KEY = '@cookmaster_user';

// Types
export interface User {
  id: string;
  email: string;
  name: string;
  preferences: UserPreferences;
  favoriteRecipes?: FavoriteRecipe[];
  createdAt?: string;
}

export interface UserPreferences {
  temperatureUnit: 'celsius' | 'fahrenheit';
  weightUnit: 'kg' | 'lbs';
  dimensionUnit: 'cm' | 'inches';
  defaultDoneness: 'bleu' | 'saignant' | 'à point' | 'bien cuit';
  enableNotifications: boolean;
  timerSound: string;
}

export interface FavoriteRecipe {
  _id?: string;
  meatId: string;
  cutName: string;
  cookingMethod: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  user: User;
}

export interface HistoryResponse {
  history: HistoryEntry[];
  pagination: {
    total: number;
    limit: number;
    skip: number;
    hasMore: boolean;
  };
}

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// Add auth token to requests
api.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle 401 responses
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
    }
    return Promise.reject(error);
  }
);

// Auth Service
export const authService = {
  async register(email: string, password: string, name: string): Promise<AuthResponse> {
    const response = await api.post('/auth/register', { email, password, name });
    await AsyncStorage.setItem(TOKEN_KEY, response.data.token);
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
    return response.data;
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const response = await api.post('/auth/login', { email, password });
    await AsyncStorage.setItem(TOKEN_KEY, response.data.token);
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
    return response.data;
  },

  async logout(): Promise<void> {
    await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
  },

  async verifyToken(): Promise<User | null> {
    try {
      const response = await api.get('/auth/verify');
      if (response.data.valid) {
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
        return response.data.user;
      }
      return null;
    } catch {
      return null;
    }
  },

  async getStoredUser(): Promise<User | null> {
    const userJson = await AsyncStorage.getItem(USER_KEY);
    return userJson ? JSON.parse(userJson) : null;
  },

  async getStoredToken(): Promise<string | null> {
    return AsyncStorage.getItem(TOKEN_KEY);
  },

  async isAuthenticated(): Promise<boolean> {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return !!token;
  },
};

// User Service
export const userService = {
  async getProfile(): Promise<User> {
    const response = await api.get('/user/profile');
    return response.data;
  },

  async updateProfile(data: { name?: string; email?: string }): Promise<User> {
    const response = await api.put('/user/profile', data);
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(response.data.user));
    return response.data.user;
  },

  async updatePreferences(preferences: Partial<UserPreferences>): Promise<UserPreferences> {
    const response = await api.put('/user/preferences', preferences);
    const user = await authService.getStoredUser();
    if (user) {
      user.preferences = response.data.preferences;
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    }
    return response.data.preferences;
  },

  async changePassword(currentPassword: string, newPassword: string): Promise<void> {
    await api.put('/user/password', { currentPassword, newPassword });
  },

  async getFavorites(): Promise<FavoriteRecipe[]> {
    const response = await api.get('/user/favorites');
    return response.data;
  },

  async addFavorite(meatId: string, cutName: string, cookingMethod: string): Promise<FavoriteRecipe[]> {
    const response = await api.post('/user/favorites', { meatId, cutName, cookingMethod });
    return response.data.favoriteRecipes;
  },

  async removeFavorite(favoriteId: string): Promise<FavoriteRecipe[]> {
    const response = await api.delete(`/user/favorites/${favoriteId}`);
    return response.data.favoriteRecipes;
  },
};

// History Service
export const historyService = {
  async getHistory(limit = 50, skip = 0): Promise<HistoryResponse> {
    const response = await api.get('/history', {
      params: { limit, skip, sortBy: 'date', order: 'desc' },
    });
    return response.data;
  },

  async getHistoryById(id: string): Promise<HistoryEntry> {
    const response = await api.get(`/history/${id}`);
    return response.data;
  },

  async saveHistory(data: {
    meatCategory: string;
    meatName: string;
    cutName: string;
    cookingMethod: string;
    weight: number;
    targetTemperature: number;
    cookingTime: number;
    rating?: number;
    notes?: string;
    success?: boolean;
  }): Promise<HistoryEntry> {
    const response = await api.post('/history', {
      ...data,
      date: new Date().toISOString(),
    });
    return response.data.history;
  },

  async updateHistory(id: string, data: Partial<HistoryEntry>): Promise<HistoryEntry> {
    const response = await api.put(`/history/${id}`, data);
    return response.data.history;
  },

  async deleteHistory(id: string): Promise<void> {
    await api.delete(`/history/${id}`);
  },

  async getStats(): Promise<{
    totalCookings: number;
    successfulCookings: number;
    successRate: string;
    favoriteMetats: Array<{ _id: { category: string; name: string }; count: number }>;
    favoriteMethods: Array<{ _id: string; count: number }>;
    averageRating: number | null;
    totalRated: number;
  }> {
    const response = await api.get('/history/stats/summary');
    return response.data;
  },
};

// Meats Service
export const meatsService = {
  async getAllMeats(): Promise<Meat[]> {
    try {
      const response = await api.get('/v2/meats');
      return response.data;
    } catch (error) {
      console.error('Error fetching meats:', error);
      throw error;
    }
  },

  async getMeatsByCategory(category: string): Promise<Meat[]> {
    try {
      const response = await api.get(`/v2/meats?category=${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching meats by category:', error);
      throw error;
    }
  },

  async getAppliances() {
    try {
      const response = await api.get('/v2/appliances');
      return response.data;
    } catch (error) {
      console.error('Error fetching appliances:', error);
      throw error;
    }
  },

  async getMethods() {
    try {
      const response = await api.get('/v2/methods');
      return response.data;
    } catch (error) {
      console.error('Error fetching methods:', error);
      throw error;
    }
  },

  async calculate(params: {
    meatId: string;
    cutId: string;
    weight: number;
    thickness?: number;
    doneness: string;
    appliance: string;
    method: string;
    customTemp?: number;
    initialTemp?: number;
  }): Promise<CookingResult> {
    try {
      const response = await api.post('/v2/calculate', params);
      return response.data;
    } catch (error) {
      console.error('Error calculating cooking time:', error);
      throw error;
    }
  },
};

// Export default api instance
export default api;
