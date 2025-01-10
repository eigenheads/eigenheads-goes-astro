// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypeMermaid from 'rehype-mermaid';
import rehypeRaw from 'rehype-raw';

// https://astro.build/config
export default defineConfig({
	markdown: {
		rehypePlugins: [
			rehypeRaw,
			rehypeMermaid,
		],
	},
	integrations: [
		starlight({
			title: 'My Docs',
			defaultLocale: 'en', // English as default
      locales: {
        // English
        en: {
          label: 'English',
          lang: 'en',
        },
        // French
        fr: {
          label: 'Français',
          lang: 'fr',
        },
        // Spanish
        es: {
          label: 'Español',
          lang: 'es',
        },
        // Portuguese
        pt: {
          label: 'Português',
          lang: 'pt',
        },
        // Mandarin Chinese
        zh: {
          label: '中文',
          lang: 'zh-CN',
        },
			},
			social: {
			// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
				//		{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
