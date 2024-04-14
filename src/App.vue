<script setup lang="ts">
import HeaderContainer from './components/HeaderContainer.vue';
import BodyContainer from './components/BodyContainer.vue';

</script>

<template>
  <div>
    <HeaderContainer />
    <BodyContainer />
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
