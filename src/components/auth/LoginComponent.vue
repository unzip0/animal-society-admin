<template>
    <v-sheet class="mx-auto" width="300">
      <v-form validate-on="submit lazy" @submit.prevent="login" ref="form">
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
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
          prepend-icon="mdi-error"
          text="Your application will relaunch automatically after the update is complete."
          title="Update in progress"
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

      <!-- <v-alert
        v-if="alert"
        closable
        vmodel="alert"
        text="Invalid credentials"
        type="error"
        ></v-alert> -->
    </v-sheet>
</template>
<script>
  import axios from 'axios'

  export default {
    data: () => ({
        dialog: false,
        loading: false,
        email: '',
        password: '',
        emailRules: [
            (v) => !!v || 'Email is required',
            (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
        ],
        passwordRules: [
            (v) => !!v || 'Password is required',
        ],
    }),
    methods: {
        async login (event) {
          const {valid, errors} = await this.$refs.form.validate();

          if (!valid) {
            return
          }

          this.loading = true
          
          await axios.post('http://localhost:8000/api/v1/users/login', {
            email: this.email,
            password: this.password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });

          this.loading = false
      },
    }
  }
</script>