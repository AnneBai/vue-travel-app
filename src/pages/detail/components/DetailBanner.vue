<template>
    <div>
        <div
            class="banner"
            @click="clickBanner"
        >
            <img class="banner-img" :src="bannerImg" :alt="title">
            <div class="banner-info">
                <span class="banner-title">{{title}}</span>
                <span class="banner-number"><Icon className="#icon-zhaopiantubiao" />&nbsp;{{galleryImgs.length}}</span>
            </div>
        </div>
        <FadeAnimation>
            <Gallery
                v-show="showGallery"
                :imgs="galleryImgs"
                @close="closeGallery"
            />
        </FadeAnimation>
    </div>
    
</template>

<script>
import Icon from "components/Icon";
import Gallery from "components/Gallery";
import FadeAnimation from "components/FadeAnimation";
export default {
    name: "DetailBanner",
    components: {
        Icon,
        Gallery,
        FadeAnimation,
    },
    props: {
        title: String,
        bannerImg: String,
        galleryImgs: Array,
    },
    data () {
        return {
            showGallery: false,
        }
    },
    methods: {
        clickBanner() {
            this.showGallery = true;
        },
        closeGallery() {
            this.showGallery = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
}
.banner-img {
    width: 100%;
}
.banner-info {
    padding: 0 10px;
    display: flex;
    align-items: center;
    height: 28px;
    color: #fff;
    background-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8));
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
}
.banner-title {
    flex: 1;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.banner-number {
    width: 40px;
}
</style>
