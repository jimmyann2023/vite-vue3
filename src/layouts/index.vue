<template>
  <RouterView>
    <template #default="{ Component, route }">
      <keep-alive v-if="openCache">
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
      <component :is="Component" v-else :key="route.fullPath" />
    </template>
  </RouterView>
</template>
<script setup>
import { ref } from 'vue';
defineOptions({ name: 'DefaultLayout' });
const openCache = ref('false');
</script>
