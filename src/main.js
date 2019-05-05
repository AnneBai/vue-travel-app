import Vue from 'vue'
import App from './App.vue'
import "./assets/styles/reset.css"
import fastclick from "fastclick";

Vue.config.productionTip = false
fastclick.attach(document.body);
new Vue({
  render: h => h(App),
}).$mount('#app')
