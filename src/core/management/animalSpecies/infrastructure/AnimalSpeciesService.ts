import { getAllAnimalSpecies } from '../../../shared/infrastructure/axios/routes/HttpAnimalRouting';
import { AnimalSpeciesRepository } from "../domain/AnimalSpeciesRepository";
import { AnimalSpecies } from "../domain/AnimalSpecies";
export class AnimalSpeciesService implements AnimalSpeciesRepository
{
    async getAllAnimalSpecies(): Promise<AnimalSpecies[]> {
        return await getAllAnimalSpecies()
            .then(function (response) {
                return response.data.data;
            })
            .catch(function () {
                return [];
            });
    }
}