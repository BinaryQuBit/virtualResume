<template>
    <div class="items">
        <template v-if="isEmail">
            <a :href="`mailto:${titleText}`" class="itemsIcon">
                <img :src="iconSrc" />
            </a>
            <a :href="`mailto:${titleText}`" class="itemsDescription link">
                {{ titleText }}
            </a>
        </template>
        <template v-else-if="isLinkedIn">
            <a :href="`https://www.linkedin.com/in/padda/`" class="itemsIcon" target="_blank" rel="noopener noreferrer">
                <img :src="iconSrc" />
            </a>
            <a :href="`https://www.linkedin.com/in/padda/`" class="itemsDescription link" target="_blank"
                rel="noopener noreferrer">
                {{ titleText }}
            </a>
        </template>
        <template v-else-if="isGitHub">
            <a :href="`https://github.com/BinaryQuBit`" class="itemsIcon" target="_blank" rel="noopener noreferrer">
                <img :src="iconSrc" />
            </a>
            <a :href="`https://github.com/BinaryQuBit`" class="itemsDescription link" target="_blank"
                rel="noopener noreferrer">
                {{ titleText }}
            </a>
        </template>
        <template v-else>
            <div class="itemsIcon">
                <img :src="iconSrc" />
            </div>
            <div class="itemsDescription">
                {{ titleText }}
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    iconSrc: String,
    titleText: String,
    isEmail: Boolean,
    isLinkedIn: Boolean,
    isGitHub: Boolean,
});
</script>


<style scoped>
.items {
    display: flex;
    padding: 10px;
}

.itemsIcon {
    padding-right: 5px;
}

.itemsDescription {
    font-family: "Lora", serif;
    padding-left: 5px;
}

.link {
    color: blue;
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>