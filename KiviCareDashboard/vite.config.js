import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const baseUrl = mode === 'production' ? env.VITE_BASE_URL : '/';

  return {
    base: baseUrl,
    plugins: [react()],
    build: {
      outDir: 'build',
      minify: true,
    },
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    css: {
      preprocessorOptions: {
        scss: {
          quietDeps: true,
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
    optimizeDeps: {
      include: [
        'react',
        'react-dom',
        '@mui/material/Tooltip',
        '@emotion/styled',
      ],
    },
  };
});