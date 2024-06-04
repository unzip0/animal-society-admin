import { AnimalRepository } from "../../domain/AnimalRepository";
import { Animal } from "../../domain/Animal";

export class GetAssociationAnimals {
    constructor(private animalRepository: AnimalRepository) {}

    async execute(): Promise<Animal[]> {
        return await this.animalRepository.getAssociationAnimals();
    }
}