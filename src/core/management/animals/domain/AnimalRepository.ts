import { ApiResponse } from "../../../shared/infrastructure/response/ApiResponse";
import { Animal } from "./Animal";

export interface AnimalRepository
{
    createAnimal(animal: Animal, file: File): Promise<ApiResponse>;
    getAssociationAnimals(): Promise<Animal[]>;
}