<template>
    <ul class="alphabet">
        <li class="item" v-for="letter of alphabet" :key="letter">{{letter}}</li>
    </ul>
</template>

<script>
export default {
    name: "CityAlphabet",
    data() {
        return {
            alphabet: Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ"),
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
@import "~@/assets/styles/mixins.scss";

.alphabet {
    position: fixed;
    top: calc(50vh + 40px);
    right: 12px;
    color: $bgColor;
    transform: translateY(-50%);
    line-height: 1.25;
}
.item {
    text-align: center;
}
</style>