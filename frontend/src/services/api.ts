import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_BASE,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('rwa-auth-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('rwa-auth-token');
    }
    return Promise.reject(error);
  }
);

export const analyzeToken = async (contractAddress: string, network: string) => {
  const response = await api.post('/analyze', { contractAddress, network });
  return response.data;
};

export const getReportById = async (id: string) => {
  const response = await api.get(`/report/${id}`);
  return response.data;
};

export const getReportByAddress = async (tokenAddress: string) => {
  const response = await api.get(`/report/${tokenAddress}`);
  return response.data;
};

export const getAllReports = async () => {
  const response = await api.get('/reports');
  return response.data;
};

export const getHistory = async () => {
  const response = await api.get('/history');
  return response.data;
};

export default api;
