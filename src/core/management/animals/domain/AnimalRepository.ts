import { Animal } from "./Animal";

export interface AnimalRepository
{
    createAnimal(animal: Animal): Promise<void>;
    getAssociationAnimals(associationId: string): Promise<Animal[]>;
}