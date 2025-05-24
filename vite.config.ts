/// <reference types="vitest" />

import tailwindcss from '@tailwindcss/vite';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

const ReactCompilerConfig = {
  target: '19',
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Please make sure that '@tanstack/router-plugin' is passed before '@vitejs/plugin-react'
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true,
      generatedRouteTree: './src/app/routeTree.gen.ts',
    }),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler', ReactCompilerConfig]],
      },
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/shared': path.resolve(__dirname, './src/features/shared'),
      '@/auth': path.resolve(__dirname, './src/features/auth'),
      '@/dashboard': path.resolve(__dirname, './src/features/dashboard'),
      '@/public': path.resolve(__dirname, './src/features/public'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './test-setup.ts',
  },
});
