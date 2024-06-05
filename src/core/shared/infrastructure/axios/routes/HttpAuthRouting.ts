import { LoginResponse } from '../../../../management/users/application/login/LoginResponse';
import { ApiResponse } from '../../response/ApiResponse';
import axios from '../axios';
import HttpRoutes from './HttpRoutes';

export const register = (data: {
    id: string, 
    name: string,
    first_last_name: string,
    second_last_name: string,
    email: string,
    password: string,
    role: string,
}): Promise<ApiResponse> => {
    return axios.post(HttpRoutes.auth.register, data);
}

export const login = (data: { 
    email: string,
    password: string 
}): Promise<ApiResponse<LoginResponse>> => {
    return axios.post(HttpRoutes.auth.login, data);
};

export const logout = (): Promise<ApiResponse> => {
    return axios.post(HttpRoutes.auth.logout);
};
