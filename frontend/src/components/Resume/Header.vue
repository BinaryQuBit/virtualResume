<template>
    <div class="mainContainer">
        <div class="iconContainer">
            <i :class="iconSrc" />
        </div>
        <div class="titleContainer">
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
.mainContainer {
    display: flex;
    align-items: center;
    margin-top: 20px;
}

.iconContainer {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}

.iconContainer i {
    font-size: 42px;
    display: block;
    height: 100%;
}

.titleContainer {
    font-family: "Lora", serif;
    font-weight: 900;
    font-size: 18px;
    margin-left: 10px;
}

@media (max-width: 315px) {
    .titleContainer {
        font-size: 15px;
    }
}
</style>
