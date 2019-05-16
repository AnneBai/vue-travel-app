<template>
    <div class="icons">
        <swiper :options="swiperOption" class="swiper-container">
            <swiper-slide v-for="(page, index) in pages" :key="index">
                <div class="icon-cont" v-for="icon in page" :key="icon.id">
                    <Icon :className="icon.content" />
                    <p class="icon-text">{{icon.name}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import Icon from "../../components/Icon";
export default {
    name: "HomeIcons",
    data() {
        return {
            icons: [
                {
                    id: "01",
                    name: "机票",
                    content: "#icon-dingjipiao",
                },
                {
                    id: "02",
                    name: "攻略攻略攻略攻略攻略",
                    content: "#icon-gonglve",
                },
                {
                    id: "03",
                    name: "酒店",
                    content: "#icon-jiudian",
                },
                {
                    id: "04",
                    name: "攻略",
                    content: "#icon-gonglve",
                },
                {
                    id: "05",
                    name: "门票",
                    content: "#icon-tubiaozhizuomoban--copy",
                },
                {
                    id: "06",
                    name: "热门景点",
                    content: "#icon-dinghuochepiao",
                },
                {
                    id: "07",
                    name: "攻略",
                    content: "#icon-gonglve",
                },
                {
                    id: "08",
                    name: "火车票",
                    content: "#icon-dinghuochepiao",
                },
                {
                    id: "09",
                    name: "热门景点",
                    content: "#icon-dinghuochepiao",
                },
            ],
            swiperOption: {
                autoplay: 0,
                loop: false,
                pagination: ".swiper-pagination"
            }
        }
    },
    computed: {
        pages() {
            return this.icons.reduce((accu, cur, i) => {
                const idx = Math.floor(i / 8);
                accu[idx] = accu[idx] || [];
                accu[idx].push(cur);
                return accu;
            }, [])
        }
    },
    components: {
        Icon,
    }
}
</script>

<style lang="scss" scoped>
    @import "~@/assets/styles/variables.scss"; 
    @import "~@/assets/styles/mixins.scss"; 

    $iconSize: 14vw;
    .swiper-container {
        width: 100vw;
        overflow: hidden;
        height: 0;
        padding-bottom: 50%;
        display: flex;
    }
    .swiper-slide {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .swiper >>> .swiper-pagination-bullet {
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background: #555;
        margin: 0 5px;
        opacity: 0.8;
        border: 1px solid #fff;
        cursor: pointer;
    }
    .swiper >>> .swiper-pagination-bullet-active {
        background: #fff;
    }
    .icon-cont {
        overflow: hidden;
        width: 25%;
        height: 0;
        padding-bottom: 25%;
        text-align: center;
        align-content: center;
    }
    .icon {
        font-size: 14vw;
        margin-top: calc(7vw - 16px);
    }
    .icon-text {
        color: $darkTextColor;
        @include ellipsis;
    }
</style>
