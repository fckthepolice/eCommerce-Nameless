<template>
  <v-app>
    <headerView />
    <menuView />

    <default-view />
    <footerView />
  </v-app>
</template>

<style>
    @import url(/fonts/fonts.css);
</style>

<script setup>
  import DefaultView from './View.vue'
  import headerView from './Header.vue';
  import footerView from './Footer.vue'
  import menuView from './S_header.vue'
</script>
