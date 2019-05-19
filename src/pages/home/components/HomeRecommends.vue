<template>
<div class="container">    
    <div class="title">热 门 推 荐</div>
    <ul>
        <li class="item" v-for="post of posts" :key="post.id">
            <img class="item-img" :src="post.imgUrl" alt=""/>
            <div class="item-info">
                <p class="item-title">{{post.title}}</p>
                <div class="item-detail">{{post.content}}</div>
                <div class="detail-btn-cont">
                    <span class="read-num">{{`${post.readNum}次阅读`}}</span>
                    <button class="detail-btn">查看详情</button>
                </div>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "HomeRecommends",
    data() {
        return {
            posts: [
                {
                    id: "01",
                    title: "扬州，有花在等你",
                    imgUrl: "https://p3-q.mafengwo.net/s13/M00/0D/DD/wKgEaVyp7uGAXdeGAAyNcQ5FafQ55.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
                    readNum: 1068,
                    content: "这是一个神奇的地方，让人来了就不想回去; 没有太多的人世喧嚣，可以暂时放下生活的烦恼。在花下，在雨中，感知自己的内心。",
                },
                {
                    id: "02",
                    title: "房车上的旅行",
                    imgUrl: "https://b4-q.mafengwo.net/s11/M00/95/AC/wKgBEFpcReGARFs1AAGO3jkiTN816.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
                    readNum: 2022,
                    content: "行走的房子，可以住的车子",
                },
                {
                    id: "03",
                    title: "悲伤的时候，我喜欢看日落",
                    imgUrl: "https://b3-q.mafengwo.net/s12/M00/07/04/wKgED1xJHSaAB7dDAADe_uJxSiU82.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
                    readNum: 10086,
                    content: "有一天，我看了四十三次日落",
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
@import "~@/assets/styles/mixins.scss";
.title {
    padding: 12px;
    text-align: center;
    background-color: #eee;
    color: #999;
    font-weight: bold;
}
.item {
    padding: 10px;
    display: flex;
    height: 90px;
    border-bottom: 1px solid #eee;
    .item-img {
        flex: none;
        height: 90px;
    }
    .item-info {
        display: flex;
        flex-direction: column;
        flex: 1;
        padding-left: 10px;
        min-width: 0; // 否则默认最小宽度按内容实际宽度，会溢出父容器
    }
    .item-title {
        @include ellipsis;
        flex: none;
        font-size: 16px;
        font-weight: 500;
        color: $darkTextColor;
    }
    .item-detail {
        @include ellipsis;
        flex: 1;
        margin-top: 12px;
        color: #888;
        line-height: 1.2;
    }
    .detail-btn-cont {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: none;
        padding-top: 10px;
    }
    .read-num {
        font-size: 12px;
        color: #ccc;
    }
    .detail-btn {
        background-color: $bgColor;
        color: #fff;
        padding: 4px 10px;
    }
}
</style>

