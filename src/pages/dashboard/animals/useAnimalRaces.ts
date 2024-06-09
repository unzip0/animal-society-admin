
import { Ref, onMounted, ref } from "vue";
import { AnimalRace } from "../../../core/management/animalRaces/domain/AnimalRace";
import { useAnimalRaceStore } from "../../../stores/animal/animalRaceStore";

export function useAnimalRaces() {
    const animalRaces: Ref<AnimalRace[]> = ref([]);
    const store = useAnimalRaceStore();

    onMounted(async () => {
        animalRaces.value = await store.fetchAnimalRaces();
    });

    return { animalRaces };
}