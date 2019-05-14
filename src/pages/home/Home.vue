<template>
    <div>
        <HomeHeader></HomeHeader>
        <HomeSwiper />
        <span>test</span>
    </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader"
import HomeSwiper from "./components/HomeSwiper"

export default {
    name: "Home",
    components: {
        HomeHeader,
        HomeSwiper,
    },
}
</script>

<style>
.home {
    background: #ccc;
}
</style>
