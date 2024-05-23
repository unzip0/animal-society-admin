<template>
    <v-dialog v-model="isVisible" width="auto">
        <v-card
            max-width="400"
            :prepend-icon=icon
            :text=message
            :title=title
            :color=color
        >
            <v-card-actions>
                <v-btn
                    class="ms-auto"
                    text="Ok"
                    @click="close"
                />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
    import { defineComponent, ref } from 'vue';

    export default defineComponent({
        props: {
            title: {
                type: String,
                default: ''
            },
            message: {
                type: String,
                default: ''
            },
            color: {
                type: String,
                default: ''
            },
            icon: {
                type: String,
                default: 'mdi-account-edit'
            },
            isVisible: {
                type: Boolean,
                default: false,
            },
        },
        methods: {
            close() {
                this.$emit('close');
            }
        }
    });
</script>