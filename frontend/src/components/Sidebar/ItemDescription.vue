<template>
    <div class="items">
        <template v-if="isEmail">
            <a :href="`mailto:${titleText}`" class="itemsIcon" title="Email Me">
                <i :class="iconSrc" class="linked" />
            </a>
            <a :href="`mailto:${titleText}`" class="itemsDescription link" title="Email Me">
                {{ titleText }}
            </a>
        </template>
        <template v-else-if="isLinkedIn">
            <a :href="`https://www.linkedin.com/in/padda/`" class="itemsIcon" target="_blank" rel="noopener noreferrer" title="View My LinkedIn">
                <i :class="iconSrc" class="linked" />
            </a>
            <a :href="`https://www.linkedin.com/in/padda/`" class="itemsDescription link" target="_blank"
                rel="noopener noreferrer" title="View My LinkedIn">
                {{ titleText }}
            </a>
        </template>
        <template v-else-if="isGitHub">
            <a :href="`https://github.com/BinaryQuBit`" class="itemsIcon" target="_blank" rel="noopener noreferrer">
                <i :class="iconSrc" class="linked" title="View My Github"/>
            </a>
            <a :href="`https://github.com/BinaryQuBit`" class="itemsDescription link" target="_blank"
                rel="noopener noreferrer" title="View My Github">
                {{ titleText }}
            </a>
        </template>
        <template v-else-if="isProject">
            <a :href="`#`" class="itemsIcon" target="_blank" rel="noopener noreferrer">
                <i :class="iconSrc" class="linked" title="View My Projects" />
            </a>
            <a :href="`#`" class="itemsDescription link" target="_blank" rel="noopener noreferrer"title="View My Projects">
                {{ titleText }}
            </a>
        </template>
        <template v-else-if="isLocation">
            <a :href="`https://www.google.ca/maps/place/Calgary,+AB/@51.0276233,-114.087835,10z/data=!3m1!4b1!4m6!3m5!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831!16zL20vMDFyMzI?entry=ttu`"
                class="itemsIcon" target="_blank" rel="noopener noreferrer" title="My Location">
                <i :class="iconSrc" class="linked" />
            </a>
            <a :href="`https://www.google.ca/maps/place/Calgary,+AB/@51.0276233,-114.087835,10z/data=!3m1!4b1!4m6!3m5!1s0x537170039f843fd5:0x266d3bb1b652b63a!8m2!3d51.0447331!4d-114.0718831!16zL20vMDFyMzI?entry=ttu`"
                class="itemsDescription link" target="_blank" rel="noopener noreferrer" title="My Location">
                {{ titleText }}
            </a>
        </template>
        <template v-else>
            <div class="itemsIcon">
                <i :class="iconSrc" class="notLinked"/>
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
    isProject: Boolean,
    isLocation: Boolean,
});
</script>


<style scoped>
.items {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
}

.linked {
    color: var(--icon-color);
    transition: transform 0.3s;
    font-size: 18px;
    width: 24px;
    height: 24px;
    display: inline-block;
    text-align: center;
    line-height: 24px;
}

.notLinked {
    font-size: 18px;
    width: 24px;
    height: 24px;
    display: inline-block;
    text-align: center;
    line-height: 24px;
}

.items:hover .linked {
    transform: scale(1.3);
}

.items:hover .link {
    text-decoration: underline;
}

.linked:hover {
    transform: scale(1.3);
}

.itemsIcon {
    display: flex;
    align-items: center; /* Centers the icon vertically within the container */
    justify-content: center; /* Centers the icon horizontally within the container */
}

.itemsDescription {
    font-family: "Lora", serif;
    padding-left: 5px;
}

.link {
    color: var(--icon-color);
    text-decoration: none;
}

.link:hover {
    text-decoration: underline;
}
</style>