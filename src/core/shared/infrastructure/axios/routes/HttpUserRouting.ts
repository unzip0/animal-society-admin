import { ApiResponse } from '../../response/ApiResponse';
import axios from '../axios';
import HttpRoutes from './HttpRoutes';

export const update = (id: string, data: { 
  name: string,
  first_last_name: string,
  second_last_name: string
}): Promise<ApiResponse> => {
  return axios.patch(HttpRoutes.users.update(id), data);
};