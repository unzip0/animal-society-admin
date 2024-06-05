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
    <v-list-item 
      prepend-icon="mdi-view-dashboard"
      title="Dashboard"
      :to="{ name: 'Dashboard' }"
      color="teal-accent-3"
    />
    <v-list-item 
      prepend-icon="mdi-cat"
      title="Animals"
      :to="{ name: 'Animals' }"
      color="teal-accent-3"
    />
    <v-list-item 
      prepend-icon="mdi-account-box" 
      title="Profile"
      :to="{ name: 'Profile' }"
      color="teal-accent-3"
    />
    <v-list-item
      prepend-icon="mdi-gavel"
      title="Admin"
      color="teal-accent-3"
    />
  </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn 
          :loading="loading"
          block 
          @click="logoutUser"
          color="red-lighten-4"
        >Logout
      </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { useUserStore } from '../../stores/auth/userStore';
  import { useAuthStore } from '../../stores/auth/authStore';

  export default defineComponent({
    data() {
      return {
        loading: false,
        userStore: useUserStore(),
        authStore: useAuthStore(),
      }
    },
    methods: {
      async logoutUser() {
        const _this = this;
        this.loading = true;
        
        await this.userStore.logout().then(function (response) {
          _this.userStore.clearUser();
          _this.authStore.clearToken();
          _this.$router.push({name: 'Authentication'});
        }).catch(function (error) { 
          console.log(error);
        });

        this.loading = false
      }
    }
  })
</script>
