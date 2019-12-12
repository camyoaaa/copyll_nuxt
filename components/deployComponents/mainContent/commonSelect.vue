<template>
    <el-select v-model="inner_value" :placeholder="placeholder" size="small">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
export default {
    name: "commonSelect",

    model: {
        prop: "value",
        event: "change"
    },
    props: {
        options: {
            type: Array,
            default: () => []
        },
        placeholder: {
            type: String,
            default: "请选择"
        }
    },
    data() {
        return {
            inner_value: ""
        };
    },
    created() {
        this.inner_value = this.options[0] ? this.options[0].value : "";
    },
    watch: {
        inner_value(value) {
            this.$emit("change", value);
        }
    }
};
</script>
