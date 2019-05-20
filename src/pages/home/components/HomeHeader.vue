<template>
  <div class="homeHeader">
    <span class="return iconfont">&#xe660;</span>
    <div class="search">
      <input type="text" id="searchInput" placeholder="请输入关键字进行搜索"/>
      <span class="iconfont">&#xe651;</span>
    </div>
    <span class="cities">{{city}}
      <span class="iconfont">&#xe65e;</span>
    </span>
  </div>
</template>

<script>
import Icon from "../../components/Icon";
export default {
  name: "HomeHeader",
  props: {
    city: String,
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
.homeHeader {
  display: flex;
  height: 46px;
  background: $bgColor;
  color: #fff;
  align-items: center;
}
.return {
  padding: 16px;
  text-align: center;
  cursor: pointer;
}
.search {
  flex: 1;
  color: #666;
  padding-left: 16px;
  background: #fff;
  height: 32px;
  line-height: 32px;
  border-radius: 4px;
}
.search input {
  outline: none;
  border: none;
  margin-right: 6px;
  width: calc(100% - 28px);
}
.cities {
  padding: 0 16px;
  cursor: pointer;
}
</style>