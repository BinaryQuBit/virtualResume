<template>
    <div class="flexContainer">
        <div class="mainContainer">
            <div class="employerContainer">
                <div class="employer">
                    {{ employer }}
                </div>
                <a v-if="githubIcon" :href="githubLink" target="_blank" rel="noopener noreferrer" class="githubIcon" title="View GitHub Repository">
                    <i :class="githubIcon" alt="GitHub Link" />
                </a>
                <a v-if="demoIcon" :href="demoLink" target="_blank" rel="noopener noreferrer" title="View Live Demo">
                    <i :class="demoIcon" alt="Demo Link" />
                </a>
            </div>
            <div class="location">
                {{ location }}
            </div>
        </div>
        <div class="date">
            {{ date }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
    employer: String,
    location: String,
    date: String,
    githubIcon: String,
    demoIcon: String,
    githubLink: String,
    demoLink: String,
});

</script>

<style scoped>
.flexContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--title-color);
    padding: 10px;
}
.mainContainer {
    display: block;
}

.employerContainer {
    display: flex;
    align-items: center;
}

.employer {
    font-family: "Lora", serif;
    font-weight: 900;
    font-size: 18px;
}

i {
    font-size: 20px;
    color: var(--icon-color);
    transition: transform 0.3s;
}

i:hover {
    transform: scale(1.3);
}

.githubIcon {
    margin-left: 10px;
    margin-right: 10px;
}

.location {
    font-family: "Lora", serif;
    font-weight: 600;
    font-size: 16px;
}

.date {
    font-family: "Lora", serif;
    font-weight: 600;
    font-size: 16px;
}

@media (max-width: 580px) {

    .employer {
        font-size: 16px;
    }

    .location,
    .date {
        font-size: 12px;
    }
}

@media (max-width: 500px) {
    .flexContainer {
        display: block;
    }
}
</style>