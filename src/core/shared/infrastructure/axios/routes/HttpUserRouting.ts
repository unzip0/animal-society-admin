import axios from '../axios';
import HttpRoutes from './HttpRoutes';

export const updateUser = (id: string, data: { name: string; first_last_name: string; second_last_name: string }) => {
  return axios.patch(HttpRoutes.users.update(id), data);
};