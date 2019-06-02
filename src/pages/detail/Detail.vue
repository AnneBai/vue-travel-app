<template>
    <div>
        <DetailBanner />
        <DetailHeader />
        <DetailList :list="list"/>
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/DetailHeader";
import DetailList from "./components/DetailList";
export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader,
        DetailList,
    },
    data () {
        return {
            list: [
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
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    height: 1000px;
}
</style>
