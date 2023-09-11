import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/test/index', component: 'index' }],
  npmClient: 'pnpm',
  mfsu: false,
  // publicPath: '/test/',
});
