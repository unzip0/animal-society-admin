import { AnimalRepository } from "../../../domain/Animal/AnimalRepository";
import { Animal } from "../../../domain/Animal/Animal";
import { getAssociationAnimals } from '@infrastructure/axios/routes/HttpAnimalRouting'

export class AnimalService implements AnimalRepository
{
    async getAssociationAnimals(associationId: string): Promise<Animal[]> {
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