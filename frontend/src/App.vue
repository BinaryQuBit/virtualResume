<script setup lang="ts">
import { onMounted, ref } from 'vue';
import HeaderContainer from './components/HeaderContainer.vue';
import BodyContainer from './components/BodyContainer.vue';

const visitorCount = ref(0);

onMounted(async () => {
  try {
    const response = await fetch('/api/visit', { method: 'GET', credentials: 'include' });
    const data = await response.json();
    visitorCount.value = data.visitorCount;
  } catch (error) {
    console.error('Error fetching visitor count:', error);
  }
});
</script>


<template>
  <div>
    <HeaderContainer />
    <BodyContainer :visitorCount="visitorCount" />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap');

:root {
  --icon-color: blue;
  --textIcon-color: blue;
  --title-color: #c0dcdc;
  --container-color: #c7f0f0;
  --sidebar-color: #b8dcdc;
}

.dark-theme {
  --background-color: #00312b;
  --icon-color: #ffffff;
  --text-color: #ffffff;
  --textIcon-color: white;
  --title-color: #00423b;
  --container-color: #005149;
  --sidebar-color: #005149;
}
</style>
