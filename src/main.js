import 'ant-design-vue/dist/reset.css';
import 'virtual:svg-icons-register';
import 'virtual:uno.css';
import './style.css';

import { createApp } from 'vue';

import { useVXETable } from '@/plugins/use_vxe';

import App from './App.vue';
const app = createApp(App);
useVXETable(app);
app.mount('#app');
