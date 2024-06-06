import { defineStore } from "pinia";
import { AnimalSpecies } from "../../core/management/animalSpecies/domain/AnimalSpecies";
import { AnimalSpeciesService } from "../../core/management/animalSpecies/infrastructure/AnimalSpeciesService";
import { GetAllAnimalSpecies } from "../../core/management/animalSpecies/application/getAll/GetAllAnimalSpecies";

export const useAnimalSpeciesStore = defineStore('animalSpecies', {
    state: () => ({
        animalSpecies: [] as AnimalSpecies[],
    }),
    actions: {
        async fetchAnimalSpecies() {
            const storedSpecies = localStorage.getItem('animal_species');
            if (storedSpecies) {
                const parsedData = JSON.parse(storedSpecies);
                this.animalSpecies = parsedData.animalSpecies;
                return;
            }

            const animalSpeciesService = new AnimalSpeciesService();
            const getAllAnimalSpecies = new GetAllAnimalSpecies(animalSpeciesService);
            this.animalSpecies = await getAllAnimalSpecies.execute();
            this.storeSpecies(this.animalSpecies);
        },
        storeSpecies(species: AnimalSpecies[]) {
            localStorage.setItem('animal_species', JSON.stringify({ species: species }));
        },
        clearSpecies() {
            localStorage.removeItem('animal_species');
            this.animalSpecies = [];
        },
        clear() {
            this.$reset();
        }
    },
});