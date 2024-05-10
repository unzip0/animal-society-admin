<template>
  <v-navigation-drawer
    theme="dark"
    permanent
    width="250"
    mobile-break-point="960"
    app
  >
  <v-divider class="mb-1" />
  
  <v-list dense nav>
    <v-list-item
            prepend-avatar="../../assets/logo.png"
            title="Animal Society"
          >
    </v-list-item>
  </v-list>

  <v-divider class="mb-2" />

  <v-list color="transparent">
    <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard"></v-list-item>
    <v-list-item prepend-icon="mdi-account-box" title="Account"></v-list-item>
    <v-list-item prepend-icon="mdi-gavel" title="Admin"></v-list-item>
  </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="logoutUser">Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import axios from 'axios';
  import { userStore } from '../../stores/auth/userStore';
  import { mapState, mapActions } from 'pinia';

  export default defineComponent({
    computed: {
      ...mapState(userStore, [
          'token',
          'userIsAuth'
      ])
    },
    methods: {
      ...mapActions(userStore, ['logout']),
      async logoutUser() {
        const _this = this;
        axios.post(`${import.meta.env.VITE_API_URL}/users/logout`, {}, {
            headers: {
                Authorization: `${_this.token.type} ${_this.token.token}`
            }
        }).then(function (response) {
          _this.logout();
          _this.$router.push({name: 'Home'});
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }
  })
</script>
