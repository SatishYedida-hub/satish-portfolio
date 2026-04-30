import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves project sites under https://<user>.github.io/<repo>/
// so Vite needs to know that prefix to emit correct asset URLs.
//
// We read it from the BASE_PATH env var (set by the GitHub Actions workflow)
// and fall back to the repo name for local `npm run build`.
//
// If you ever rename the repo, update REPO_NAME below OR pass BASE_PATH at build time.
const REPO_NAME = 'satish-portfolio';
const base = process.env.BASE_PATH || `/${REPO_NAME}/`;

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
  },
});
