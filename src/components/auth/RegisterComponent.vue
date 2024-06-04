<template>
    <v-sheet class="mx-auto" width="300">
      <v-form validate-on="submit lazy" @submit.prevent="registerUser" ref="form">
        <v-text-field
          v-model="name"
          :rules="[required]"
          label="Name"
        ></v-text-field>
        <v-text-field
          v-model="firstLastName"
          :rules="[required]"
          label="First last name"
        ></v-text-field>
        <v-text-field
          v-model="secondLastName"
          :rules="[required]"
          label="Second last name"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules=emailRules
          label="Email"
        ></v-text-field>
        <v-text-field
          v-model="password"
          :rules=passwordRules
          label="Password"
          type="password"
          auutocomplete="current-password"
        ></v-text-field>
        <v-btn
            :loading="loading"
            class="mt-2"
            type="submit" 
            text="Register"
            block
        ></v-btn>
      </v-form>
    </v-sheet>
    <v-dialog
        v-model="dialog"
        width="auto"
      >
        <v-card
          max-width="400"
          :prepend-icon=alertIcon
          :text=alertText
          :title=alertTitle
          :color=alertColor
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
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { register } from 'infrastructure/axios/routes/HttpAuthRouting'
  import { v4 as uuidv4 } from 'uuid';

  export default defineComponent({
      data() {
        return {
          dialog: false,
          loading: false,
          alertText: '',
          alertTitle: '',
          alertColor: '',
          alertIcon: '',
          id: uuidv4(),
          name: '',
          firstLastName: '',
          secondLastName: '',
          email: '',
          password: '',
          role: 'admin',
          emailRules: [
              (v) => !!v || 'Field is required',
              (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'Email must be valid'
          ],
          passwordRules: [
              (v) => !!v || 'Field is required',
              (v) => /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(v) || 'Password must be valid'
          ],
        }    
      },
      methods: {
        required (v) {
          return !!v || 'Field is required'
        },
        async registerUser () {
          const _this = this;
          const {valid} = await this.$refs.form.validate();
          if (!valid) {
            return
          }
          
          this.loading = true
          
          await register({
            id: this.id,
            name: this.name,
            first_last_name: this.firstLastName,
            second_last_name: this.secondLastName,
            email: this.email,
            password: this.password,
            role: this.role
          })
          .then(function (response) {
            _this.alertTitle = 'Registration success';
            _this.alertText = 'Congratz! You can login now and help to animal community!'
            _this.alertColor = 'teal-accent-3';
            _this.alertIcon = 'mdi-account-check';
            _this.dialog = true;
            _this.$refs.form.reset();
          })
          .catch(function (error) {
            _this.alertTitle = 'Registration failed';
            _this.alertText = error.response.data.data.message;
            _this.alertColor = 'red-lighten-4';
            _this.alertIcon = 'mdi-account-off';
            _this.dialog = true;
          });

          this.loading = false
        }
      }
  });
</script>