<template>
    <div class="container">
        <div class="box">
            <div :style="innerBoxStyle">
                <div class="text">
                    {{ typeLang }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps({
    typeLang: String,
    innerBoxWidth: String,
    animateStart: Boolean
});

const innerBoxStyle = computed(() => ({
    width: props.animateStart ? props.innerBoxWidth : '0%',
    transition: 'width 2s ease',
    height: '30px',
    backgroundColor: '#007769',
    display: 'flex',
    alignItems: 'center'
}));
</script>

<style scoped>
.container {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    max-width: 100%;
}

.box {
    width: 100%;
    height: 30px;
    background-color: white;
}

.text {
    color: white;
    padding: 10px;
    font-family: "Lora", serif;
    white-space: nowrap;
}
</style>
