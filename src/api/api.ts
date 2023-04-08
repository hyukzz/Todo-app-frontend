import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(requestConfig => {
  const accessToken = localStorage.getItem('access_token');

  requestConfig.headers.Authorization = `Bearer ${accessToken}`;

  return requestConfig;
});
