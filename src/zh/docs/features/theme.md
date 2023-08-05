# 主题

您可以通过应用主题来更改 Missky 客户端的外观和风格。

## 主题设置

设置 > 主题

## 创建主题

主题对象代码是使用 JSON5 编写的。
该主题具有如下所示的对象类型。

``` js
{
	id: '17587283-dd92-4a2c-a22c-be0637c9e22a',

	name: 'Danboard',
	author: 'syuilo',

	base: 'light',

	props: {
		accent: 'rgb(218, 141, 49)',
		bg: 'rgb(218, 212, 190)',
		fg: 'rgb(115, 108, 92)',
		panel: 'rgb(236, 232, 220)',
		renote: 'rgb(100, 152, 106)',
		link: 'rgb(100, 152, 106)',
		mention: '@accent',
		hashtag: 'rgb(100, 152, 106)',
		header: 'rgba(239, 227, 213, 0.75)',
		navBg: 'rgb(216, 206, 182)',
		inputBorder: 'rgba(0, 0, 0, 0.1)',
	},
}

```

* `id` ...唯一的主题 ID。 建议使用 UUID。
* `name` ... 主题名称
* `author` ...主题作者
* `desc` ... 主题描述（对象）
* `base` ...浅色或深色主题
	* 使用“light”表示浅色主题，使用“dark”表示深色主题。
	* 主题继承此处设置的基本主题。
* `props` ...主题样式定义。 在以下各节中进行了解释。

### 主题风格定义

在“props”中定义主题样式。
键是 CSS 变量的名称，值指定内容。
此外，这个“props”对象继承自基本主题。
如果该主题的“base”为“light”，则基本主题为 [_light.json5]；如果“dark”，则为 [_dark.json5]。
也就是说，如果该主题中没有名为“panel”的“props”键，则将其设置为基本主题中的“panel”。

[_light.json5]：https://github.com/ocean-dev/ocean/blob/develop/packages/frontend/src/themes/_light.json5
[_dark.json5]：https://github.com/ocean-dev/ocean/blob/develop/packages/frontend/src/themes/_dark.json5

#### 值语法

* 颜色用十六进制表示
	* 例如："#00ff00
* 用 `rgb(r, g, b)` 格式表示的颜色
	* 例如：`rgb(0, 255, 0)`
* 包含用 `rgb(r, g, b, a)` 格式表示的阿尔法/透明度值的颜色
	* 例如：`rgba(0, 255, 0, 0.5)`
* 其他键值参考
	* `@{key name}` 是对另一个键值的引用。将 `{key name}` 替换为您希望引用的键的名称。
	* 例如：`@panel
* 常量（下文将讨论）引用
	* `${constant name}` 是对一个常量的引用。将 `{constant name}` 替换为您要引用的常量名称。
	* 例如：`$main
* 函数（将在下文讨论）
	* `：{函数名}<{参数}<{颜色}`

#### 常量

当你有一些值不想作为 CSS 变量输出，但又想用作其他 CSS 变量的值时，常量就派上用场了。"我不想把它作为 CSS 变量输出，但我想把它用作其他 CSS 变量的值。"当你有一些值不想作为 CSS 变量输出，但又想用作其他 CSS 变量的值时，常量就派上用场了。

#### 函数

WIP
