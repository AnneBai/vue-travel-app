<template>
<div>
    <CityHeader />
    <CitySearch />
    <CityList :hotCities="hotCities" :cities="cities" :letter="letter"/>
    <CityAlphabet :alphabet="alphabet" @change="changeLetter"/>
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
            letter: "",
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
        },
        changeLetter(letter) {
            this.letter = letter;
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
