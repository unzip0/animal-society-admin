
import { Animal } from "../../../core/management/animals/domain/Animal";
import { v4 as uuidv4 } from 'uuid';
import { AnimalService } from "../../../core/management/animals/infrastructure/persistence/AnimalService";

export async function createAnimal(animalData: object, uploadedFile: File|null, loading) {
    const animal: Animal = new Animal(
         uuidv4(),
         animalData['name'],
         animalData['species_id'],
         animalData['race_id'],
         animalData['age'],
        true,
    );

    const animalService = new AnimalService();
    loading.value = true;
    const createdAnimalResponse = await animalService.createAnimal(animal, uploadedFile as File);
    loading.value = false;

    return createdAnimalResponse;
}