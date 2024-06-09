import { defineStore } from "pinia";
import { AnimalRace } from "../../core/management/animalRaces/domain/AnimalRace";
import { AnimalRaceService } from "../../core/management/animalRaces/infrastructure/AnimalRaceService";
import { GetAllAnimalRaces } from "../../core/management/animalRaces/application/getAll/GetAllAnimalRaces";

export const useAnimalRaceStore = defineStore('animalRace', {
    state: () => ({
        animalRaces: [] as AnimalRace[],
    }),
    actions: {
        async fetchAnimalRaces(): Promise<AnimalRace[]> {
            const storedRaces = localStorage.getItem('animal_races');
            if (storedRaces) {
                const parsedData = JSON.parse(storedRaces);
                this.animalRaces = parsedData;
                return this.animalRaces;
            }

            const animalRaceService = new AnimalRaceService();
            const getAllAnimalRaces = new GetAllAnimalRaces(animalRaceService);
            this.animalRaces = await getAllAnimalRaces.execute();
            this.storeRaces(this.animalRaces);
            return this.animalRaces;
        },
        storeRaces(races: AnimalRace[]) {
            localStorage.setItem('animal_races', JSON.stringify(races));
        },
        clear() {
            this.$reset();
        }
    },
});