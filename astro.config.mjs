// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// 環境に応じたベースパスの設定
const getBase = () => {
  // 開発環境では空のベースパスを使用
  if (process.env.NODE_ENV === 'development') {
    return '/';
  }
  // 本番環境ではリポジトリ名をベースパスに使用
  return '/sandbox-astro-satellite-spiral';
};

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site: 'https://yuya-0928.github.io',
  base: getBase(),
  output: 'static',
  vite: {
    define: {
      'import.meta.env.MICROCMS_SERVICE_DOMAIN': 
        JSON.stringify(process.env.MICROCMS_SERVICE_DOMAIN),
      'import.meta.env.MICROCMS_API_KEY': 
        JSON.stringify(process.env.MICROCMS_API_KEY),
    },
  },
});