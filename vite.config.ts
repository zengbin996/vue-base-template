import dotenv from 'dotenv';
const envConfig: any = dotenv.config({ path: `.env.${process.env.NODE_ENV}` }).parsed;

import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [
    vue(),
    AutoImport({
      dts: 'src/types/auto-import.d.ts',
      imports: [
        'vue',
        'vue-router',
        'pinia',
        'vue-i18n',
        {
          from: 'element-plus',
          imports: ['ElMessage'],
        },
        {
          dayjs: [['default', 'dayjs']],
          axios: [['default', 'axios']],
          lodash: [['default', '_']],
        },
      ],
      resolvers: [
        ElementPlusResolver(),
        // VantResolver() //移动端vant-ui自动导入
      ],
    }),

    Components({
      dts: 'src/types/auto-components.d.ts',
      resolvers: [
        ElementPlusResolver(),
        // VantResolver() //移动端vant-ui自动导入
      ],
    }),
  ],

  server: {
    host: '0.0.0.0',
    port: 9515,
    proxy: {
      '/apis': {
        target: envConfig.BASE_URL,
        changeOrigin: true,
      },
    },
  },
});
