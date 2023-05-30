import { defineConfig } from 'vite';
import mkcert from 'vite-plugin-mkcert';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        https: true,
        port: 5000,
        open: '/',
    },

    plugins: [react(), mkcert()],
});
