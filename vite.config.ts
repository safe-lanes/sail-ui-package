import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      formats: ['es', 'cjs'], // Only ESM and CJS
      fileName: (format) => `index.${format}`,
    },
    rollupOptions: {
      // Externalize React, ReactDOM, and all Radix packages
      external: [
        'react',
        'react-dom',
        '@radix-ui/react-slot',
        /^@radix-ui\/.*/
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@radix-ui/react-slot': 'ReactSlot'
        }
      }
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react', /^@radix-ui\/.*/],
  },
});
