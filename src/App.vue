<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router"
import router from "./router/index.js";
Vue.use(VueRouter);

export default {
  name: "app",
  router,
}
</script>

<style>
  #app {
    font-size: 14px;
  }
</style>
