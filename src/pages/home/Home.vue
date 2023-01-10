<template>
    <div id="home">
        <!-- <location-dependent-dropdown /> -->
        <form-inputs />
    </div>
</template>

<script>
// * components
import FormInputs from '@/components/form-inputs/FormInputs.vue';
import LocationDependentDropdown from "@/components/location-dependent-dropdown/LocationDependentDropdown.vue";
export default {
    components: { LocationDependentDropdown, FormInputs },
};
</script>

<style lang="scss">
#home {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
</style>
