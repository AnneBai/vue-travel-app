<template>
<div class="swiper">
    <swiper :options="swiperOption">
        <swiper-slide  v-for="swiperSlide of swiperList" :key="swiperSlide.id">
            <img class="swiper-img" :src="swiperSlide.imgUrl"/>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</div>

</template>

<script>
export default {
    name: "HomeSwiper",
    data() {
        return {
            swiperOption: {
                autoplay: 3000,
                loop: true,
                pagination: ".swiper-pagination"
            },
            swiperList: [
                {
                    id: "01",
                    imgUrl: "https://n1-q.mafengwo.net/s13/M00/3A/DB/wKgEaVzZbqqAXVlYAAoObFUgWgI49.jpeg"
                },
                {
                    id: "02",
                    imgUrl: "https://n2-q.mafengwo.net/s13/M00/4D/99/wKgEaVzWeoWAUU_bAAs2IhV-Ei449.jpeg"
                },
                {
                    id: "03",
                    imgUrl: "https://b2-q.mafengwo.net/s13/M00/4B/E5/wKgEaVzWeXaAVxyQAAkiLzvilDQ16.jpeg"
                }
            ]
        }
    },
}
</script>

<style lang="scss" scoped>
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
    .swiper {
        width: 100%;
        // height: 33.33vw; 兼容性
        height: 0;
        background-color: #eee; // 图片加载出来前
        overflow: hidden;
        padding-bottom: 33.33%; // 保持宽高比
    }
    .swiper-img {
        width: 100%;
    }
    .swiper-pagination {
        position: absolute;
        z-index: 20;
        bottom: 10px;
        width: 100%;
        text-align: center;
    }
    
</style>
