import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { ApiResponse } from "../../../../shared/infrastructure/response/ApiResponse";

export class LogoutUser {
    constructor(private userRepository: UserRepository) {}

    async execute(): Promise<ApiResponse> {
        return await this.userRepository.logout();
    }
}