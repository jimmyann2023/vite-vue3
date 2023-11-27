import 'ant-design-vue/dist/reset.css';
import 'virtual:svg-icons-register';
import 'virtual:uno.css';
import './style.css';

import { createApp } from 'vue';

import { useVXETable } from '@/plugins/use_vxe';
import { setupRouter } from '@/router';
import { setupStore } from '@/store';

import App from './App.vue';

async function bootstrap() {
  const app = createApp(App);

  // 配置 store
  setupStore(app);
  // 注册 vxe-table
  useVXETable(app);
  // 注册路由
  await setupRouter(app);

  app.mount('#app');
}

bootstrap();
