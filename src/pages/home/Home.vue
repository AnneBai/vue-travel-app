<template>
    <div class="home-container">
        <HomeHeader :city="city"/>
        <HomeSwiper :swiperList="swiperList"/>
        <HomeIcons :iconList="iconList"/>
        <HomeRecommends :recommendList="recommendList"/>
        <HomeWeekends :weekendsList="weekendsList"/>
    </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeSwiper from "./components/HomeSwiper";
import HomeIcons from "./components/HomeIcons";
import HomeRecommends from "./components/HomeRecommends";
import HomeWeekends from "./components/HomeWeekends";
import axios from "axios";
import { mapState } from 'vuex';

export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommends,
        HomeWeekends,
    },
    data() {
        return {
            iconList: [],
            recommendList: [],
            swiperList: [],
            weekendsList: [],
        }
    },
    computed: mapState([
        "city",
    ]),
    methods: {
        async getHomeData() {
            const {data} = await axios.get('/api/index.json');
            this.dealWithData(data);
        },
        dealWithData(data) {
            Object.assign(this, data);
        }
    },
    mounted() {
        this.lastCity = this.city;
        this.getHomeData();
    },
    activated() {
        if (this.lastCity !== this.city) {
            this.getHomeData();
            this.lastCity = this.city;
        }
    }
}
</script>

<style>
.home-container {
    height: 100vh;
}
.home {
    background: #ccc;
}
</style>
