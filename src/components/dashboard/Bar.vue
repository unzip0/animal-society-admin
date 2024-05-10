<template>
    <v-app-bar
      id="app-bar"
      absolute
      app
      flat
      height="70"
    >
  
      <v-toolbar-title
        class="hidden-sm-and-down font-weight-light"
        v-text="$route.name"
      />
  
      <v-spacer />
  
      <div class="mx-3" />
  
      <v-btn
        class="ml-2"
        min-width="0"
        text
        to="/dashboard"
      >
        <v-icon>mdi-view-dashboard</v-icon>
      </v-btn>
      <v-btn
        class="ml-2"
        min-width="0"
        text
        to="/"
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-app-bar>
  </template>