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
@import "~@/assets/styles/variables.scss";
@import "~@/assets/styles/mixins.scss";

.header {
    @include header;
    position: relative;
    text-align: center;
}
.return {
    position: absolute;
    left: 10px;
}
.title {
    font-size: 16px;
}
</style>