import { createRouter, createWebHistory } from 'vue-router';

import { basicRoute } from '@/router/module/basic';

export const router = createRouter({
  history: createWebHistory(),
  // __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
  // base: window.__MICRO_APP_BASE_ROUTE__ || process.env.BASE_URL,
  routes: basicRoute,
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// reset router
export function resetRouter() {
  router.getRoutes().forEach((route) => {});
}
export function setupRouter(app) {
  app.use(router);
}
