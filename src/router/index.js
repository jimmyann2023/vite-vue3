import { createRouter, createWebHistory } from 'vue-router';

import { basicRoute } from '@/router/module/basic';

export const router = createRouter({
  history: createWebHistory(),
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
