import { defineConfig } from "vite";

import path from 'path'

export default defineConfig({
    base: '/first3d',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, '.')
        }
    }
})