<template>
    <div>
        <DetailBanner :title="sightName" :bannerImg="bannerImg" :galleryImgs="galleryImgs"/>
        <DetailHeader />
        <DetailList :list="categoryList"/>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/DetailHeader";
import DetailList from "./components/DetailList";
import axios from "axios";

export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data () {
        return {
            sightName: "",
            bannerImg: "",
            galleryImgs: [],
            categoryList: [
                {
                    "title": "成人票",
                    "children": [{
                        "title": "成人三馆联票",
                        "children": [{
                            "title": "成人三馆联票 - 某一连锁店销售"
                        }]
                    },{
                        "title": "成人五馆联票"
                    }]
                }, {
                    "title": "学生票"
                }, {
                    "title": "儿童票"
                }, {
                    "title": "特惠票"
                }
            ],
            lastId: null,
        }
    },
    methods: {
        async getData(id) {
            
            const {data} = await axios.get("/api/detail.json", {
                params: {
                    id,
                }
            });
            if (data.data != null) {
                this.handleData(data.data);
                this.lastId = id;
            }
        },
        handleData(data) {
            const {categoryList, sightName, bannerImg, galleryImgs} = data;
            this.sightName = sightName;
            this.bannerImg = bannerImg;
            this.galleryImgs = galleryImgs;
            this.categoryList = categoryList;
        },
    },
    mounted() {
        const id = this.$route.params.id;
        // this.lastId = id;
        this.getData(id);
    },
    // id发生变化时需要重新加载数据
    // activated() {
    //     const id = this.$route.params.id;
    //     if (this.lastId !== id) {
    //         this.getData(id);
    //     }
    // }
}
</script>

<style lang="scss" scoped>
.content {
    height: 1000px;
}
</style>
