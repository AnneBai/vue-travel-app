<template>
<div>
    <CityHeader />
    <CitySearch />
    <CityList :hotCities="hotCities" :cities="cities"/>
    <CityAlphabet :alphabet="alphabet"/>
</div>
</template>

<script>
import CityHeader from "./CityHeader";
import CitySearch from "./CitySearch";
import CityList from "./CityList";
import CityAlphabet from "./CityAlphabet";
import axios from "axios";

export default {
    name: "City",
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet,
    },
    data() {
        return {
            hotCities: [],
            cities: {},
        }
    },
    computed: {
        alphabet() {
            return Object.keys(this.cities);
        }
    },
    mounted() {
        this.getCityData();
    },
    methods: {
        async getCityData() {
            const {data} = await axios.get("/api/city.json");
            if (data.ret) {
                const {hotCities, cities} = data.data;
                this.hotCities = hotCities;
                this.cities = cities;
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
