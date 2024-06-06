import { AnimalSpecies } from "../../domain/AnimalSpecies";
import { AnimalSpeciesRepository } from "../../domain/AnimalSpeciesRepository";

export class GetAllAnimalSpecies {
    constructor(private animalSpeciesRepository: AnimalSpeciesRepository) {}

    async execute(): Promise<AnimalSpecies[]> {
        return await this.animalSpeciesRepository.getAllAnimalSpecies();
    }
}