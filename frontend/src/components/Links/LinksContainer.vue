<template>
    <div class="linkMainContainer">
        <div class="darkMode" @click="toggleDarkMode">
            <i :class="globalState?.darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
            <p>{{ globalState?.darkMode ? "Light Mode" : "Dark Mode" }}</p>
        </div>
        <div class="share" @click="shareContent">
            <i class="fas fa-share-alt"></i>
            <p>Share</p>
        </div>
        <div class="download" @click="downloadPdf">
            <i class="fas fa-download"></i>
            <p>Download</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
import type { GlobalState } from "../../types";
const globalState = inject<GlobalState>("globalState");

const toggleDarkMode = () => {
    if (globalState) {
        globalState.toggleDarkMode();
    }
};

const shareContent = async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Aman Padda's Resume",
                text: "Check out Aman Padda's Resume",
                url: window.location.href,
            });
        } catch (error) {
            console.error("Error sharing the content", error);
        }
    } else {
        alert("Web Share API is not supported in your browser.");
    }
};

const downloadPdf = () => {
    const link = document.createElement("a");
    link.href = "Resume.pdf";
    link.download = "AmanPaddaResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
</script>

<style scoped>
.linkMainContainer {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.darkMode,
.share,
.download {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 20px;
    font-family: "Lora", serif;
    transition: transform 0.3s;
    color: var(--textIcon-color);
}

.darkMode i,
.share i,
.download i {
    margin-bottom: 4px;
    transition: transform 0.3s;
    color: var(--icon-color);
}

.darkMode:hover i,
.share:hover i,
.download:hover i {
    transform: scale(1.5);
}

.darkMode:hover p,
.share:hover p,
.download:hover p {
    text-decoration: underline;
}

@media (max-width: 1000px) {

    .darkMode,
    .share,
    .download {
        padding-left: 0px;
    }
}
</style>
