<template>
    <div class="base-textarea">
        <textarea type="text" :value="modelValue" @input="InputHandler" :placeholder="placeholder"></textarea>
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
    methods: {
        InputHandler(e) {
            this.$emit("update:modelValue", e.target.value);
        },
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/base/base-form-elements/base-textarea.scss";
</style>
