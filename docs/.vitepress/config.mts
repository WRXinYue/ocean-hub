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
					{
						text: '帮助文档', items: [
							{ text: '关于 Ocean Blog', link: '/zh/docs/ocean-blog' },
							{ text: '关于 原子性知识点', link: '/zh/docs/atomic-knowledge' },
							{ text: '发行说明', link: '/zh/docs/releases' },
							{ text: '关于 Ocean Hub', link: '/zh/docs/ocean-hub' },
							{ text: '常见问题', link: '/zh/docs/faq' },
							{ text: '术语表', link: '/zh/docs/glossary' },
							{ text: '故障排除', link: '/zh/docs/troubleshooting' },
						]
					},
					{
						text: '特性', items: [
							{ text: '笔记', link: '/zh/docs/features/note' },
							{ text: '反应', link: '/zh/docs/features/reaction' },
							{ text: '时间线', link: '/zh/docs/features/timeline' },
							{ text: 'MFM', link: '/zh/docs/features/mfm' },
							{ text: '自定义表情', link: '/zh/docs/features/custom-emoji' },
							{ text: '驾驶', link: '/zh/docs/features/drive' },
							{ text: '用户界面', link: '/zh/docs/features/deck' },
							{ text: '图表', link: '/zh/docs/features/charts' },
							{ text: '在线状态', link: '/zh/docs/features/online-status' },
							{ text: '共享表单', link: '/zh/docs/features/share-form' },
							{ text: '广告', link: '/zh/docs/features/ads' },
							{ text: '线程静音', link: '/zh/docs/features/thread-mute' },
							{ text: '单词静音', link: '/zh/docs/features/word-mute' },
							{ text: '静音和屏蔽', link: '/zh/docs/features/mute-and-block' },
							{ text: '天线', link: '/zh/docs/features/antenna' },
							{ text: '剪辑', link: '/zh/docs/features/clip' },
							{ text: '收藏夹', link: '/zh/docs/features/favorite' },
							{ text: '关注', link: '/zh/docs/features/follow' },
							{ text: '页数', link: '/zh/docs/features/pages' },
							{ text: '主题', link: '/zh/docs/features/theme' },
							{ text: '小工具', link: '/zh/docs/features/widgets' },
						]
					},
					{
						text: '技术文档', items: [
							{ text: '开放仓库', link: '/zh/docs/tech/' },
							{ text: '节点配置', link: '/zh/docs/tech/configuration' },
							{ text: '协议概述', link: '/zh/docs/tech/any-sync' },
							{ text: '网络配置', link: '/zh/docs/tech/anytype-heart' },
							{ text: '术语表', link: '/zh/docs/tech/glossary' },
							{ text: '项目概览', link: '/zh/docs/tech/overview' },
						]
					},
					{
						text: '管理员', items: [
							{ text: '创建实例', link: '/zh/docs/install' },
							{ text: '自定义表情', link: '/zh/docs/admin/emoji' },
							{ text: '设置CDN', link: '/zh/docs/admin/cdn' },
							{ text: '配置 Nginx', link: '/zh/docs/admin/nginx' },
							{ text: '推送', link: '/zh/docs/admin/push-docker-hub' },
							{ text: '常见问题', link: '/zh/docs/admin/troubleshooting' },
							{ text: 'Disabling the LTL/STL/GTL', link: '/zh/docs/tips/disable-timelines' },
							{ text: '更改默认反应', link: '/zh/docs/admin/default-reaction' },
							{ text: '静默', link: '/zh/docs/features/silence' },
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

