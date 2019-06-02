<template>
    <div class="area-wrapper" ref="wrapper">
        <div class="content">
            <div class="area" ref="current">
                <div class="title">当前城市</div>
                <div class="flex-list">
                    <button class="btn active">{{this.city.name}}</button>
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="flex-list">
                    <button
                        class="btn"
                        v-for="city of hotCities"
                        :key="city.id"
                        @click="clickCity(city)"
                    >
                        {{city.name}}
                    </button>
                </div>
            </div>
            <div
                class="area"
                v-for="(list, letter) in cities"
                :key="letter"
                :ref="letter"
            >
                <div
                    class="title"
                    :id="letter"
                >
                    {{letter}}
                </div>
                <ul class="list">
                    <li
                        class="item"
                        v-for="city of list"
                        :key="city.id"
                        @click="clickCity(city)"
                    >
                        {{city.name}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations, mapState } from 'vuex';
export default {
    name: "CityList",
    props: {
        hotCities: Array,
        cities: Object,
        letter: String,
    },
    mounted() {
        // 启动better-scroll
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {})
        })
    },
    computed: {
        ...mapState(["city"])
    },
    watch: {
        // 字母导航，触发滚动
        letter() {
            if (this.letter) {
                this.scroll.scrollToElement(this.$refs[this.letter][0]);
            }
        }
    },
    methods: {
        ...mapMutations(["changeCity"]),
        clickCity(city) {
            this.$store.commit('changeCity', city);
            // // 滚动至顶部--当前城市
            // this.scroll.scrollToElement(this.$refs.current);
            this.$router.push("/")
        }
    }
}
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";
@import "styles/mixins.scss";

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