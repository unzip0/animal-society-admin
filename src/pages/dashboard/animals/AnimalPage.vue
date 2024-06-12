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
            <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                    <v-card-title class="text-h6">Are you sure you want to delete this animal?</v-card-title>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue-darken-1" variant="text" @click="close">Cancel</v-btn>
                    <v-btn :loading="isDeleting" color="blue-darken-1" variant="text" @click="deleteConfirm(currentAnimalIndex)">Delete</v-btn>
                    <v-spacer></v-spacer>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>
        <template v-slot:item.actions="{ item }">
            <v-icon class="me-2" size="small" @click="updateAnimalAction(item)">mdi-pencil</v-icon>
            <v-icon size="small" @click="deleteAnimalAction(item)">mdi-delete</v-icon>
        </template>
        </v-data-table>
    </v-container>
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
    import { useAnimals, deleteAnimal } from './useAnimals';
    import { useAnimalSpecies } from './useAnimalSpecies';
    import { useAnimalRaces } from './useAnimalRaces';
    import { useAlertStore } from '../../../stores/shared/alertStore';
    import { showAlert } from '../../../core/shared/domain/alert/alertHelper';
    import CreateAnimalComponent from '../../../components/dashboard/animals/CreateAnimalComponent.vue';
    import { Animal } from '../../../core/management/animals/domain/Animal';


    export default defineComponent({
        components: {
            CreateAnimalComponent
        },
        setup() {
            const alertStore = useAlertStore();
            const isLoading = ref(false);
            const isDeleting = ref(false);
            const { animalSpecies } = useAnimalSpecies();
            const { animalRaces } = useAnimalRaces();
            const { headers, animals } = useAnimals(isLoading, animalSpecies, animalRaces);
            const dialogDelete = ref(false);
            const currentAnimalIndex = ref(-1);

            const updateAnimalAction = (animal: Animal) => {
                console.log(animal);
            };
            const deleteAnimalAction = (animal: Animal) => {
                dialogDelete.value = true;
                currentAnimalIndex.value = animals.value.indexOf(animal);
            };

            const close = () => {
                dialogDelete.value = false;
            };

            const deleteConfirm = async(currentAnimalIndex: number) => {
                isDeleting.value = true;
                await deleteAnimal(animals.value[currentAnimalIndex].id).then(() => {
                    animals.value.splice(currentAnimalIndex, 1)
                }).catch((error) => {
                    showAlert(
                    'Delete failed',
                    'Animal have not been deleted',
                    'mdi-account-off',
                    'red-lighten-4',
                );
                }).finally(() => {
                    isDeleting.value = false;
                    close();
                })
            };

            return {
                alertStore,
                headers,
                isLoading,
                isDeleting,
                close,
                animalSpecies,
                animalRaces,
                animals,
                updateAnimalAction,
                deleteAnimalAction,
                dialogDelete,
                deleteConfirm,
                currentAnimalIndex,
            };
        },
    });
</script>