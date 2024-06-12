import { defineStore } from "pinia";
import {Animal} from "@/core/management/animals/domain/Animal";
import { GetAssociationAnimals } from "@/core/management/animals/application/getAll/GetAssociationAnimals";
import {AnimalService} from "@/core/management/animals/infrastructure/persistence/AnimalService";
import { DeleteAnimal } from "../../core/management/animals/application/delete/DeleteAnimal";

export const useAnimalStore = defineStore('animal', {
    state: () => ({
        animals: [] as Animal[],
    }),
    actions: {
        async fetchAnimals() {
            const animalService = new AnimalService();
            const getAssociationAnimals = new GetAssociationAnimals(animalService);
            this.animals = await getAssociationAnimals.execute();
            
            return {
                animals: this.animals,
            };
        },
        async deleteAnimal(id: string) {
            const animalService = new AnimalService();
            const deleteAnimal = new DeleteAnimal(animalService);
            return await deleteAnimal.execute(id);
        }
    },
});