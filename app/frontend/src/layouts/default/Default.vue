<template>
  <v-app>
    <headerView />
    <default-bar />

    <default-view />
    <footerView />
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import headerView from './Header.vue';
  import footerView from './Footer.vue'
</script>
