<template>
    <v-container fluid>
        <v-data-table
            :headers="headers"
            :items="animals"
            :loading="isLoading"
            loading-text="Loading... Please wait"
        >
        <template v-slot:top>
            <CreateAnimalComponent :species="animalSpecies" :races="animalRaces"></CreateAnimalComponent>
        </template>
        </v-data-table>
    </v-container>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue';
    import { useAnimals } from './useAnimals';
    import { useAnimalSpecies } from './useAnimalSpecies';
    import { useAnimalRaces } from './useAnimalRaces';
    import CreateAnimalComponent from '../../../components/dashboard/animals/CreateAnimalComponent.vue';

  export default defineComponent({
    components: {
        CreateAnimalComponent
    },
    setup() {
        const isLoading = ref(false);
        const { animalSpecies } = useAnimalSpecies();
        const { animalRaces } = useAnimalRaces();
        const { headers, animals } = useAnimals(isLoading, animalSpecies, animalRaces);

        return {
            headers,
            isLoading,
            animalSpecies,
            animalRaces,
            animals,
        };
    },
  });
</script>