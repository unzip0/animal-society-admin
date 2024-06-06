<template>
    <v-sheet class="mx-auto" width="300">
      <v-form validate-on="submit lazy" @submit.prevent="loginUser" ref="form">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          autocomplete="email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          type="password"
          autocomplete="current-password"
        ></v-text-field>
        <v-btn
            :loading="loading"
            class="mt-2"
            type="submit" 
            text="Login"
            block
        ></v-btn>
      </v-form>
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <v-card
          max-width="400"
          prepend-icon="mdi-account-off"
          text="Invalid credentials"
          title="Login failed"
          color="red-lighten-4"
        >
          <template v-slot:actions>
            <v-btn
              class="ms-auto"
              text="Ok"
              @click="dialog = false"
            ></v-btn>
          </template>
      </v-card>
    </v-dialog>
    </v-sheet>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { useAuthStore } from '../../stores/auth/authStore';
  import { useUserStore } from '../../stores/auth/userStore';
import { LoginResponse } from '../../core/management/users/application/login/LoginResponse';
import { ApiResponse } from '../../core/shared/infrastructure/response/ApiResponse';

  export default defineComponent({
    data: () => ({
        dialog: false,
        loading: false,
        alertText: '',
        email: '',
        password: '',
        emailRules: [
            (v) => !!v || 'Email is required',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
        ],
        passwordRules: [
            (v) => !!v || 'Password is required',
        ],
        userStore: useUserStore(),
        authStore: useAuthStore(),
    }),
    methods: {
      async loginUser () {
        const _this = this;
        const {valid} = await this.$refs.form.validate();
        
        if (!valid) {
          return
        }
        
        this.loading = true
        await this.userStore.login(this.email, this.password).then(function (response: ApiResponse<LoginResponse>) {
          _this.userStore.storeUser(response.data.data.user);
          _this.authStore.storeToken(response.data.data.access_token);
          _this.$router.push({ name: 'Home' });
        }).catch(function () {
          _this.dialog = true;
        });

        this.loading = false
      },
    }
  })
</script>