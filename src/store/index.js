import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const store = createPinia();
/**
 * 注册 Pinia 持久化插件 不会被浏览器刷新而没有掉
 * @param pinia Pinia instance Pinia 实例
 */
store.use(piniaPluginPersistedstate);

export function setupStore(app) {
  app.use(store);
}

export { store };
