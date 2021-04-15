<template>
  <v-app id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <div class="app-sizing"> -->
      <router-view />
    <!-- </div> -->
  </v-app>
</template>
<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "App",
    created() {
    },

  });
</script>

<style lang="scss">
  .theme--light.v-application {
    background-color: unset !important;
    color: unset !important;
  }
</style>
