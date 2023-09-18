// vite.config.ts
import { defineConfig, loadEnv } from "vite";
import UnoCSS from 'unocss/vite'


export default defineConfig({
	plugins: [
		UnoCSS()
	]
})
