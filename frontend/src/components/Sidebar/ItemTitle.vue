<template>
    <div class="titleContainer">
        <div class="iconContainer">
            <i :class="iconSrc" />
        </div>
        <div class="descriptionContainer">
            {{ titleText }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    iconSrc: String,
    titleText: String,
}); 
</script>

<style scoped>
.titleContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 10px;
}

.iconContainer {
    width: 60px;
    margin-right: 10px;
}

.iconContainer i {
    font-size: 42px;
}

.descriptionContainer {
    font-family: "Lora", serif;
    font-weight: 900;
    font-size: 18px;
    margin-left: 10px;
}

@media (max-width: 315px) {
    .descriptionContainer {
        font-size: 15px;
    }
}
</style>
