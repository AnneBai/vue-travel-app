
import VueRouter from "vue-router"
import Home from '../pages/home/Home.vue'
import City from "../pages/city/City.vue"

export default new VueRouter({
    routes: [{
        name: "Home",
        path: "/",
        component: Home,
    }, {
        name: "City",
        path: "/city",
        component: City,
    }]
})
