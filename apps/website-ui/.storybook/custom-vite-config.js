// import { imagetools } from 'vite-imagetools'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return  {
    build: {
      target: 'es2017'
    },
    resolve: {
      alias: {
        '#root': path.resolve(__dirname, '../src'),
        // Mobile app: use mock import
        '#mobile/mobile-analytics': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true'
            ? '../src/core/analytics/mobile-analytics-origin.js'
            : '../src/core/analytics/mobile-analytics-mock.js',
        ),
        '#mobile/link': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true'
            ? '../src/shared/ui/atoms/link/link-mobile.tsx'
            : '../src/shared/ui/atoms/link/link-origin.tsx',
        ),
        '#mobile/router': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true'
            ? '../src/core/navigation/router-mobile.tsx'
            : '../src/core/navigation/router-origin.tsx',
        ),
        '#mobile/share': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true' ? '../src/core/share/share-mobile.tsx' : '../src/core/share/share-origin.tsx',
        ),
      },
    },
    plugins: [
      react(),
      // imagetools(),
    ]
  }
})
