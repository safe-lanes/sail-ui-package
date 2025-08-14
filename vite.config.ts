import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: resolve(__dirname, 'postcss.config.cjs'), // ensure Tailwind/PostCSS is applied
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: (id) => id === 'react' || id === 'react-dom' || id.startsWith('@radix-ui/*'),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react', '@radix-ui/react-slot'],
  },
});
