import axios from 'axios';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

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

// POST /analyze — backend expects { tokenAddress, chain }
export const analyzeToken = async (tokenAddress: string, chain: string = 'hashkey') => {
  const response = await api.post('/analyze', { tokenAddress, chain });
  return response.data;
};

// GET /report/:tokenAddress — returns latest report + historicalCount
export const getReport = async (tokenAddress: string) => {
  const response = await api.get(`/report/${tokenAddress}`);
  return response.data;
};

// Alias for backward compatibility
export const getReportById = getReport;
export const getReportByAddress = getReport;

// GET /history/:tokenAddress — returns array of all historical reports
export const getHistory = async (tokenAddress: string) => {
  const response = await api.get(`/history/${tokenAddress}`);
  return response.data;
};

// POST /log-onchain — validates payload before on-chain tx
export const validateOnchainPayload = async (payload: {
  tokenAddress: string;
  riskScore: number;
  riskLevel: string;
}) => {
  const response = await api.post('/log-onchain', payload);
  return response.data;
};

export default api;
