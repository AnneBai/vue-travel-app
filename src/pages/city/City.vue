<template>
<div>
    <CityHeader />
    <CitySearch />
</div>
</template>

<script>
import CityHeader from "./CityHeader";
import CitySearch from "./CitySearch";

export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
    }
}
</script>

<style lang="scss" scoped>

</style>
