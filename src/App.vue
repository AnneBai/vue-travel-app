<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router"
import router from "./router/index.js";
import store from "./store";

Vue.use(VueRouter);

export default {
  name: "app",
  store,
  router,
}
</script>

<style>
  #app {
    font-size: 14px;
  }
</style>
