<template>
    <div class="area-wrapper" ref="wrapper">
        <div class="content">
            <div class="area">
                <div class="title">当前城市</div>
                <div class="flex-list">
                    <button class="btn active">北京</button>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="flex-list">
                    <button class="btn">北京</button>
                    <button class="btn">上海</button>
                    <button class="btn">上海</button>
                    <button class="btn">天津</button>
                    <button class="btn">深圳</button>
                    <button class="btn">广东</button>
                    
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="list">
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="list">
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="list">
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                    <p class="item">北京</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: "CityList",
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {})
        })
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
@import "~@/assets/styles/mixins.scss";

$borderBottom: 1px solid #ccc;
.area-wrapper {
    position: absolute;
    top: 82px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}
.title {
    background: #eee;
    height: 28px;
    line-height: 28px;
    padding-left: 20px;
    border-bottom: $borderBottom;
}
.flex-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 6px 40px 10px 20px;
    border-bottom: $borderBottom;
}
.list {
    line-height: 2;
}
.list .item {
    padding-left: 20px;
    border-bottom: 1px solid #eee;
}
.btn {
    width: 30%;
    max-width: 120px;
    margin-top: 4px;
    padding: 4px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #fff;
}
.btn.active {
    border-color: $bgColor;
}
</style>