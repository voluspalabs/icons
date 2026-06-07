import { defineConfig } from 'bunup'

export default defineConfig({
  entry: ['src/index.ts', 'src/*.tsx'],
  format: 'esm',
  dts: {
    inferTypes: true,
    splitting: true,
  },
  sourcemap: 'linked',
  clean: true,
  splitting: true,
  target: 'browser',
  sourceBase: './src',
  exports: true,
  emitDCEAnnotations: true,
  drop: ['debugger'],
  unused: {
    level: 'error',
  },
  jsx: {
    runtime: 'automatic',
    importSource: 'react',
    development: false,
    sideEffects: false,
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
})
