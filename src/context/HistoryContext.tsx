import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryEntry, CookingResult } from '../types/models';
import { historyService, authService } from '../services/api';

const HISTORY_STORAGE_KEY = '@cookmaster_history';
const MAX_HISTORY_ITEMS = 100;

interface HistoryContextType {
  history: HistoryEntry[];
  isLoading: boolean;
  saveToHistory: (result: CookingResult, notes?: string) => Promise<void>;
  deleteFromHistory: (id: string) => Promise<void>;
  getHistoryById: (id: string) => HistoryEntry | undefined;
  clearHistory: () => Promise<void>;
  updateHistoryEntry: (id: string, rating?: number, notes?: string) => Promise<void>;
  refreshHistory: () => Promise<void>;
  syncWithServer: () => Promise<void>;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

interface HistoryProviderProps {
  children: ReactNode;
}

export const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      setIsLoading(true);

      // Check if user is authenticated
      const isAuthenticated = await authService.isAuthenticated();

      if (isAuthenticated) {
        // Load from server
        try {
          const response = await historyService.getHistory(MAX_HISTORY_ITEMS, 0);
          const serverHistory = response.history.map((entry: any) => ({
            ...entry,
            id: entry._id || entry.id,
            completedAt: new Date(entry.date || entry.completedAt),
          }));
          setHistory(serverHistory);
          // Also save to local storage as backup
          await saveToLocalStorage(serverHistory);
        } catch (error) {
          console.error('Error loading from server, falling back to local:', error);
          await loadFromLocalStorage();
        }
      } else {
        // Load from local storage
        await loadFromLocalStorage();
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'historique:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadFromLocalStorage = async () => {
    const jsonValue = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
    if (jsonValue !== null) {
      const parsed = JSON.parse(jsonValue);
      const historyWithDates = parsed.map((entry: any) => ({
        ...entry,
        completedAt: new Date(entry.completedAt),
        result: entry.result ? {
          ...entry.result,
          estimatedEndTime: entry.result.estimatedEndTime
            ? new Date(entry.result.estimatedEndTime)
            : undefined,
        } : undefined,
      }));
      historyWithDates.sort((a: HistoryEntry, b: HistoryEntry) =>
        b.completedAt.getTime() - a.completedAt.getTime()
      );
      setHistory(historyWithDates);
    }
  };

  const saveToLocalStorage = async (historyData: HistoryEntry[]) => {
    try {
      const jsonValue = JSON.stringify(historyData);
      await AsyncStorage.setItem(HISTORY_STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde locale:', error);
    }
  };

  const saveToHistory = async (result: CookingResult, notes?: string) => {
    try {
      const isAuthenticated = await authService.isAuthenticated();

      if (isAuthenticated) {
        // Save to server
        const serverEntry = await historyService.saveHistory({
          meatCategory: result.meat.category,
          meatName: result.meat.name,
          cutName: result.cut.name,
          cookingMethod: result.method.method.toString(),
          weight: result.weight,
          targetTemperature: result.targetTemperature,
          cookingTime: result.cookingTime,
          notes,
          success: true,
        });

        const newEntry: HistoryEntry = {
          id: (serverEntry as any)._id || serverEntry.id || `history_${Date.now()}`,
          result,
          completedAt: new Date(),
          notes,
        };

        const updatedHistory = [newEntry, ...history].slice(0, MAX_HISTORY_ITEMS);
        setHistory(updatedHistory);
        await saveToLocalStorage(updatedHistory);
      } else {
        // Save locally only
        const newEntry: HistoryEntry = {
          id: `history_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          result,
          completedAt: new Date(),
          notes,
        };

        const updatedHistory = [newEntry, ...history].slice(0, MAX_HISTORY_ITEMS);
        setHistory(updatedHistory);
        await saveToLocalStorage(updatedHistory);
      }
    } catch (error) {
      console.error('Erreur lors de la sauvegarde:', error);
      // Fallback to local storage
      const newEntry: HistoryEntry = {
        id: `history_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        result,
        completedAt: new Date(),
        notes,
      };

      const updatedHistory = [newEntry, ...history].slice(0, MAX_HISTORY_ITEMS);
      setHistory(updatedHistory);
      await saveToLocalStorage(updatedHistory);
    }
  };

  const deleteFromHistory = async (id: string) => {
    try {
      const isAuthenticated = await authService.isAuthenticated();

      if (isAuthenticated) {
        try {
          await historyService.deleteHistory(id);
        } catch (error) {
          console.error('Error deleting from server:', error);
        }
      }

      const updatedHistory = history.filter(entry => entry.id !== id);
      setHistory(updatedHistory);
      await saveToLocalStorage(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      throw error;
    }
  };

  const getHistoryById = (id: string): HistoryEntry | undefined => {
    return history.find(entry => entry.id === id);
  };

  const clearHistory = async () => {
    try {
      const isAuthenticated = await authService.isAuthenticated();

      if (isAuthenticated) {
        // Delete all from server
        for (const entry of history) {
          try {
            await historyService.deleteHistory(entry.id);
          } catch (error) {
            console.error('Error deleting entry:', error);
          }
        }
      }

      setHistory([]);
      await AsyncStorage.removeItem(HISTORY_STORAGE_KEY);
    } catch (error) {
      console.error('Erreur lors de la suppression:', error);
      throw error;
    }
  };

  const updateHistoryEntry = async (id: string, rating?: number, notes?: string) => {
    try {
      const isAuthenticated = await authService.isAuthenticated();

      if (isAuthenticated) {
        try {
          await historyService.updateHistory(id, { rating, notes });
        } catch (error) {
          console.error('Error updating on server:', error);
        }
      }

      const updatedHistory = history.map(entry => {
        if (entry.id === id) {
          return {
            ...entry,
            rating: rating !== undefined ? rating : entry.rating,
            notes: notes !== undefined ? notes : entry.notes,
          };
        }
        return entry;
      });

      setHistory(updatedHistory);
      await saveToLocalStorage(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de la mise à jour:', error);
      throw error;
    }
  };

  const refreshHistory = async () => {
    await loadHistory();
  };

  const syncWithServer = async () => {
    const isAuthenticated = await authService.isAuthenticated();
    if (!isAuthenticated) return;

    try {
      setIsLoading(true);
      const response = await historyService.getHistory(MAX_HISTORY_ITEMS, 0);
      const serverHistory = response.history.map((entry: any) => ({
        ...entry,
        id: entry._id || entry.id,
        completedAt: new Date(entry.date || entry.completedAt),
      }));
      setHistory(serverHistory);
      await saveToLocalStorage(serverHistory);
    } catch (error) {
      console.error('Error syncing with server:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const value: HistoryContextType = {
    history,
    isLoading,
    saveToHistory,
    deleteFromHistory,
    getHistoryById,
    clearHistory,
    updateHistoryEntry,
    refreshHistory,
    syncWithServer,
  };

  return (
    <HistoryContext.Provider value={value}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = (): HistoryContextType => {
  const context = useContext(HistoryContext);
  if (context === undefined) {
    throw new Error('useHistory doit être utilisé à l\'intérieur d\'un HistoryProvider');
  }
  return context;
};
