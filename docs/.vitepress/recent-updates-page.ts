// 导入所需的库和模块
import { App, createPage, Page } from '@vitepress/core'; // 从 @vitepress/core 中导入 App, createPage, Page 类型
import execa from 'execa'; // 导入 execa 库，用于执行 shell 命令

// 定义一个异步函数，用于获取文件的最后更新时间
const getUpdatedTime = async (
	filePath: string, // 文件路径
	cwd: string // 当前工作目录
): Promise<number> => {
	const { stdout } = await execa(
		'git', // 使用 git 命令
		['--no-pager', 'log', '-1', '--format=%at', filePath], // 获取文件的最后更新时间
		{
			cwd, // 设置当前工作目录
		}
	);

	return Number.parseInt(stdout, 10) * 1000; // 返回更新时间（以毫秒为单位）
}

// 定义一个异步函数，用于获取文件的提交者名称
const getComitterName = async (
	filePath: string, // 文件路径
	cwd: string // 当前工作目录
): Promise<string> => {
	const { stdout } = await execa(
		'git', // 使用 git 命令
		['--no-pager', 'log', '-1', '--format=%cn', filePath], // 获取文件的提交者名称
		{
			cwd, // 设置当前工作目录
		}
	);

	return stdout; // 返回提交者名称
}

// 定义一个异步函数，用于生成最近更新页面
export async function generateRecentUpdatesPage(app: App) {
	const cwd = app.dir.source(); // 获取源文件目录

	let content = ``; // 初始化内容为空字符串

	// 定义一个数组，用于存放带有元数据的页面
	let pagesWithMeta = [] as {
		updatedTime: number; // 更新时间
		comitterName: string; // 提交者名称
		page: Page; // 页面对象
	}[];

	// 遍历 app 中的所有页面
	for (const page of app.pages) {
		if (page.filePathRelative == null) continue; // 如果页面没有相对文件路径，则跳过

		// 使用 Promise.all 并发获取更新时间和提交者名称
		const [updatedTime, comitterName] = await Promise.all([
			getUpdatedTime(page.filePathRelative, cwd),
			getComitterName(page.filePathRelative, cwd),
		]);

		// 将带有元数据的页面添加到数组中
		pagesWithMeta.push({
			updatedTime, comitterName, page
		});
	}

	// 对带有元数据的页面数组进行排序（按更新时间降序）并截取前 20 个
	pagesWithMeta = pagesWithMeta
		.sort((a, b) => b.updatedTime - a.updatedTime)
		.slice(0, 20);

	// 遍历带有元数据的页面数组
	for (const pageWithMeta of pagesWithMeta) {
		const { updatedTime, comitterName, page } = pageWithMeta; // 解构出更新时间、提交者名称和页面对象

		if (page.filePathRelative == null) continue; // 如果页面没有相对文件路径，则跳过

		// 将页面信息添加到内容中
		content += `
<RouterLink class="mk-page" to="${page.path}">
	<header>${page.title}</header>
	<div>${page.frontmatter.description || page.excerpt}</div>
	<footer>${new Date(updatedTime).toString()}, by ${comitterName}</footer>
</RouterLink>
`;
	}

	// 遍历 app 中的所有页面
	for (let i = 0; i < app.pages.length; i++) {
		const page = app.pages[i]; // 获取当前页面
		// 如果页面内容中包含特殊标记 <!--[RECENT_UPDATES]-->
		if (page.content.includes('<!--[RECENT_UPDATES]-->')) {
			// 创建一个新的页面并替换特殊标记为最近更新的内容
			const updated = await createPage(app, {
				path: page.path,
				frontmatter: page.frontmatter,
				content: page.content.replace('<!--[RECENT_UPDATES]-->', content),
			});
			// 更新 app 中的页面内容和渲染后的内容
			app.pages[i].content = updated.content;
			app.pages[i].contentRendered = updated.contentRendered;
		}
	}
}
