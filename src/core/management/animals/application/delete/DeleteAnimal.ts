import { AnimalRepository } from "../../domain/AnimalRepository";
import { ApiResponse } from "../../../../shared/infrastructure/response/ApiResponse";

export class DeleteAnimal {
    constructor(private animalRepository: AnimalRepository) {}

    async execute(id: string): Promise<ApiResponse> {
        return await this.animalRepository.deleteAnimal(id);
    }
}