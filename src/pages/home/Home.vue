<template>
    <div class="home-container">
        <HomeHeader />
        <HomeSwiper />
        <HomeIcons />
        <HomeRecommends />
        <HomeWeekends />
    </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader"
import HomeSwiper from "./components/HomeSwiper"
import HomeIcons from "./components/HomeIcons"
import HomeRecommends from "./components/HomeRecommends"
import HomeWeekends from "./components/HomeWeekends"

export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeRecommends,
        HomeWeekends,
    },
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
