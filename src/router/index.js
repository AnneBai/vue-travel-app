
import VueRouter from "vue-router"
import Home from '../pages/home/Home.vue'
import City from "../pages/city/City.vue"
import Detail from "../pages/detail/Detail.vue"

export default new VueRouter({
    routes: [{
        name: "Home",
        path: "/",
        component: Home,
    }, {
        name: "City",
        path: "/city",
        component: City,
    }, {
        name: "Detail",
        path: "/detail/:id",
        component: Detail,
    }]
})
