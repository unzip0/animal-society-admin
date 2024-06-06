import { AnimalRace } from "../../domain/AnimalRace";
import { AnimalRaceRepository } from "../../domain/AnimalRaceRepository";

export class GetAllAnimalRaces {
    constructor(private animalRaceRepository: AnimalRaceRepository) {}

    async execute(): Promise<AnimalRace[]> {
        return await this.animalRaceRepository.getAllAnimalRaces();
    }
}