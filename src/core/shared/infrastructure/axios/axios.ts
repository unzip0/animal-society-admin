import axios from 'axios';
import { userStore } from '@/stores/auth/userStore';
import router from '@/router/router';


const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const authStore = userStore();

axiosInstance.interceptors.request.use((config) => {
  
  if (authStore.token) {
    config.headers.Authorization = `${authStore.token.type} ${authStore.token.token}`;
  }
  
  return config;
}, (error) => {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      authStore.logout();
      router.push({ name: 'Authentication' });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;