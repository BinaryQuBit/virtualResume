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
    margin-right: 10px;
}

.titleContainer {
    font-family: "Lora", serif;
    font-weight: 900;
    font-size: 18px;
    margin-left: 10px;
}

.iconContainer i {
    font-size: 42px;
}

@media (max-width: 315px) {
    .titleContainer {
        font-size: 15px;
    }
}
</style>