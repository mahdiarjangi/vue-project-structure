<template>
    <form class="home-form" @submit.prevent="submitFormHandler">
        <base-select
            name="name"
            key-name="name"
            :items="countries"
            :searchable="true"
            v-model:option="selectedCountry"
            @update:option="getStateByCountry"
        />
        <br />
        <base-select
            name="name"
            key-name="name"
            :items="states"
            :searchable="true"
            :key="states.length"
            v-model:option="selectedState"
            @update:option="getCitiesByState"
        />
        <br />
        <base-select
            name="name"
            key-name="name"
            :items="cities"
            :searchable="true"
            :key="cities.length"
            v-model:option="selectedCity"
        />
        <br />
        <button type="submit">Submit</button>
    </form>
</template>

<script>
// * dependencies
import { Country, State, City } from "country-state-city";
// * components
import BaseSelect from "@/components/base/base-form-elements/BaseSelect.vue";

export default {
    components: {
        BaseSelect,
    },
    computed: {
        countries() {
            return Country.getAllCountries();
        },
    },
    methods: {
        submitFormHandler() {
            console.log(this.selectedCountry);
            console.log(this.selectedState);
            console.log(this.selectedCity);
        },
        getStateByCountry(selectedCountry) {
            this.states = State.getStatesOfCountry(this.selectedCountry.isoCode);
            if (selectedCountry) {
                this.selectedState = undefined;
                this.selectedCity = undefined;
                this.cities = [];
            }
        },
        getCitiesByState(selectedState) {
            this.cities = City.getCitiesOfState(this.selectedCountry.isoCode, this.selectedState.isoCode);
            if (selectedState) {
                this.selectedCity = undefined;
            }
        },
    },
    data() {
        return {
            // countries
            selectedCountry: undefined,
            // states
            states: [],
            selectedState: undefined,
            // cities
            cities: [],
            selectedCity: undefined,
        };
    },
    mounted() {
        if (this.selectedCountry) {
            this.getStateByCountry();
        }
        if (this.selectedState) {
            this.getCitiesByState();
        }
    },
};
</script>

<style lang="scss">
.home-form {
    width: 400px;
    height: 500px;
}
</style>
