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
          <v-form validate-on="submit lazy" @submit.prevent="updateUserSubmit" ref="form">
            <v-container class="py-0">
              <v-row>
                  <v-col
                      cols="12"
                      md="6"
                  >
                  <v-text-field
                    label="Email Address"
                    v-model="user.email"
                    disabled
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="User Name"
                    v-model="user.name"
                    :rules="[required]"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="First last name"
                    v-model="user.first_last_name"
                    :rules="[required]"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Second Last Name"
                    v-model="user.second_last_name"
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
                    v-model="user.active"
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
  import { useUserStore } from '../../stores/auth/userStore';
  import { useAlertStore } from '../../stores/shared/alertStore';
  import { User } from '../../core/management/users/domain/User';
  import { showAlert } from '../../core/shared/domain/alert/alertHelper';

  export default defineComponent({
    components: {
      Alert
    },
    data() {
      const userStore = useUserStore();
      const storedUser = userStore.user;
      const user: User = new User(
        storedUser.id,
        storedUser.associationId,
        storedUser.name,
        storedUser.first_last_name,
        storedUser.second_last_name,
        storedUser.email,
        storedUser.role,
        storedUser.active,
      );

      return {
        user: user,
        loading: false,
        dialog: false,
        alertStore: useAlertStore(),
        userStore,
      }    
    },
    methods: {
      required (v) {
        return !!v || 'Field is required'
      },
      async updateUserSubmit () {
        const _this = this;
        
        const {valid} = await this.$refs.form.validate();
        if (!valid) {
          return
        }

        this.loading = true;
        await this.userStore.update(this.user).then(function () {
          const userStore = useUserStore();
          userStore.storeUser(_this.user);
          showAlert(
            'Update success',
            'User info have been updated',
            'mdi-account-check',
            'teal-accent-3',
          );
        }).catch(function (error) {
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
  