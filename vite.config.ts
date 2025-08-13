import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = resolve(__filename, '..');

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ComponentLibrary',
      formats: ['es', 'cjs', 'umd'],
      fileName: (format) => `index.${format}`,
    },
    rollupOptions: {
      // Externalize React, ReactDOM, and all Radix UI packages
      external: (id) =>
        id === 'react' ||
        id === 'react-dom' ||
        id.startsWith('@radix-ui/'),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@radix-ui/react-slot': 'ReactSlot',
          // Add other Radix packages here if needed
        },
      },
    },
  },
  optimizeDeps: {
    // Exclude dependencies from pre-bundling
    exclude: ['lucide-react', '@radix-ui/react-slot'],
  },
});
