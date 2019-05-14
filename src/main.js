import Vue from 'vue'
import App from './App.vue'
import fastclick from "fastclick";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "./assets/styles/reset.css";
import "./assets/styles/iconfont.css";
// require styles
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false
fastclick.attach(document.body);
new Vue({
  render: h => h(App),
}).$mount('#app')
