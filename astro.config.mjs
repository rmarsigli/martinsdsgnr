// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
	site: 'https://rmarsigli.github.io/martinsdsgnr/',
	vite: {
		plugins: [
			tailwindcss(),
			Icons({
				compiler: 'astro',
			}),
		],
	},
})
