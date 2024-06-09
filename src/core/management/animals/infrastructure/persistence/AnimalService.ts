import { AnimalRepository } from "../../domain/AnimalRepository";
import { Animal } from "../../domain/Animal";
import { getAssociationAnimals } from "../../../../shared/infrastructure/axios/routes/HttpAnimalRouting";

export class AnimalService implements AnimalRepository
{
    async getAssociationAnimals(): Promise<Animal[]> {
        return await getAssociationAnimals()
            .then(function (response) {
                return response.data.data;
            })
            .catch(function (error) {
                return [];
            });
    }

    async createAnimal(animal: Animal): Promise<void> {
        return;
    }
}