<template>
    <div class="container">
        <div class="row">
            <div class="col-6">
                <base-input v-model="name" placeholder="First Name" class="mx-auto" />
                {{ name }}
            </div>
            <div class="col-6">
                <base-textarea v-model="description" placeholder="Write Description" class="mx-auto" />
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from "../base/base-form-elements/BaseInput.vue";
import BaseTextarea from '../base/base-form-elements/BaseTextarea.vue';

export default {
    components: { BaseInput, BaseTextarea },
    data() {
        return {
            name: undefined,
            description: undefined,
        };
    },
};
</script>

<style></style>
