import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import vueRouter from '@vitejs/plugin-vue-router'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJSX(), vueRouter()],
})
