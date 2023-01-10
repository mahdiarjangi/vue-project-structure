<template>
    <div
        tabindex="0"
        class="base-select"
        :class="isOpen ? 'open' : ''"
        @blur.capture="focusChangeHandler"
        @focus.capture="focusChangeHandler"
    >
        <div class="base-select-input" @click="isOpen = true">
            <span class="base-select-input-name">
                {{ _value ?? _placeholder }}
            </span>
            <i :class="isOpen ? 'icon-chevron-up' : 'icon-chevron-down'"></i>
        </div>
        <div class="base-select-dropdown" v-show="isOpen">
            <div class="base-select-search" v-if="searchable">
                <input
                    type="text"
                    autocomplete="off"
                    id="base-select-search"
                    @input="searchOptionsHandler"
                    placeholder="Search in options"
                />
            </div>
            <div class="base-select-dropdown-inner" v-if="options.length > 0">
                <div
                    :key="item[keyName]"
                    v-for="item in options"
                    class="base-select-dropdown-item"
                    @click="selectOptionHandler(item)"
                    :class="selectedOption && item[keyName] === selectedOption[keyName] ? 'active' : ''"
                >
                    <slot v-if="hasCustomItem" name="item" v-bind:item="item" />
                    <div v-else class="base-select-dropdown-item-inner">
                        {{ item[name] }}
                    </div>
                </div>
            </div>
            <div v-else class="base-select-not-found">
                <h5>Result Not Found!</h5>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        keyName: {
            type: String,
        },
        name: {
            type: String,
        },
        items: {
            type: Array,
        },
        option: {
            type: Object,
        },
        placeholder: {
            type: String,
        },
        searchable: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        hasCustomItem() {
            return !!this.$slots.item;
        },
        _placeholder() {
            return this.placeholder ?? "Select an option";
        },
        _value() {
            return this.selectedOption ? this.selectedOption[this.name] : undefined;
        },
    },
    methods: {
        selectOptionHandler(option) {
            this.isOpen = false;
            this.selectedOption = option;
            this.$emit("update:option", option);
        },
        searchOptionsHandler(e) {
            const regex = new RegExp(e.target.value, "gi");
            this.options = this.items.filter((option) => {
                if (option[this.name].search(regex) > -1) {
                    return option;
                }
            });
        },
        focusChangeHandler(e) {
            if (e.type == "focus" && e.relatedTarget === null) {
                this.isOpen = true;
            }
            if (e.type == "blur") {
                setTimeout(() => {
                    if (e.relatedTarget !== null) {
                        if (e.relatedTarget.id !== "base-select-search") {
                            this.isOpen = false;
                        }
                    } else {
                        this.isOpen = false;
                    }
                }, 200);
            }
        },
    },
    data() {
        return {
            isOpen: false,
            options: this.items,
            selectedOption: this.option,
        };
    },
};
</script>

<style lang="scss">
@import "@/assets/scss/components/base/base-form-elements/base-select.scss";
</style>
