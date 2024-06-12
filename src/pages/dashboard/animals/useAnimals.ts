
import { Ref, onMounted, ref } from "vue";
import { useAnimalStore } from "@/stores/animal/animalStore";
import { Animal } from "@/core/management/animals/domain/Animal";

export function useAnimals(loading, species, races) {
    const animals: Ref<Animal[]> = ref([]);
    const store = useAnimalStore();
    const headers: Array<object> = [
        { title: 'Name', align: 'start', key: 'name'},
        { title: 'Species', key: 'species_id', },
        { title: 'Race', key: 'race_id', },
        { title: 'Age', key: 'age', },
        { title: 'Available', key: 'available', },
        { title: 'Actions', key: 'actions', sortable: false, }
    ];

    onMounted(async() => {
        loading.value = true;
        const getAnimalsResponse = await store.fetchAnimals();
        animals.value = getAnimalsResponse.animals;
        /**
         * @todo refactor: get species name and race name from api when finding animal
         */
        animals.value.forEach((animal) => {
            animal.species_id = species.value.find(species => species.id === animal.species_id).name;
            animal.race_id = races.value.find(race => race.id === animal.race_id).name;
            animal.available = animal.available ? 'Yes' : 'No';
        })
        loading.value = false;
    });

    return { headers, animals };
}

export async function deleteAnimal(id: string) {
    return await useAnimalStore().deleteAnimal(id);
}