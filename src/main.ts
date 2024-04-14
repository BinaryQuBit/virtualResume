// main.ts
import { createApp, reactive } from 'vue'
import App from './App.vue'
import 'virtual:windi.css';

const globalState = reactive({
    darkMode: false,
    toggleDarkMode() {
        this.darkMode = !this.darkMode;
        document.body.classList.toggle('dark-theme', this.darkMode);
    }
});

const app = createApp(App);
app.provide('globalState', globalState);

app.mount('#app');

