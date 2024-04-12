<template>
    <div class="bg">
        <div class="leftContainer" :class="{ 'visible': isSidebarVisible }">
            <ItemTitle :iconSrc="BusinessmanIcon" titleText="CONTACT" />
            <ItemDescription :iconSrc="LocationIcon" titleText="Calgary, AB., Canada" />
            <ItemDescription :iconSrc="Email" titleText="amandippadda@outlook.com" isEmail />
            <ItemDescription :iconSrc="LinkedIn" titleText="LinkedIn" isLinkedIn />
            <ItemDescription :iconSrc="Github" titleText="Github" isGitHub />
            <ItemTitle :iconSrc="Computer" titleText="TECH SKILLS" />
            <BoxFill typeLang="C/C++" innerBoxWidth="82%" :animateStart="animateStartC" />
            <BoxFill typeLang="Python" innerBoxWidth="80%" :animateStart="animateStartPython" />
            <BoxFill typeLang="Java" innerBoxWidth="75%" :animateStart="animateStartJava" />
            <BoxFill typeLang="Javascript" innerBoxWidth="80%" :animateStart="animateStartJavascript" />
            <BoxFill typeLang="PHP" innerBoxWidth="60%" :animateStart="animateStartPHP" />
            <ItemTitle :iconSrc="SoftSkills" titleText="SOFT SKILLS" />
            <BoxFill typeLang="Communication" innerBoxWidth="80%" :animateStart="animateStartCommunication" />
            <BoxFill typeLang="Teamwork & Collaboration" innerBoxWidth="85%" :animateStart="animateStartTeamwork" />
            <BoxFill typeLang="Problem-Solving" innerBoxWidth="85%" :animateStart="animateStartProblem" />
            <BoxFill typeLang="Adaptability and Flexibility" innerBoxWidth="80%"
                :animateStart="animateStartAdaptability" />
            <BoxFill typeLang="Leadership" innerBoxWidth="90%" :animateStart="animateStartLeadership" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import BusinessmanIcon from '../../assets/businessmanIcon.svg';
import LocationIcon from "../../assets/locationIcon.svg";
import Email from "../../assets/email.svg";
import LinkedIn from "../../assets/linkedinIcon.svg"
import Github from "../../assets/github.svg"
import Computer from "../../assets/computer.svg"
import SoftSkills from "../../assets/softSkills.svg"
import ItemTitle from './ItemTitle.vue';
import ItemDescription from './ItemDescription.vue';
import BoxFill from './BoxFill.vue';

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
    console.log(window.scrollY)
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
.bg {
    height: 100vh;
    background-color: white;
}

.leftContainer {
    position: absolute;
    left: -370px;
    width: 350px;
    background-color: #b7b7b8;
    transition: left 0.5s ease;
}

.leftContainer.visible {
    left: 20px;
}
</style>