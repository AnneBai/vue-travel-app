<template>
<div>
    <CityHeader />
    <CitySearch />
    <CityList />
    <CityAlphabet />
</div>
</template>

<script>
import CityHeader from "./CityHeader";
import CitySearch from "./CitySearch";
import CityList from "./CityList";
import CityAlphabet from "./CityAlphabet";

export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    }
}
</script>

<style lang="scss" scoped>

</style>
