import { defineConfig } from 'vite';
import path from 'path';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { VantResolver } from '@vant/auto-import-resolver';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        components: path.resolve(__dirname, './src/components'),
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
          target: process.env.VITE_PROXY_URL,
          changeOrigin: true,
        },
      },
    },
  };
});
