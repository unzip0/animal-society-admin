import { AnimalRace } from "./AnimalRace";

export interface AnimalRaceRepository
{
    getAllAnimalRaces(): Promise<AnimalRace[]>;
}