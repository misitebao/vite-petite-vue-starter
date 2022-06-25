import { createApp } from 'petite-vue';

import { TestHooks } from '@/hooks/useHeader';

createApp({
  pageName: 'about',
  pingFunc() {
    console.log(`pong ${this.pageName} page`);
    TestHooks();
  },
}).mount('#app');
