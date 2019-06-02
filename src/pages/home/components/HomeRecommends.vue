<template>
<div class="container">    
    <div class="title">热 门 推 荐</div>
    <ul>
        <router-link
            tag="li"
            class="item"
            v-for="post of recommendList"
            :key="post.id"
            :to="`/detail/${post.id}`"
        >
            <img class="item-img" :src="post.imgUrl" alt=""/>
            <div class="item-info">
                <p class="item-title">{{post.title}}</p>
                <div class="item-detail">{{post.content}}</div>
                <div class="detail-btn-cont">
                    <span class="read-num">{{`${post.readNum}次阅读`}}</span>
                    <button class="detail-btn">查看详情</button>
                </div>
            </div>
        </router-link>
    </ul>
</div>
</template>

<script>
export default {
    name: "HomeRecommends",
    props: {
        recommendList: Array,
    },
}
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";
@import "styles/mixins.scss";
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
        padding: 4px 10px;
        background-color: $bgColor;
        color: #fff;
        border-radius: 4px;
    }
}
</style>

