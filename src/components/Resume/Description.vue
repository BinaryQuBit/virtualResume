<template>
    <div class="mainContainer">
        <ul :class="{ starList: isStar }">
            <li>{{ list }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    list: String,
    isStar: Boolean
});
</script>

<style scoped>
.mainContainer {
    margin-left: 20px;
    font-family: "Lora", serif;
    margin-top: 10px;
}

.mainContainer ul {
    list-style-type: disc;
    padding-left: 20px;
}

.mainContainer ul.starList {
    list-style-type: none;
}

.mainContainer ul.starList li::before {
    content: '★';
    padding-right: 10px;
}
</style>

