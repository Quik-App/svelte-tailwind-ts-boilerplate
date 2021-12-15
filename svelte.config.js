import preprocess from 'svelte-preprocess';
import adapterStatic from '@sveltejs/adapter-static';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import path from 'path';

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: {
				plugins: [tailwindcss, autoprefixer]
			}
		})
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: {
			adapt: adapterStatic
		},
		vite: {
			resolve: {
				alias: {
					$assets: path.resolve('./src/static'),
					$base: path.resolve('./')
				}
			}
		}
	}
};

export default config;
