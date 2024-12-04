import axios from 'axios';
import { useAuthStore } from '../stores/authStore';

const API_URL = 'YOUR_API_URL';

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const loginWithGoogle = async (token: string) => {
  const response = await api.post('/auth/google', { token });
  return response.data;
};

export const sendMessage = async (message: string) => {
  const response = await api.post('/chat', { message });
  return response.data;
};

export default api;