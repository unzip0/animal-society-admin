import { LoginResponse } from "../application/login/LoginResponse";
import { User } from "./User";
import { ApiResponse } from "../../../shared/infrastructure/response/ApiResponse";
export interface UserRepository
{
    create(user: User, password: string): Promise<ApiResponse>;
    update(user: User): Promise<ApiResponse>;
    login(email: string, password: string): Promise<ApiResponse<LoginResponse>>;
    logout(): Promise<ApiResponse>;
}