import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  setToken: async (token: string) => {
    await SecureStore.setItemAsync('authToken', token);
    set({ token, isAuthenticated: true });
  },
  logout: async () => {
    await SecureStore.deleteItemAsync('authToken');
    set({ token: null, isAuthenticated: false });
  },
  initialize: async () => {
    try {
      const token = await SecureStore.getItemAsync('authToken');
      if (token) {
        set({ token, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Failed to initialize auth state:', error);
    }
  },
}));