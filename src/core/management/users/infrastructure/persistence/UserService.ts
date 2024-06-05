import { UserRepository } from "../../domain/UserRepository";
import { User } from "../../domain/User";
import { ApiResponse } from "../../../../shared/infrastructure/response/ApiResponse";
import { LoginResponse } from "../../application/login/LoginResponse";
import { login, register, logout } from "../../../../shared/infrastructure/axios/routes/HttpAuthRouting";
import { update } from '../../../../shared/infrastructure/axios/routes/HttpUserRouting';


export class UserService implements UserRepository
{
    async create(user: User, password: string): Promise<ApiResponse> {
        return await register({
            id: user.getId(),
            name: user.getName(),
            first_last_name: user.getFirstLastName(),
            second_last_name: user.getSecondLastName(),
            email: user.getEmail(),
            password: password,
            role: user.getRole()
        });
    }

    async update(user: User): Promise<ApiResponse> {
        return await update(
            user.getId(), 
            {
                name: user.getName(),
                first_last_name: user.getFirstLastName(),
                second_last_name: user.getSecondLastName()
            });
    }

    async login(email: string, password: string): Promise<ApiResponse<LoginResponse>> {
        return await login({email: email, password: password});
    }

    async logout(): Promise<ApiResponse> {
        return await logout();
    }
}