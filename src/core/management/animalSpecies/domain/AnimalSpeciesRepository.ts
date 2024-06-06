import { AnimalSpecies } from "./AnimalSpecies";

export interface AnimalSpeciesRepository
{
    getAllAnimalSpecies(): Promise<AnimalSpecies[]>;
}