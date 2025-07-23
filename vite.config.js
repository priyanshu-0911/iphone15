// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  if (command === 'serve') {
    return { plugins: [react()] }
  } else {
    return {
      plugins: [react()],
      base: '/iphone15/', // IMPORTANT: Use your repository name here
    }
  }
})