import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vite.dev/config/
export default defineConfig({
  base: '/phoenix-nazarov-cv/',
  plugins: [vue(), viteSingleFile()]
})
