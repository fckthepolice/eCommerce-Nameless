<template>
  <v-app>
    <headerView />
    <default-bar />

    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import headerView from './Header.vue';
</script>
