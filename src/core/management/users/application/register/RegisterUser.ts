import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { ApiResponse } from "../../../../shared/infrastructure/response/ApiResponse";

export class RegisterUser {
    constructor(private userRepository: UserRepository) {}

    async execute(user: User, password: string): Promise<ApiResponse> {
        return await this.userRepository.create(user, password);
    }
}