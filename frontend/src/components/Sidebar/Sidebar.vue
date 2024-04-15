<template>
    <div class="leftContainer" :class="{ 'visible': isSidebarVisible }">
        <ItemTitle :iconSrc="'fa-solid fa-user-tie'" titleText="CONTACT" />
        <ItemDescription :iconSrc="'fa-solid fa-location-dot'" titleText="Calgary, AB. Canada" isLocation
            class="itemDescription" />
        <ItemDescription :iconSrc="'fa-solid fa-envelope'" titleText="amandippadda@outlook.com" isEmail
            class="itemDescription" />
        <ItemDescription :iconSrc="'fa-brands fa-linkedin'" titleText="LinkedIn" isLinkedIn class="itemDescription" />
        <ItemDescription :iconSrc="'fa-brands fa-github'" titleText="Github" isGitHub class="itemDescription" />
        <ItemDescription :iconSrc="'fa-solid fa-code'" titleText="Projects" isProject class="itemDescription" />

        <ItemTitle :iconSrc="'fa-solid fa-laptop-code'" titleText="TECH SKILLS" />
        <BoxFill typeLang="C/C++" innerBoxWidth="82%" :animateStart="animateStartC" class="itemDescription" />
        <BoxFill typeLang="Python" innerBoxWidth="80%" :animateStart="animateStartPython" class="itemDescription" />
        <BoxFill typeLang="Java" innerBoxWidth="75%" :animateStart="animateStartJava" class="itemDescription" />
        <BoxFill typeLang="Javascript" innerBoxWidth="80%" :animateStart="animateStartJavascript"
            class="itemDescription" />
        <BoxFill typeLang="PHP" innerBoxWidth="60%" :animateStart="animateStartPHP" class="itemDescription" />

        <ItemTitle :iconSrc="'fa-solid fa-person-chalkboard'" titleText="SOFT SKILLS" />
        <BoxFill typeLang="Communication" innerBoxWidth="80%" :animateStart="animateStartCommunication"
            class="itemDescription" />
        <BoxFill typeLang="Teamwork & Collaboration" innerBoxWidth="85%" :animateStart="animateStartTeamwork"
            class="itemDescription" />
        <BoxFill typeLang="Problem-Solving" innerBoxWidth="85%" :animateStart="animateStartProblem"
            class="itemDescription" />
        <BoxFill typeLang="Adaptability and Flexibility" innerBoxWidth="87%" :animateStart="animateStartAdaptability"
            class="itemDescription" />
        <BoxFill typeLang="Leadership" innerBoxWidth="90%" :animateStart="animateStartLeadership"
            class="itemDescription" />

        <ItemTitle :iconSrc="'fa-solid fa-face-smile'" titleText="HOBBIES" class="itemDescription" />
        <ItemDescription :iconSrc="'fa-solid fa-futbol'" titleText="Soccer" />
        <ItemDescription :iconSrc="'fa-solid fa-chess-pawn'" titleText="Chess" class="itemDescription" />
        <ItemDescription :iconSrc="'fa-solid fa-film'" titleText="Movies" class="itemDescription" />

        <ItemTitle :iconSrc="'fa-solid fa-chart-simple'" titleText="VISITORS" class="itemDescription" />
        <div class="counter">{{ visitorCount }}</div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue';
import ItemTitle from './ItemTitle.vue';
import ItemDescription from './ItemDescription.vue';
import BoxFill from './BoxFill.vue';

defineProps({
    visitorCount: Number
});

let isSidebarVisible = ref(false);
let animateStartC = ref(false);
let animateStartPython = ref(false);
let animateStartJava = ref(false);
let animateStartJavascript = ref(false);
let animateStartPHP = ref(false);
let animateStartCommunication = ref(false);
let animateStartTeamwork = ref(false);
let animateStartProblem = ref(false);
let animateStartAdaptability = ref(false);
let animateStartLeadership = ref(false);

function handleScroll() {
    const threshold = 300;
    if (window.scrollY > threshold) {
        isSidebarVisible.value = true;
    }
    if (window.scrollY > 545) {
        animateStartC.value = true;
    }
    if (window.scrollY > 595) {
        animateStartPython.value = true;
    }
    if (window.scrollY > 645) {
        animateStartJava.value = true;
    }
    if (window.scrollY > 695) {
        animateStartJavascript.value = true;
    }
    if (window.scrollY > 745) {
        animateStartPHP.value = true;
    }
    if (window.scrollY > 900) {
        animateStartCommunication.value = true;
    }
    if (window.scrollY > 950) {
        animateStartTeamwork.value = true;
    }
    if (window.scrollY > 1000) {
        animateStartProblem.value = true;
    }
    if (window.scrollY > 1050) {
        animateStartAdaptability.value = true;
    }
    if (window.scrollY > 1100) {
        animateStartLeadership.value = true;
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<style scoped>
.leftContainer {
    position: absolute;
    left: -350px;
    width: 300px;
    transition: left 0.5s ease;
}

.leftContainer.visible {
    left: 0px;
    right: 0px;
}

.counter {
    font-family: "Lora", serif;
    width: 100%;
    text-align: center;
    font-size: 25px;
    padding-bottom: 40px;
}

@media (max-width: 310px) {
    .itemDescription {
        font-size: 14px;
    }
}

@media (max-width: 1000px) {
    .leftContainer {
        position: none;
        width: 100%;
        display: block;
        position: static;
    }

    .leftContainer.visible {
        left: 0px;
        right: 0px;
    }
}
</style>