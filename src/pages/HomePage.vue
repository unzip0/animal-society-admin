<template>
    <v-container class="fill-height">
      <v-responsive
        class="align-centerfill-height mx-auto"
        max-width="900"
      >
        <v-img
          class="mb-4"
          height="200"
          src="@/assets/logo.png"
        />
  
        <div class="text-center">
          <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>
          <h1 class="text-h4 font-weight-bold">Animal Society backoffice</h1>
        </div>
  
        <div class="py-4" />
  
        <v-row>
          <v-col cols="12">
            <LoginComponent/>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </template>
  
  <script setup lang="ts">
    import LoginComponent from '@/components/auth/LoginComponent.vue'
  </script>
  