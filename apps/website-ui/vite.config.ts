/* eslint-disable import/no-anonymous-default-export */
// import { SentryVitePluginOptions, sentryVitePlugin } from '@sentry/vite-plugin'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'
// import { imagetools } from 'vite-imagetools'
import vike from 'vike/plugin'
import { UserConfig, defineConfig, loadEnv } from 'vite'

// const envs = {
//   prod: 'production',
//   stage: 'staging',
//   dev: 'dev',
// }

// const sentryConfig: SentryVitePluginOptions = {
//   org: 'org',
//   project: '{{projectName}}',
//   telemetry: false, // TODO: recheck and enable

//   sourcemaps: {
//     // Specify the directory containing build artifacts
//     assets: './**',

//     // Don't upload the source maps of dependencies
//     ignore: ['./node_modules/**'],
//   },

//   // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
//   // and need `project:releases` and `org:read` scopes
//   authToken: '08b3ce8901494c8fb3999ed13cd2816cf6794480b98042d0afc3b3c440edce51',

//   release: {
//     setCommits: {
//       auto: true,
//       ignoreMissing: true,
//     },
//     deploy: {
//       env: process.env.VITE_DOMAIN_ENV ? envs[process.env.VITE_DOMAIN_ENV as keyof typeof envs] : 'local',
//       name: '0.1.0',
//     },
//   },
// }

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    server: {
      port: 3000,
      proxy: {
        '/api': 'http://localhost:3001',
      },
    },
    preview: {
      port: 3003,
    },
    build: {
      // target: env.VITE_MOBILE_APP === 'true' ? 'es2016' : 'es2017',
      target: 'es2016',
      sourcemap: true,
    },
    resolve: {
      alias: {
        '#root': path.resolve(__dirname, './src'),
        // Mobile app: use mock import
        '#mobile/mobile-analytics': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true'
            ? './src/core/analytics/mobile-analytics-origin.js'
            : './src/core/analytics/mobile-analytics-mock.js',
        ),
        '#mobile/link': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true'
            ? './src/shared/ui/atoms/link/link-mobile.tsx'
            : './src/shared/ui/atoms/link/link-origin.tsx',
        ),
        '#mobile/router': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true'
            ? './src/core/navigation/router-mobile.tsx'
            : './src/core/navigation/router-origin.tsx',
        ),
        '#mobile/share': path.resolve(
          __dirname,
          env.VITE_MOBILE_APP === 'true' ? './src/core/share/share-mobile.tsx' : './src/core/share/share-origin.tsx',
        ),
      },
    },
    plugins: [
      process.env.ANALYZE
        ? visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            template: 'treemap',
          })
        : null,
      react(),
      env.VITE_MOBILE_APP === 'true'
        ? null
        : vike({
            prerender: true,
          }),
      // imagetools(),
      // Put the Sentry vite plugin after all other plugins
      // sentryVitePlugin(sentryConfig),
      env.VITE_MOBILE_APP === 'true' ? TanStackRouterVite() : null,
    ],
  } as UserConfig
})
