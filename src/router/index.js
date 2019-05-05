
import VueRouter from "vue-router"
import Home from '../pages/home/Home.vue'
export default new VueRouter({
    routes: [{
        name: "Home",
        path: "/",
        component: Home,
    }]
})
