<template>
  <div class="homeHeader">
    <span class="return iconfont">&#xe660;</span>
    <div class="search">
      <input type="text" id="searchInput" placeholder="请输入关键字进行搜索"/>
      <span class="iconfont">&#xe651;</span>
    </div>
    <router-link to="/city" >
      <span class="cities">{{city.name}}
        <span class="iconfont">&#xe65e;</span>
      </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: Object,
  }
};
</script>

<style lang="scss" scoped>
@import "styles/variables.scss";
@import "styles/mixins.scss";
.homeHeader {
    @include header;
    display: flex;
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