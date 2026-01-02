import axios from 'axios';
import { Meat, CookingResult } from '../types/models';

// API Configuration
const API_BASE_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// API Service
export const apiService = {
  // Get all meats with cuts and cooking data
  async getAllMeats(): Promise<Meat[]> {
    try {
      const response = await api.get('/v2/meats');
      return response.data;
    } catch (error) {
      console.error('Error fetching meats:', error);
      throw error;
    }
  },

  // Get meat by category
  async getMeatsByCategory(category: string): Promise<Meat[]> {
    try {
      const response = await api.get(`/v2/meats?category=${category}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching meats by category:', error);
      throw error;
    }
  },

  // Get all cooking appliances
  async getAppliances() {
    try {
      const response = await api.get('/v2/appliances');
      return response.data;
    } catch (error) {
      console.error('Error fetching appliances:', error);
      throw error;
    }
  },

  // Get all cooking methods
  async getMethods() {
    try {
      const response = await api.get('/v2/methods');
      return response.data;
    } catch (error) {
      console.error('Error fetching methods:', error);
      throw error;
    }
  },

  // Calculate cooking time
  async calculate(params: {
    meatId: string;
    cutId: string;
    weight: number; // in kg
    thickness?: number; // in cm
    doneness: string;
    appliance: string;
    method: string;
    customTemp?: number;
    initialTemp?: number; // default 20°C
    altitude?: number;
    humidity?: number;
  }): Promise<CookingResult> {
    try {
      const response = await api.post('/v2/calculate', params);
      return response.data;
    } catch (error) {
      console.error('Error calculating cooking time:', error);
      throw error;
    }
  },

  // User history
  async saveHistory(result: CookingResult) {
    try {
      const response = await api.post('/history', result);
      return response.data;
    } catch (error) {
      console.error('Error saving history:', error);
      throw error;
    }
  },

  async getHistory(userId?: string) {
    try {
      const url = userId ? `/history?userId=${userId}` : '/history';
      const response = await api.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching history:', error);
      throw error;
    }
  },

  // Authentication (if needed)
  async login(email: string, password: string) {
    try {
      const response = await api.post('/auth/login', { email, password });
      return response.data;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  },

  async register(email: string, password: string, name?: string) {
    try {
      const response = await api.post('/auth/register', { email, password, name });
      return response.data;
    } catch (error) {
      console.error('Error registering:', error);
      throw error;
    }
  },
};

export default apiService;
