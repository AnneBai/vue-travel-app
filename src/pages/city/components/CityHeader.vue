<template>
    <div class="header">
        <router-link to="/">
            <span class="return iconfont">&#xe660;</span>
        </router-link>
        <span class="title">选择城市</span>
    </div>
</template>

<script>
export default {
    name: "CityHeader",
}
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";
@import "styles/mixins.scss";

.header {
    @include header;
    position: relative;
    text-align: center;
    z-index: 2;
}
.return {
    position: absolute;
    left: 10px;
}
.title {
    font-size: 16px;
}
</style>