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
            </v-toolbar>
        </template>
        </v-data-table>
    </v-container>
</template>

<script lang="ts">
  import { computed, defineComponent, onMounted } from 'vue';
  import {useAnimalStore} from '@/stores/animal/animalStore';

  export default defineComponent({
    setup() {
        const animalStore = useAnimalStore();
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

        const fetchAnimals = async () => {
            await animalStore.fetchAnimals();
        };
        onMounted(() => {
            fetchAnimals();
        });

        const animals = computed(() => animalStore.animals);
        const isLoading = computed(() => animalStore.isLoading);

        return {
            headers,
            animals,
            isLoading,
            fetchAnimals
        };
    },
  });
</script>