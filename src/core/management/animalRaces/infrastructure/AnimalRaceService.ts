import { AnimalRace } from "../domain/AnimalRace";
import { AnimalRaceRepository } from "../domain/AnimalRaceRepository";
import { getAllAnimalRaces } from '../../../shared/infrastructure/axios/routes/HttpAnimalRouting';
export class AnimalRaceService implements AnimalRaceRepository
{
    async getAllAnimalRaces(): Promise<AnimalRace[]> {
        return await getAllAnimalRaces()
            .then(function (response) {
                return response.data.data;
            })
            .catch(function () {
                return [];
            });
    }
}