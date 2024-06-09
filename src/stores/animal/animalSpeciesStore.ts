import { defineStore } from "pinia";
import { AnimalSpecies } from "../../core/management/animalSpecies/domain/AnimalSpecies";
import { AnimalSpeciesService } from "../../core/management/animalSpecies/infrastructure/AnimalSpeciesService";
import { GetAllAnimalSpecies } from "../../core/management/animalSpecies/application/getAll/GetAllAnimalSpecies";

export const useAnimalSpeciesStore = defineStore('animalSpecies', {
    state: () => ({
        storedAnimalSpecies: localStorage.getItem('animal_species')|| null,
    }),
    actions: {
        async fetchAnimalSpecies() {
            const storedSpecies = localStorage.getItem('animal_species');
            if (storedSpecies) {
                const parsedData = JSON.parse(storedSpecies);
                this.storedAnimalSpecies = parsedData;
                return parsedData;
            }

            const animalSpeciesService = new AnimalSpeciesService();
            const getAllAnimalSpecies = new GetAllAnimalSpecies(animalSpeciesService);
            this.storedAnimalSpecies = await getAllAnimalSpecies.execute();
            this.storeSpecies(this.storedAnimalSpecies);
            return this.storedAnimalSpecies
        },
        storeSpecies(species: AnimalSpecies[]) {
            localStorage.setItem('animal_species', JSON.stringify(species));
        },
        clearSpecies() {
            localStorage.removeItem('animal_species');
            this.storedAnimalSpecies = null;
        },
        clear() {
            this.$reset();
        }
    },
});