import { User } from "../../domain/User";
import { UserRepository } from "../../domain/UserRepository";
import { ApiResponse } from "../../../../shared/infrastructure/response/ApiResponse";

export class UpdateUser {
    constructor(private userRepository: UserRepository) {}

    async execute(user: User): Promise<ApiResponse> {
        return await this.userRepository.update(user);
    }
}