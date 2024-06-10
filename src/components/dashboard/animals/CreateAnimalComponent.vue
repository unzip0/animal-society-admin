<template>
    <v-toolbar flat>
        <v-toolbar-title>Animals</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog persistent width="500" v-model="dialog">
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
                <v-form @submit.prevent="handleCreateAnimal" ref="form">
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col>
                                    <v-text-field
                                    label="Animal name"
                                    v-model="animal.name"
                                    :rules="[required]"
                                    ></v-text-field>
                                </v-col>
                                <v-col>
                                    <v-text-field
                                    type="number"
                                    label="Animal age"
                                    v-model="animal.age"
                                    :rules="[required]"
                                    ></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col
                                >
                                <v-select
                                    label="Species"
                                    :items="species"
                                    item-title="name"
                                    item-value="id"
                                    v-model="animal.species_id"
                                    :rules="[required]"
                                    />
                                </v-col>
                                <v-col>
                                    <v-select
                                        label="Races"
                                        :items="races"
                                        item-title="name"
                                        item-value="id"
                                        v-model="animal.race_id"
                                        :rules="[required]"
                                        />
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-file-input
                                        ref="fileInput"
                                        accept="image/*"
                                        label="Animal photo"
                                        @change="onFileChange"
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
                            type="submit"
                            :loading="isLoading"
                        >
                            Save
                        </v-btn>
                    </v-card-actions>
                </v-form>
            </v-card>
        </v-dialog>
    </v-toolbar>
    <Alert
        :isVisible="alertStore.isVisible"
        :title="alertStore.title"
        :message="alertStore.message"
        :prepend-icon="alertStore.icon"
        :color="alertStore.color"
        @close="alertStore.closeAlert"
    />
</template>
<script lang="ts">
    import { ref, defineComponent } from 'vue';
    import { createAnimal } from './useAnimalActions';
    import { AnimalSpecies } from '../../../core/management/animalSpecies/domain/AnimalSpecies';
    import { AnimalRace } from '../../../core/management/animalRaces/domain/AnimalRace';
    import { showAlert } from '../../../core/shared/domain/alert/alertHelper';
    import { useAlertStore } from '../../../stores/shared/alertStore';

  export default defineComponent({
    name: 'CreateAnimalComponent',
    props: {
      species: {
        type: Array as () => AnimalSpecies[],
        required: true
      },
      races: {
        type: Array as () => AnimalRace[],
        required: true
      }
    },
    setup() {
        const isLoading = ref(false);
        const form = ref(null);
        const alertStore = useAlertStore();
        const dialog = ref(false);
        const animal = ref({
            name: null,
            age: null,
            species_id: null,
            race_id: null,
        });
        const fileInput = ref<HTMLInputElement | null>(null);
        const file = ref<File|null>(null);
        
        function close() {
            dialog.value = false;
            file.value = null;
            animal.value = {
                name: null,
                age: null,
                species_id: null,
                race_id: null,
            };
        }
        function required (v) {
          return !!v || 'Field is required'
        }
        function onFileChange() {
            if (fileInput.value && fileInput.value.files && fileInput.value.files.length > 0) {
                file.value = fileInput.value.files[0];
            }
        }
        async function handleCreateAnimal() {
            const {valid} = await form.value?.validate();
            /**
             * @todo show file error
             */
            if (!valid || !file.value) {
                return;
            }

            createAnimal(animal.value, file.value, isLoading).then(() => {
                showAlert(
                    'Create success',
                    'Animal have been created',
                    'mdi-account-check',
                    'teal-accent-3',
                );
            }).catch(() => {
                showAlert(
                    'Create failed',
                    'Animal have not been created',
                    'mdi-account-off',
                    'red-lighten-4',
                );
            });
        }

        return {
            form,
            required,
            alertStore,
            animal,
            fileInput,
            file,
            close,
            handleCreateAnimal,
            onFileChange,
            dialog,
            isLoading,
        };
    },
  });
</script>