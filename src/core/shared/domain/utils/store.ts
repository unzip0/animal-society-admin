import { useUserStore } from "../../../../stores/auth/userStore";
import { useAuthStore } from "../../../../stores/auth/authStore";
import { useAnimalRaceStore } from "../../../../stores/animal/animalRaceStore";
import { useAnimalSpeciesStore } from "../../../../stores/animal/animalSpeciesStore";

export function purge() {
    const userStore = useUserStore();
    const authStore = useAuthStore();
    const animalRaceStore = useAnimalRaceStore();
    const animalSpeciesStore = useAnimalSpeciesStore();
    
    userStore.clearUser();
    authStore.clearToken();
    animalRaceStore.clear();
    animalSpeciesStore.clear();

    localStorage.clear();
}