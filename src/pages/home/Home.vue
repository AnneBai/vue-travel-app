<template>
    <div class="home-container">
        <HomeHeader />
        <HomeSwiper />
        <HomeIcons />
        <HomeReccomends />
    </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader"
import HomeSwiper from "./components/HomeSwiper"
import HomeIcons from "./components/HomeIcons"
import HomeReccomends from "./components/HomeRecommends"

export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeSwiper,
        HomeIcons,
        HomeReccomends,
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
