<template>
    <div class="base-input" :class="[hasAppend ? 'has-append' : '', hasPrepend ? 'has-prepend' : '']">
        <div v-if="hasPrepend" class="base-input-prepend">
            <slot name="prepend" />
        </div>

        <input type="text" :value="modelValue" @input="InputHandler" :placeholder="placeholder" />

        <div v-if="hasAppend" class="base-input-append">
            <slot name="append" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        modelValue: {
            type: String,
        },
        placeholder: {
            type: String,
        },
    },
    computed: {
        hasAppend() {
            return !!this.$slots.append;
        },
        hasPrepend() {
            return !!this.$slots.prepend;
        },
    },
    methods: {
        InputHandler(e) {
            this.$emit("update:modelValue", e.target.value);
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/base/base-form-elements/base-input.scss";
</style>
