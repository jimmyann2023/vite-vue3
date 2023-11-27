import { defineStore } from 'pinia';

import { store } from '@/store';
export const useSettingsStore = defineStore({
  id: 'vue3-setting',
  state: () => {
    return {
      message: '你好 pinia',
    };
  },
  persist: {
    enabled: true, // 开启数据持久化缓存
    strategues: [
      {
        key: 'vue3-vite-pinia', // 设置存储的 key
        storage: localStorage, // 表示存储在LocalStoreage
      },
    ],
  }, // 开启持久化存储
  getters: {},
  actions: {},
});

export function useSettingsStoreWithOut() {
  return useSettingsStore(store);
}
