<template>
    <div class="mainContainer">
        <div class="sidebar">
            <Sidebar :visitorCount="visitorCount" />
        </div>
        <div :class="['itemsList', { 'dark-mode': globalState?.darkMode }]">
            <div class="blocking">
                <div class="linksContainer">
                    <LinksContainer />
                </div>
                <div class="resumeContainer">
                    <ResumeContainer />
                </div>
            </div>
            <div class="footer">
                Copyright © 2024 Virtual Resume - Amandip Padda
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import Sidebar from "./Sidebar/Sidebar.vue";
import ResumeContainer from "./Resume/ResumeContainer.vue";
import LinksContainer from "./Links/LinksContainer.vue";
import type { GlobalState } from "../types";
const globalState = inject<GlobalState>('globalState');

import { defineProps } from 'vue';

defineProps({
    visitorCount: Number
});

</script>


<style scoped>
.mainContainer {
    display: flex;
    align-items: stretch;
    background-color: var(--background-color, #fff);
    color: var(--text-color, #333);
}

.sidebar {
    width: 300px;
    background-color: var(--sidebar-color);
}


.linksContainer {
    float: right;
}

.blocking {
    margin: 40px 40px 0px 40px;
}

.itemsList {
    width: calc(100% - 430px);
    flex-grow: 1;
}

.footer {
    width: 100%;
    background-color: var(--sidebar-color);
    color: var(--text-color, #333);
    text-align: center;
    font-family: "Lora", serif;
    padding: 15px;
}

@media (max-width: 600px) {
    .resumeContainer {
        font-size: 12px;
    }
}

@media (max-width: 1000px) {
    .mainContainer {
        flex-direction: column;
    }

    .resumeContainer {
        padding-top: 0px;
    }

    .sidebar {
        width: 100%;
    }

    .itemsList {
        width: 100%;
    }

    .blocking {
        margin: 0px;
        padding: 10px;
    }

    .linksContainer {
        float: none;
        padding-top: 10px;
    }

}
</style>
