<template>
<div>
    <div class="header-abs" v-show="showAbs">
        <router-link to="/">
            <div class="return iconfont">&#xe660;</div>
        </router-link>
    </div>
    <div
        class="header-fixed"
        v-show="!showAbs"
        :style="opacityStyle"
    >
        <span>
            <router-link to="/">
                <div class="return iconfont">&#xe660;</div>
            </router-link>
        </span>
        <span class="header-title">推荐详情</span>
    </div>
</div>
</template>

<script>
const h = 150;
export default {
    name: "DetailHeader",
    data() {
        return {
            showAbs: true,
            timer: null,
            opacityStyle: {
                opacity: 0,
            },
        }
    },
    methods: {
        handleScroll() {
            const scrollTop = document.documentElement.scrollTop;
            this.showAbs = scrollTop < 5;
            const opacity = scrollTop >= h ? 1 : (scrollTop / 150)
            this.opacityStyle = {opacity}
            this.timer = null;
        }
    },
    activated() {
        window.addEventListener("scroll", this.handleScroll);
    },
    deactivated() {
        window.removeEventListener("scroll", this.handleScroll);
    }
}
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
.return {
    text-align: center;
    font-size: 20px;
}
.header-abs {
    height: 46px;
    line-height: 46px;
    position: absolute;
    top: 0;
    width: 100%;
    .return {
        height: 36px;
        width: 36px;
        line-height: 36px;
        border-radius: 50%;
        margin-left: 10px;
        margin-top: 10px;
        background-color: rgba(0,0,0,.5);
        color: #eee;
    }
}
.header-fixed {
    @include header;
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    .return {
        width: 46px;
        color: #fff;
    }
    .header-title {
        margin-right: 46px;
        flex: 1;
        text-align: center;
    }
}
</style>
