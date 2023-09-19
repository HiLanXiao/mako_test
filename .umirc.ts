import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/test', component: 'index' }],
  npmClient: 'pnpm',
  mfsu: false,
  // publicPath: '/hot_update/',
});
