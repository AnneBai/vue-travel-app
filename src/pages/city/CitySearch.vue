<template>
    <div class="search-cont">
        <input class="input" type="text" placeholder="请输入城市或拼音"/>
    </div>
</template>

<script>
export default {
    name: "CitySearch",
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
@import "~@/assets/styles/mixins.scss";

.search-cont {
    height: 36px;
    background-color: $bgColor;
    text-align: center;
}

.input {
    border: none;
    outline: none;
    border-radius: 4px;
    width: 85%;
    height: $inputHeight;
    padding: 0 10px;
    color: $darkTextColor;
}

</style>