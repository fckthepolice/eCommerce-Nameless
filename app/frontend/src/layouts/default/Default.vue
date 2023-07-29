<template>
  <v-app>
    <headerView />

    <default-view />
    <footerView />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import headerView from './Header.vue';
  import footerView from './Footer.vue'
</script>
