<template>
    <div>
        <div
            class="banner"
            @click="clickBanner"
        >
            <img class="banner-img" src="https://p3-q.mafengwo.net/s13/M00/0D/DD/wKgEaVyp7uGAXdeGAAyNcQ5FafQ55.jpeg" alt="">
            <div class="banner-info">
                <span class="banner-title">扬州的春天是花的天堂</span>
                <span class="banner-number"><Icon className="#icon-zhaopiantubiao" />&nbsp;32</span>
            </div>
        </div>
        <Gallery
            v-show="showGallery"
            :imgs="imgs"
            @close="closeGallery"
        />
    </div>
    
</template>

<script>
import Icon from "components/Icon";
import Gallery from "components/Gallery";
export default {
    name: "Detail",
    components: {
        Icon,
        Gallery,
    },
    data () {
        return {
            showGallery: false,
            imgs: [
                "https://p3-q.mafengwo.net/s13/M00/0D/DD/wKgEaVyp7uGAXdeGAAyNcQ5FafQ55.jpeg",
                "https://b4-q.mafengwo.net/s11/M00/95/AC/wKgBEFpcReGARFs1AAGO3jkiTN816.jpeg",
            ],
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
