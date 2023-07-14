import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import fs from 'fs';

const entryFolder = './src/lib/';
const files = fs.readdirSync(entryFolder).map(f => entryFolder + f);

export default defineConfig({
	plugins: [
		svelte({
			compilerOptions: {
				customElement: true
			}
		})
	],
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `
					@import './src/assets/styles/abstracts/__abstracts.scss';
				`
			}
		}
	},
	build: {
		lib: {
			entry: files,
			name: 'ChocoWebComponents'
		}
	}
});
