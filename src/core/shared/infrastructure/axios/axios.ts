import axios from 'axios';
import { useAuthStore } from '../../../../stores/auth/authStore';
import router from '../../../../router/router';
import { purge } from '../../../../core/shared/domain/utils/store';


const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
});

const authStore = useAuthStore();

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
      purge();
      router.push({ name: 'Authentication' });
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;