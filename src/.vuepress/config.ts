import { path } from '@vuepress/utils';
import { defineUserConfig } from 'vuepress';
import type { DefaultThemeOptions } from 'vuepress';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import { containerPlugin } from '@vuepress/plugin-container';
import { generateRecentUpdatesPage } from './recent-updates-page';
import { getRelatedPages } from './related-pages';
import { getChildPages } from './child-pages';
import { generateEndpointPages } from './generate-endpoint-pages';
import { getInstances } from './get-instances';
import localTheme from './mitheme/src/node';

const ssrTransformCustomDir = () => {
	return {
		props: [],
		needRuntime: true,
	};
};

export default defineUserConfig<DefaultThemeOptions>({
	// '/' 如果使用自己的域名
	// '/ocean-hub/' 如果您没有使用自己的域名
	base: '/',

	lang: 'zh',
	title: 'Ocean Hub',

	head: [
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Kosugi+Maru',
			},
		],
		[
			'link',
			{
				rel: 'stylesheet',
				href: 'https://use.fontawesome.com/releases/v5.15.3/css/all.css',
			},
		],
	],

	locales: {
		'/': { lang: 'en-US', description: 'Official website of Ocean project' },
		'/zh/': { lang: 'zh', description: 'Ocean项目的官方网站' },
		'/ja/': { lang: 'ja-JP', description: 'オープンソースの分散型マイクロブログプラットフォーム、Oceanの公式サイト' },
	},

	theme: localTheme({
		repo: 'Ocean-dev/ocean-hub',
		docsDir: 'src',
		logo: 'https://raw.githubusercontent.com/Ocean-dev/assets/main/favicon.png',
		locales: {
			'/': {
				selectLanguageName: 'English',
				contributorsText: 'Contributors',
				lastUpdatedText: 'Last Updated',
				editLinkText: 'Edit this page',
				relatedPagesText: 'Related pages',
				readThisArticle: 'Read this article',
				navbar: [
					{ text: 'Blog', link: '/blog/' },
					{ text: 'Taking part', children: ['/instances', '/plugins/', '/appendix/assets'] },
					{
						text: 'Documentation', children: [
							'/docs/Ocean',
							'/docs/releases',
							'/docs/ocean-hub',
							'/docs/faq',
							'/docs/glossary',
							'/docs/troubleshooting',
							{
								text: 'Features', children: [
									'/docs/features/note',
									'/docs/features/reaction',
									'/docs/features/timeline',
									'/docs/features/mfm',
									'/docs/features/custom-emoji',
									'/docs/features/drive',
									'/docs/features/deck',
									'/docs/features/charts',
									'/docs/features/online-status',
									'/docs/features/share-form',
									'/docs/features/ads',
									'/docs/features/thread-mute',
									'/docs/features/word-mute',
									'/docs/features/mute-and-block',
									'/docs/features/plugin',
									'/docs/features/antenna',
									'/docs/features/clip',
									'/docs/features/favorite',
									'/docs/features/follow',
									'/docs/features/pages',
									'/docs/features/theme',
									'/docs/features/widgets',
								]
							},
							{
								text: 'for Developers', children: [
									'/docs/api',
									'/docs/api/streaming',
									'/docs/api/endpoints.html',
									'/docs/features/webhook',
								]
							},
							{
								text: 'for Admins', children: [
									'/docs/install',
									'/docs/admin/emoji',
									'/docs/admin/cdn',
									'/docs/admin/nginx',
									'/docs/admin/push-docker-hub',
									'/docs/admin/troubleshooting',
									'/docs/tips/disable-timelines',
									'/docs/admin/default-reaction',
									'/docs/features/silence',
								]
							},
						]
					},
					{
						text: 'Links', children: [
							{ text: 'Official Discord', link: 'https://discord.gg/apaTzGUF' },
							// { text: 'Donations (Patreon)', link: 'https://www.patreon.com/syuilo' },
							// { text: 'Translation (Crowdin)', link: 'https://crowdin.com/project/Ocean' },
							// { text: '藍.moe (Mascot art site)', link: 'https://xn--931a.moe' },
							// { text: 'Accounts', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: 'Repository', children: [
									// { text: 'Ocean', link: 'https://github.com/Ocean-dev/Ocean' },
									// { text: 'Ocean.js', link: 'https://github.com/Ocean-dev/Ocean.js' },
									// { text: 'mfm.js', link: 'https://github.com/Ocean-dev/mfm.js' },
									{ text: 'ocean-hub', link: 'https://github.com/wrxinyue/ocean-hub' },
								]
							},
						]
					},
				],
			},
			'/zh/': {
				selectLanguageName: '简体中文',
				contributorsText: '贡献者',
				lastUpdatedText: '编辑日期',
				editLinkText: '编辑本页面',
				relatedPagesText: '相关页面',
				readThisArticle: '阅读本文章',
				navbar: [
					{ text: '博客', link: '/blog/' },
					{ text: '参与', children: ['/zh/instances', '/zh/plugins/', '/zh/appendix/assets'] },
					{
						text: '帮助文档', children: [
							'/zh/docs/ocean-blog',
							'/zh/docs/atomic-knowledge',
							'/zh/docs/releases',
							'/zh/docs/ocean-hub',
							'/zh/docs/faq',
							'/zh/docs/glossary',
							'/zh/docs/troubleshooting',
							{
								text: 'Features', children: [
									'/zh/docs/features/note',
									'/zh/docs/features/reaction',
									'/zh/docs/features/timeline',
									'/zh/docs/features/mfm',
									'/zh/docs/features/custom-emoji',
									'/zh/docs/features/drive',
									'/zh/docs/features/deck',
									'/zh/docs/features/charts',
									'/zh/docs/features/online-status',
									'/zh/docs/features/share-form',
									'/zh/docs/features/ads',
									'/zh/docs/features/thread-mute',
									'/zh/docs/features/word-mute',
									'/zh/docs/features/mute-and-block',
									'/zh/docs/features/plugin',
									'/zh/docs/features/antenna',
									'/zh/docs/features/clip',
									'/zh/docs/features/favorite',
									'/zh/docs/features/follow',
									'/zh/docs/features/pages',
									'/zh/docs/features/theme',
									'/zh/docs/features/widgets',
								]
							},
							{
								text: '开发者', children: [
									'/zh/docs/api',
									'/zh/docs/api/streaming',
									'/zh/docs/api/endpoints.html',
									'/zh/docs/features/webhook',
								]
							},
							{
								text: '技术文档', children: [
									'/zh/docs/tech',
									'/zh/docs/tech/configuration',
									'/zh/docs/tech/any-sync',
									'/zh/docs/tech/anytype-heart',
									'/zh/docs/tech/glossary',
									'/zh/docs/tech/overview',
								]
							},
							{
								text: '管理员', children: [
									'/zh/docs/install',
									'/zh/docs/admin/emoji',
									'/zh/docs/admin/cdn',
									'/zh/docs/admin/nginx',
									'/zh/docs/admin/push-docker-hub',
									'/zh/docs/admin/troubleshooting',
									'/zh/docs/tips/disable-timelines',
									'/zh/docs/admin/default-reaction',
									'/zh/docs/features/silence',
								]
							},
						]
					},
					{
						text: '链接', children: [
							{ text: '官方Discord', link: 'https://discord.gg/apaTzGUF' },
							// { text: '赞助 (Patreon)', link: 'https://www.patreon.com/syuilo' },
							// { text: '翻译 (Crowdin)', link: 'https://crowdin.com/project/Ocean' },
							// { text: '蓝.moe (吉祥物艺廊)', link: 'https://xn--931a.moe' },
							// { text: '账户', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: '储存库', children: [
									// { text: 'Ocean', link: 'https://github.com/Ocean-dev/Ocean' },
									// { text: 'Ocean.js', link: 'https://github.com/Ocean-dev/Ocean.js' },
									// { text: 'mfm.js', link: 'https://github.com/Ocean-dev/mfm.js' },
									{ text: 'ocean-hub', link: 'https://github.com/wrxinyue/ocean-hub' },
								]
							},
						]
					},
				],
			},
			'/ja/': {
				selectLanguageName: '日本語',
				contributorsText: '編集者',
				lastUpdatedText: '編集日時',
				editLinkText: 'ページを編集',
				relatedPagesText: '関連するページ',
				readThisArticle: 'この記事を読む',
				navbar: [
					{ text: 'ブログ', link: '/blog/' },
					{ text: 'お楽しみ', children: ['/ja/instances', '/ja/plugins/', '/ja/appendix/assets'] },
					{
						text: 'ドキュメント', children: [
							'/ja/docs/Ocean',
							'/ja/docs/releases',
							'/ja/docs/ocean-hub',
							'/ja/docs/donate',
							'/ja/docs/faq',
							'/ja/docs/glossary',
							'/ja/docs/notes',
							'/ja/docs/troubleshooting',
							{
								text: '機能', children: [
									'/ja/docs/features/note',
									'/ja/docs/features/reaction',
									'/ja/docs/features/timeline',
									'/ja/docs/features/mfm',
									'/ja/docs/features/custom-emoji',
									'/ja/docs/features/drive',
									'/ja/docs/features/deck',
									'/ja/docs/features/charts',
									'/ja/docs/features/online-status',
									'/ja/docs/features/share-form',
									'/ja/docs/features/ads',
									'/ja/docs/features/thread-mute',
									'/ja/docs/features/word-mute',
									'/ja/docs/features/mute-and-block',
									'/ja/docs/features/plugin',
									'/ja/docs/features/antenna',
									'/ja/docs/features/clip',
									'/ja/docs/features/favorite',
									'/ja/docs/features/follow',
									'/ja/docs/features/pages',
									'/ja/docs/features/theme',
									'/ja/docs/features/widgets',
								]
							},
							{
								text: '開発者', children: [
									'/ja/docs/api',
									'/ja/docs/api/streaming',
									'/ja/docs/api/endpoints.html',
									'/ja/docs/features/webhook',
								]
							},
							{
								text: '運営者向け', children: [
									'/ja/docs/install',
									'/ja/docs/admin/cdn',
									'/ja/docs/admin/nginx',
									'/ja/docs/admin/push-docker-hub',
									'/ja/docs/admin/troubleshooting',
									'/ja/docs/tips/scale-out',
									'/ja/docs/tips/disable-timelines',
									'/ja/docs/features/silence',
								]
							},
						]
					},
					{
						text: 'リンク', children: [
							{ text: '公式Discord', link: 'https://discord.gg/apaTzGUF' },
							// { text: '寄付 (Patreon)', link: 'https://www.patreon.com/syuilo' },
							// { text: '翻訳 (Crowdin)', link: 'https://crowdin.com/project/Ocean' },
							// { text: '藍.moe', link: 'https://xn--931a.moe' },
							// { text: 'アカウント', children: [{ text: '@repo@p1.a9z.dev', link: 'https://p1.a9z.dev/@repo' }] },
							{
								text: 'リポジトリ', children: [
									// { text: 'Ocean', link: 'https://github.com/Ocean-dev/Ocean' },
									// { text: 'Ocean.js', link: 'https://github.com/Ocean-dev/Ocean.js' },
									// { text: 'mfm.js', link: 'https://github.com/Ocean-dev/mfm.js' },
									{ text: 'ocean-hub', link: 'https://github.com/wrxinyue/ocean-hub' },
								]
							},
						]
					},
				],
			},
		},
		themePlugins: {
			activeHeaderLinks: false,
		},
	}),

	plugins: [
		['@vuepress/plugin-search'],
		registerComponentsPlugin({ componentsDir: path.resolve(__dirname, './components/') }),
		containerPlugin({
			type: 'tip',
			before: (info: string, type): string => `<div class="custom-container tip"><i class="fas fa-info"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
			after: (): string => '</div>\n',
		}),
		containerPlugin({
			type: 'warning',
			before: (info: string, type): string => `<div class="custom-container warning"><i class="fas fa-exclamation"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
			after: (): string => '</div>\n',
		}),
		containerPlugin({
			type: 'danger',
			before: (info: string, type): string => `<div class="custom-container danger"><i class="fas fa-times"></i>${info ? `<p class="custom-container-title">${info}</p>` : ''}\n`,
			after: (): string => '</div>\n',
		}),
	],

	clientConfigFile: path.resolve(__dirname, './client.ts'),

	async onInitialized(app) {
		await getInstances(app);
		await generateEndpointPages(app);
		await generateRecentUpdatesPage(app);
		await getRelatedPages(app);
		await getChildPages(app);
	},

	bundlerConfig: {
		vuePluginOptions: {
			template: {
				ssr: true,
				compilerOptions: {
					directiveTransforms: {
						'parallax': ssrTransformCustomDir,
						'fade-in': ssrTransformCustomDir,
					},
				},
			},
		},
	},

	shouldPrefetch: false,
});
