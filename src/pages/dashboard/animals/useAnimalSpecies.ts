
import { Ref, onMounted, ref, computed } from "vue";
import { useAnimalSpeciesStore } from "../../../stores/animal/animalSpeciesStore";
import { AnimalSpecies } from "../../../core/management/animalSpecies/domain/AnimalSpecies";

export function useAnimalSpecies() {
    const animalSpecies: Ref<AnimalSpecies[]> = ref([]);
    const store = useAnimalSpeciesStore();

    onMounted(async () => {
        animalSpecies.value = await store.fetchAnimalSpecies();
    });

    return { animalSpecies };
}