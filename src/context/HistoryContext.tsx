import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HistoryEntry, CookingResult } from '../types/models';

const HISTORY_STORAGE_KEY = '@cookmaster_history';
const MAX_HISTORY_ITEMS = 100; // Limite pour éviter de surcharger le stockage

interface HistoryContextType {
  history: HistoryEntry[];
  isLoading: boolean;
  saveToHistory: (result: CookingResult, notes?: string) => Promise<void>;
  deleteFromHistory: (id: string) => Promise<void>;
  getHistoryById: (id: string) => HistoryEntry | undefined;
  clearHistory: () => Promise<void>;
  updateHistoryEntry: (id: string, rating?: number, notes?: string) => Promise<void>;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

interface HistoryProviderProps {
  children: ReactNode;
}

export const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Charger l'historique au démarrage
  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      setIsLoading(true);
      const jsonValue = await AsyncStorage.getItem(HISTORY_STORAGE_KEY);
      if (jsonValue !== null) {
        const parsed = JSON.parse(jsonValue);
        // Convertir les dates string en Date objects
        const historyWithDates = parsed.map((entry: any) => ({
          ...entry,
          completedAt: new Date(entry.completedAt),
          result: {
            ...entry.result,
            estimatedEndTime: entry.result.estimatedEndTime
              ? new Date(entry.result.estimatedEndTime)
              : undefined,
          },
        }));
        // Trier par date décroissante (plus récent en premier)
        historyWithDates.sort((a: HistoryEntry, b: HistoryEntry) =>
          b.completedAt.getTime() - a.completedAt.getTime()
        );
        setHistory(historyWithDates);
      }
    } catch (error) {
      console.error('Erreur lors du chargement de l\'historique:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const saveHistory = async (newHistory: HistoryEntry[]) => {
    try {
      const jsonValue = JSON.stringify(newHistory);
      await AsyncStorage.setItem(HISTORY_STORAGE_KEY, jsonValue);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde de l\'historique:', error);
      throw error;
    }
  };

  const saveToHistory = async (result: CookingResult, notes?: string) => {
    try {
      const newEntry: HistoryEntry = {
        id: `history_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        result,
        completedAt: new Date(),
        notes,
      };

      const updatedHistory = [newEntry, ...history];

      // Limiter le nombre d'entrées
      if (updatedHistory.length > MAX_HISTORY_ITEMS) {
        updatedHistory.splice(MAX_HISTORY_ITEMS);
      }

      setHistory(updatedHistory);
      await saveHistory(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde dans l\'historique:', error);
      throw error;
    }
  };

  const deleteFromHistory = async (id: string) => {
    try {
      const updatedHistory = history.filter(entry => entry.id !== id);
      setHistory(updatedHistory);
      await saveHistory(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'historique:', error);
      throw error;
    }
  };

  const getHistoryById = (id: string): HistoryEntry | undefined => {
    return history.find(entry => entry.id === id);
  };

  const clearHistory = async () => {
    try {
      setHistory([]);
      await AsyncStorage.removeItem(HISTORY_STORAGE_KEY);
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'historique:', error);
      throw error;
    }
  };

  const updateHistoryEntry = async (id: string, rating?: number, notes?: string) => {
    try {
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
      await saveHistory(updatedHistory);
    } catch (error) {
      console.error('Erreur lors de la mise à jour de l\'historique:', error);
      throw error;
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
