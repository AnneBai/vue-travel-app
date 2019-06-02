<template>
    <div>
        <DetailBanner />
        <DetailHeader />
        <div class="content"></div>
    </div>
</template>

<script>
import DetailBanner from "./components/DetailBanner";
import DetailHeader from "./components/DetailHeader";
export default {
    name: "Detail",
    components: {
        DetailBanner,
        DetailHeader,
    },
}
</script>

<style lang="scss" scoped>
.content {
    height: 1000px;
}
</style>
