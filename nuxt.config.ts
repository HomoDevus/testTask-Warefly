// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
	target: 'static',
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: process.env.npm_package_description || '',
			},
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	build: {},
	router: {
		base: '/testTask-Warefly/',
	},
	components: true,
};
