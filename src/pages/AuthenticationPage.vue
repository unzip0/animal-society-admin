<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="400"
      app
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
              <v-sheet class="mx-auto" width="300">
                  <v-card>
                      <v-tabs
                          grow
                          v-model="tab"
                          bg-color="dark"
                          >
                          <v-tab value="login">Login</v-tab>
                          <v-tab value="register">Register</v-tab>
                      </v-tabs>
                  </v-card>
              </v-sheet>
          </v-col>
        <v-col cols="12">
          <v-card-text>
              <v-tabs-window v-model="tab">
                  <v-tabs-window-item value="login">
                      <LoginComponent/>
                  </v-tabs-window-item>
                  <v-tabs-window-item value="register">
                      <RegisterComponent/>
                  </v-tabs-window-item>
              </v-tabs-window>
          </v-card-text>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({ 
    data: () => ({
      tab: 'login',
    })
});
</script>
  