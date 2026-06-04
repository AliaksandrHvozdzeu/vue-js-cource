import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig, configDefaults } from 'vitest/config'
import type { ConfigEnv, UserConfig } from 'vite'
import viteConfig from './vite.config'

const resolvedViteConfig: UserConfig =
  typeof viteConfig === 'function'
    ? viteConfig({
        mode: 'test',
        command: 'serve',
        isSsrBuild: false,
        isPreview: false,
      } satisfies ConfigEnv)
    : viteConfig

export default mergeConfig(
  resolvedViteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/**'],
      root: fileURLToPath(new URL('./', import.meta.url)),
    },
  }),
)
