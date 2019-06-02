<template>
<div class="search-cont">
    <input class="input" type="text" placeholder="请输入城市或拼音" v-model="keyWords"/>
    <div :class="contentClass" ref="wrapper">
        <ul>
            <li
                class="city"
                v-for="city of filtered"
                :key="city.id"
                @click="clickCity(city)"
            >{{city.name}}
            </li>
            <li class="city" v-show="showNoMatch">没有匹配的城市</li>
        </ul>
    </div>
</div>
</template>

<script>
import { clearTimeout, setTimeout } from 'timers';
import BScroll from "better-scroll";
import { mapMutations } from 'vuex';
function filterCity(citiesObj) {
    return function (text) {
        const allCities = Object.values(citiesObj).flat();
        return allCities.filter(({name, spell}) => name.includes(text) || spell.includes(text));
    }
}
export default {
    name: "CitySearch",
    props: {
        cities: Object,
    },
    data() {
        return {
            keyWords: "",
            filtered: [],
            timer: null,
        }
    },
    watch: {
        keyWords() {
            if (this.timer != null) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                if (this.keyWords) {
                    const filterText = filterCity(this.cities);
                    this.filtered = filterText(this.keyWords);
                }
            }, 17);
            
        }
    },
    computed: {
        showNoMatch() {
            return this.filtered.length === 0;
        },
        contentClass() {
            return `search-content ${this.keyWords ? "show" : ""}`;
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {})
        })
    },
    methods: {
        clickCity(city) {
            this.$store.commit('changeCity', city);
            this.keyWords = "";
            this.filtered = [];
            this.$router.push("/");
        
        },
        ...mapMutations(["changeCity"]),
    }
}
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";
@import "styles/mixins.scss";
$inputWidth: 85%;

.search-cont {
    height: 36px;
    background-color: $bgColor;
    text-align: center;
    color: $darkTextColor;
    position: relative;
    z-index: 1;
}

.input {
    border: none;
    outline: none;
    border-radius: 4px;
    width: $inputWidth;
    height: $inputHeight;
    padding: 0 10px;
    text-align: center;
}

.search-content {
    width: $inputWidth;
    min-height: 100px;
    max-height: 80vh;
    border: 1px solid #ccc;
    color: #999;
    position: absolute;
    top: $inputHeight;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #fff;
    transition: transform .3s, opacity .1s;
    transform: translateY(-100px);
    opacity: 0;
    z-index: -1;
    overflow: auto;
}

.search-content.show {
    transform: translateY(0);
    opacity: 1;
}

.city {
    line-height: 20px;
    text-align: left;
    padding-left: 10px;
}

</style>