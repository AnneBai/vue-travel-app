<template>
    <ul class="list-container">
        <li
            class="item"
            v-for="(item, index) of list"
            :key="index"
        >
            <div
                class="item-title"
                :style="paddingStyle"
                @click="item.children ? toggleOpen(index) : null"
            >
                <Icon className="#icon-menpiao" class="icon-ticket"/>&nbsp;
                <span>{{item.title}}</span>
                <span
                    v-show="item.children && isOpen(index)"
                >
                    <Icon
                        className="#icon-jiantou"
                        class="icon-right"
                    />
                </span>
                <span
                    v-show="item.children && !isOpen(index)"
                >
                    <Icon
                        className="#icon-arrow-right2"
                        class="icon-right"
                    />
                </span>
            </div>
            <DetailList
                class="children"
                :level="level + 1"
                v-if="item.children && isOpen(index)"
                :list="item.children"
            />
        </li>
    </ul>
</template>

<script>
import Icon from "components/Icon";
export default {
    name: "DetailList",
    components: {
        Icon,
    },
    props: {
        list: Array,
        level: {
            type: Number,
            default() {
                return 0;
            },
        },
    },
    data() {
        return {
            paddingStyle: {
                "padding-left": this.level ? `${this.level * 12 + 20}px` : "20px",
            },
            openItems: [],
        }
    },
    methods: {
        isOpen(index) {
            return this.openItems.includes(index);
        },
        toggleOpen(index) {
            this.openItems = this.isOpen(index)
                ? this.openItems.filter(x => x !== index)
                : this.openItems.concat(index);
        },
    }
}
</script>

<style lang="scss" scoped>
.item, .icon-right {
    font-size: 16px;
    color: rgb(86, 185, 202);
}
.item-title {
    position: relative;
    padding-left: 20px;
    height: 36px;
    line-height: 36px;
    border-bottom: 1px solid #eee;
}
.icon-right {
    position: absolute;
    right: 12px;
    top: 0;
    bottom: 0;
    margin: auto;
}
.children .item-title {
    padding-left: 24px;
    font-size: 14px;
    color: #444;
    height: 32px;
    line-height: 32px;
}
.children .icon-ticket {
    display: none;
}
</style>
