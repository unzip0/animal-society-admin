import { ApiResponse } from "../../../../shared/infrastructure/response/ApiResponse";
import { UserRepository } from "../../domain/UserRepository";
import { LoginResponse } from "./LoginResponse";

export class LoginUser {
    constructor(private userRepository: UserRepository) {}

    async execute(email: string, password: string): Promise<ApiResponse<LoginResponse>> {
        return await this.userRepository.login(email, password);
    }
}