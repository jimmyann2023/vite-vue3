<script setup>
import HelloWorld from './components/HelloWorld.vue';
import JsxButton from './components/JsxButton';
import SvgIcon from './components/SvgIcon.vue';
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
</template>

<style scoped lang="scss">
a {
  background-color: $injectedColor;
}
// .logo {
//   height: 6em;
//   padding: 1.5em;
//   will-change: filter;
//   transition: filter 300ms;
// }
// .logo:hover {
//   filter: drop-shadow(0 0 2em #646cffaa);
// }
// .logo.vue:hover {
//   filter: drop-shadow(0 0 2em #42b883aa);
// }
</style>
