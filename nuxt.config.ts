export enum Env {
	DEV = "dev",
	staging = "staging",
	PROD = "prod"
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	// Target: https://go.nuxtjs.dev/config-target
	ssr: false,

	// Src directory: https://nuxtjs.org/docs/configuration-glossary/configuration-srcdir/
	srcDir: "src/",

	// Init .ENV variables
	runtimeConfig: {
		public: {
			APP_ENV: process.env?.APP_ENV || Env.DEV
		}
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ["~/assets/styles/index.styl"],

	// Plugins to run before rendering page: https://nuxt.com/docs/guide/directory-structure/plugins
	plugins: ["~/plugins/api"],

	// Modules for nuxt app: https://nuxt.com/modules
	modules: [
		"nuxt-svgo",
		"@vueuse/nuxt",
		[
			"@pinia/nuxt",
			{
				autoImports: [
					// automatically imports `defineStore`
					"defineStore", // import { defineStore } from 'pinia'
					// automatically imports `defineStore` as `definePiniaStore`
					["defineStore", "definePiniaStore"] // import { defineStore as definePiniaStore } from 'pinia'
				]
			}
		]
	],

	// App settings: https://nuxt.com/docs/getting-started/seo-meta
	app: {
		head: {
			title: "Nuxt3-template",
			htmlAttrs: {
				lang: "ru"
			},
			meta: [
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
				{ hid: "description", name: "description", content: "" },
				{ name: "format-detection", content: "telephone=no" }
			],
			link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
		},
		pageTransition: { name: "fade-in" }
	}
})