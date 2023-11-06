import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	lang: 'zh',
	title: "OceanHub",
	description: "Ocean Blog document",
	lastUpdated: true,
	locales: {
		root: {
			lang: "zh-CN",
			label: "中文",
			themeConfig: {
				// https://vitepress.dev/reference/default-theme-config
				nav: [
					{ text: '主页', link: '/' },
					{ text: '手册', link: '/zh/docs/manual' },
					{
						text: '帮助文档', items: [
							{ text: '关于 Ocean Blog', link: '/zh/docs/ocean-blog' },
							{ text: '关于 原子性知识点', link: '/zh/docs/atomic-knowledge' },
							{ text: '发行说明', link: '/zh/docs/releases' },
							{ text: '关于 Ocean Hub', link: '/zh/docs/ocean-hub' },
							{ text: '常见问题', link: '/zh/docs/faq' },
							{ text: '故障排除', link: '/zh/docs/troubleshooting' },
						]
					},
					{
						text: '特性', items: [
							{ text: '自定义表情', link: '/zh/docs/features/custom-emoji' },
							{ text: '驾驶', link: '/zh/docs/features/drive' },
							{ text: '用户界面', link: '/zh/docs/features/deck' },
							{ text: '图表', link: '/zh/docs/features/charts' },
							{ text: '在线状态', link: '/zh/docs/features/online-status' },
							{ text: '广告', link: '/zh/docs/features/ads' },
							{ text: '线程静音', link: '/zh/docs/features/thread-mute' },
							{ text: '单词静音', link: '/zh/docs/features/word-mute' },
							{ text: '静音和屏蔽', link: '/zh/docs/features/mute-and-block' },
							{ text: '天线', link: '/zh/docs/features/antenna' },
							{ text: '剪辑', link: '/zh/docs/features/clip' },
							{ text: '关注', link: '/zh/docs/features/follow' },
							{ text: '页数', link: '/zh/docs/features/pages' },
							{ text: '主题', link: '/zh/docs/features/theme' },
						]
					},
					{
						text: '技术文档', items: [
							{ text: '开放仓库', link: '/zh/docs/tech/' },
							{ text: '节点配置', link: '/zh/docs/tech/configuration' },
							{ text: '协议概述', link: '/zh/docs/tech/any-sync' },
							{ text: '网络配置', link: '/zh/docs/tech/anytype-heart' },
							{ text: '项目概览', link: '/zh/docs/tech/overview' },
							{ text: '开发清单', link: '/zh/docs/tech/dev-list' },
						]
					},
				],

				docFooter: { prev: '上一篇', next: '下一篇' },

				editLink: {
					pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
					text: 'Edit this page on GitHub'
				},
				lastUpdatedText: "最近更新时间",
			}
		},
		en: {
			lang: "en-US",
			label: "English",
		}
	},

	themeConfig: {
		// logo: "/test.jpg",
		socialLinks: [{ icon: "github", link: "https://github.com" }],
	}
})

