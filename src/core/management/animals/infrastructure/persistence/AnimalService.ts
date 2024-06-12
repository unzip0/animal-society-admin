import { AnimalRepository } from "../../domain/AnimalRepository";
import { Animal } from "../../domain/Animal";
import { getAssociationAnimals, createAnimal, deleteAnimal } from "../../../../shared/infrastructure/axios/routes/HttpAnimalRouting";
import { ApiResponse } from "../../../../shared/infrastructure/response/ApiResponse";

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

    async createAnimal(animal: Animal, file: File): Promise<ApiResponse> {
        return await createAnimal(animal, file);
    }

    async deleteAnimal(id: string): Promise<ApiResponse> {
        return await deleteAnimal(id);
    }
}