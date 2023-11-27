<script setup>
// import { toRefs } from 'vue';
import { storeToRefs } from 'pinia';

import { useSettingsStore } from '@/store/modules/settings.js';
const settingsStore = useSettingsStore();
// const { message } = settingsStore; // 不是响应式
// const { message } = toRefs(settingsStore); //是响应式
const { message } = storeToRefs(settingsStore); // 是响应式

const changeStoreState = () => {
  settingsStore.message = 'aaa';
};
console.log('app.vue');
</script>

<template>
  <div>
    <a-button @click="changeStoreState">change message</a-button>
    <div>app-route</div>
    <div>
      持久化存储 ---> 点击后可以刷新浏览器 数据依然保存在localStage里面 message:{{ message }}
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
