<template>
    <div
        class="gallery-bg"
        @click.self="$emit('close')"
    >
        <swiper
            :options="swiperOptions"
            class="gallery-img-box"
        >
            <swiper-slide
                v-for="(img, index) of imgs"
                :key="index"
            >
                <img class="gallery-img" :src="img" alt="">
            </swiper-slide>
            <template v-slot:pagination>
                <div class="swiper-pagination"></div>
            </template>
        </swiper>
    </div>
</template>

<script>
export default {
    name: "Gallery",
    props: {
        imgs: {
            type: Array,
            default() {
                return [];
            },
        }
    },
    data() {
        return {
            swiperOptions: {
                autoplay: 0,
                loop: false,
                pagination: ".swiper-pagination",
                paginationType: "fraction",
                observeParents: true,
                observer: true,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .gallery-bg {
        display: flex;
        align-items: center;
        position: fixed;
        background-color: #000;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 9;
        .swiper-container {
            overflow: inherit;
        }
    }
    .gallery-img-box {
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-bottom: 100%;

    }
    .gallery-img {
        width: 100%;
    }
    .swiper-pagination {
        position: absolute;
        width: 100%;
        top: 65vh;
        color: #fff;
        font-size: 16px;
        text-align: center;
    }
</style>
