import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { UserConfig, defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { peerDependencies } from './package.json'

// eslint-disable-next-line import/no-anonymous-default-export
export default defineConfig(
  () =>
    ({
      build: {
        target: 'es2017',
        lib: {
          entry: path.resolve(__dirname, 'src/index.ts'),
          formats: ['es'],
          fileName: (extension) => `index.${extension}.js`,
        },
        rollupOptions: {
          external: [...Object.keys(peerDependencies)],
        },
        sourcemap: true,
      },
      plugins: [react(), dts({ insertTypesEntry: true })],
    }) as UserConfig,
)
