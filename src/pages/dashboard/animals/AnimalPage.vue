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
                <v-dialog width="500">
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
                    <v-card>
                        <v-card-title>
                        <span class="text-h5">New Animal</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                        label="Animal name"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field
                                        type="number"
                                        label="Animal age"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col
                                    >
                                    <v-select
                                        label="Species"
                                        :items="animalSpecies"
                                        item-title="name"
                                        item-value="id"
                                        />
                                    </v-col>
                                    <v-col>
                                        <v-select
                                            label="Races"
                                            :items="animalRaces"
                                            item-title="name"
                                            item-value="id"
                                            />
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-file-input
                                            accept="image/*"
                                            label="Animal photo"
                                        ></v-file-input>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                                @click="close"
                            >
                                Cancel
                            </v-btn>
                            <v-btn
                                color="blue-darken-1"
                                variant="text"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
        </template>
        </v-data-table>
    </v-container>
</template>

<script lang="ts">
    import { ref, defineComponent } from 'vue';
    import { useAnimals } from './useAnimals';
    import { useAnimalSpecies } from './useAnimalSpecies';
    import { useAnimalRaces } from './useAnimalRaces';

  export default defineComponent({
    setup() {
        const isLoading = ref(false);
        const { animalSpecies } = useAnimalSpecies();
        const { animalRaces } = useAnimalRaces();
        const { headers, animals} = useAnimals(isLoading, animalSpecies, animalRaces);

        return {
            headers,
            isLoading,
            animalSpecies,
            animalRaces,
            animals,
            close,
        };
    },
  });
</script>