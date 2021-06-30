import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: false, // do not open the browser as we use electron
    port: 8081,
  },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: path.join(__dirname, 'src/renderer'),
      },
    ],
  },
  plugins: [reactRefresh()],
  optimizeDeps: {
    exclude: ['path', 'electron-window-state'],
  },
});
