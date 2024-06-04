import { defineStore } from "pinia";
import {Animal} from "@/core/management/animals/domain/Animal";
import { GetAssociationAnimals } from "@/core/management/animals/application/getAll/GetAssociationAnimals";
import {AnimalService} from "@/core/management/animals/infrastructure/persistence/AnimalService";

export const useAnimalStore = defineStore('animal', {
    state: () => ({
        animals: [] as Animal[],
        isLoading: false,
    }),
    actions: {
        async fetchAnimals() {
            this.isLoading = true;
            const animalService = new AnimalService();
            const getAssociationAnimals = new GetAssociationAnimals(animalService);
            this.animals = await getAssociationAnimals.execute();
            this.isLoading = false;
        }
    },
});