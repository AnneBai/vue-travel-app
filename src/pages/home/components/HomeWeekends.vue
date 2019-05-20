<template>
<div class="container">    
    <div class="title">周 末 会 玩</div>
    <div class="columns">
        <ul class="column" v-for="(posts, index) of columns" :key="index">
            <li class="item" v-for="post of posts" :key="post.id">
                <img class="item-img" :src="post.imgUrl" alt=""/>
                <div class="item-info">
                    <p class="item-title">{{post.title}}</p>
                    <div class="item-detail">{{post.content}}</div>
                    <div class="detail-btn-cont">
                        <span class="read-num">{{`${post.readNum}次阅读`}}</span>
                        <span class="favor-num"><Icon className="#icon-aixin" style="vertical-align: top;"/>{{355}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import Icon from "@/pages/components/Icon";
export default {
    name: "HomeWeekends",
    props: {
        weekendsList: Array,
    },
    components: {
        Icon,
    },
    computed: {
        columns() {
            return this.weekendsList.reduce((accu, cur, i) => {
                const idx = i % 2;
                accu[idx] = accu[idx] || [];
                accu[idx].push(cur);
                return accu;
            }, [])
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
.columns {
    padding: 10px;
    display: flex;
    .column {
        flex: 1;
        min-width: 0;
        &:first-child {
            margin-right: 8px;
        }
    }
}
.item {
    width: 100%;
    border: 1px solid #eee;
    margin-bottom: 8px;
    border-radius: 8px;
    overflow: hidden;
    .item-img {
        width: 100%;
    }
    .item-info {
        padding: 5px;
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
    .favor-num {
        color: rgb(204, 135, 135);
        padding: 4px 10px;
        font-size: 12px;
    }
}
</style>

