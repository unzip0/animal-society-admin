import axios from '../axios';
import HttpRoutes from './HttpRoutes';

export const register = (data: { 
    name: string;
    first_last_name: string;
    second_last_name: string;
    email: string;
    password: string 
}) => {
    return axios.post(HttpRoutes.auth.register, data);
}

export const login = (data: { email: string; password: string }) => {
    return axios.post(HttpRoutes.auth.login, data);
};

export const logout = () => {
    return axios.post(HttpRoutes.auth.logout);
};
