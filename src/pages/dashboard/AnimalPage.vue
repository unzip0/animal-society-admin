<template>
    <v-container fluid>
        <v-data-table
            :headers="headers"
            :items="animals"
            :loading="isLoading"
            loading-text="Loading... Please wait"
        >
        <template v-slot:top>
            <v-toolbar flat>
                <v-toolbar-title>Animals</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog>
                    <template v-slot:activator="{ props }">
                        <v-btn
                            class="mb-2"
                            color="primary"
                            dark
                            v-bind="props"
                        >
                        New animal
                        </v-btn>
                    </template>
                </v-dialog>
            </v-toolbar>
        </template>
        </v-data-table>
    </v-container>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted } from 'vue';
  import { useAnimalStore } from '../../stores/animal/animalStore';
  import { useAnimalRaceStore } from '../../stores/animal/animalRaceStore';
  import { useAnimalSpeciesStore } from '../../stores/animal/animalSpeciesStore';

  export default defineComponent({
    setup() {
        const animalStore = useAnimalStore();
        const animalRaceStore = useAnimalRaceStore();
        const animalSpeciesStore = useAnimalSpeciesStore();

        const headers: Array<object> = [
            {
                title: 'Name',
                align: 'start',
                key: 'name',
                sortable: false,
            },
            {
                title: 'Species',
                key: 'species_id',
            },
            {
                title: 'Race',
                key: 'race_id',
            },
            {
                title: 'Age',
                key: 'age',
            },
            {
                title: 'Available',
                key: 'available',
            },
            {
                title: 'Actions',
                key: 'actions',
                sortable: false,
            }
        ];

        const fetchAnimalSpecies = async () => {
            await animalSpeciesStore.fetchAnimalSpecies();
        };
        const fetchAnimalRaces = async () => {
            await animalRaceStore.fetchAnimalRaces();
        };
        const fetchAnimals = async () => {
            await animalStore.fetchAnimals();
        };

        onMounted(() => {
            fetchAnimalSpecies();
            fetchAnimalRaces();
            fetchAnimals();
        });

        const animalSpecies = computed(() => animalSpeciesStore.animalSpecies);
        const animalRaces = computed(() => animalRaceStore.animalRaces);
        const animals = computed(() => animalStore.animals);
        const isLoading = computed(() => animalStore.isLoading);

        return {
            headers,
            animalSpecies,
            animalRaces,
            animals,
            isLoading,
            fetchAnimalSpecies,
            fetchAnimalRaces,
            fetchAnimals
        };
    },
  });
</script>