<template>
  <v-container
    fluid
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="8"
      >
        <v-card>
          <v-form validate-on="submit lazy" @submit.prevent="updateUser" ref="form">
            <v-container class="py-0">
              <v-row>
                  <v-col
                      cols="12"
                      md="6"
                  >
                  <v-text-field
                    label="Email Address"
                    v-model="email"
                    disabled
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="User Name"
                    v-model="name"
                    :rules="[required]"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="First last name"
                    v-model="firstLastName"
                    :rules="[required]"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Second Last Name"
                    v-model="secondLastName"
                    :rules="[required]"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    label="About Me"
                    value="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  />
                </v-col>
                <v-col cols="12">
                  <v-switch
                    disabled
                    v-model="active"
                    label="User is active"
                    color="green"
                    />
                </v-col>
                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="teal-accent-3"
                    class="mr-0"
                    type="submit"
                    :loading="loading"
                  >
                    Update Profile
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
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
  import { defineComponent } from 'vue';
  import Alert from '@/components/shared/Alert.vue';
  import { userStore } from '@/stores/auth/userStore';
  import { useAlertStore } from '@/stores/shared/alertStore';
  import axios from 'infrastructure/axios/axios';
  import { updateUser } from 'infrastructure/axios/routes/HttpUserRouting'
  import { showAlert } from 'infrastructure/helpers/alertHelper';

  export default defineComponent({
    components: {
      Alert
    },
    data() {
      const authStore = userStore();
      const user = authStore.user;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          firstLastName: user.first_last_name,
          secondLastName: user.second_last_name,
          active: user.active,
          loading: false,
          dialog: false,
          alertStore: useAlertStore(),
        }    
      },
      methods: {
        required (v) {
          return !!v || 'Field is required'
        },
        async updateUser () {
          const _this = this;
          
          const {valid} = await this.$refs.form.validate();
          if (!valid) {
            return
          }

          this.loading = true
          
          await updateUser(this.id, {
            name: this.name,
            first_last_name: this.firstLastName,
            second_last_name: this.secondLastName,
          })
          .then(function (response) {
            const authStore = userStore();
            authStore.updateUserProperties(
              _this.name,
              _this.firstLastName,
              _this.secondLastName
            );

            showAlert(
              'Update success',
              'User info have been updated',
              'mdi-account-check',
              'teal-accent-3',
            );
          })
          .catch(function (error) {
            showAlert(
              'Update failed',
              error.response.data.data.message,
              'mdi-account-off',
              'red-lighten-4',
            );
          });

          this.loading = false
        }
      },
  });
</script>
  