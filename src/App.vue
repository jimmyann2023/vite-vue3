<script setup>
import HelloWorld from './components/HelloWorld.vue';
import JsxButton from './components/JsxButton';
import SvgIcon from './components/SvgIcon.vue';
import vxeTableBasic from './views/vxeTableBasic.vue';
console.log('app.vue');
</script>

<template>
  <div class="flex-center">
    <JsxButton></JsxButton>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <SvgIcon name="vue" />
  <vxeTableBasic />
</template>

<style scoped></style>
