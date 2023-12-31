# 关于 Ocean Blog

Ocean Blog 是一个免费开放的分布式博客平台。它是基于一种思想进行设计的一套博客系统，主要用于的是知识的笔记的整理，并形成自己的知识库。其下包括：博客系统，原子性知识展示系统，AI答疑解惑系统，费曼学习系统，知识应用系统。


## 历史

Ocean Blog在创造开始的时候主要使用于学习笔记博客的建立的。

任何开发者也可以加入到Ocean Blog开发中，并遵循着原子性知识点的思想，进行扩展以及开发。

## 到底什么是原子性知识点？

原子性知识点，是由HypnosCicero(github ID)提出的一种衡量知识点的思想。主要思想是利用原子在物理世界的各种特性：不可在分性，基础性，可组合性；来描述一个知识点在某个领域中的一个状态。本质是某个领域的概念，不过这个概念必须是：不可再分的；是某个领域的最基础的；知识点之间能进行组合的；能迁移到其他领域的。具体的知识请参考这里<!--这里补充连接变化-->

::: tip
Ocean Blog为什么需要Ocean作为前缀，是因为这些庞杂的原子性知识组成了知识海洋。现实中海洋里的原子之间进行迁移,组合等作用。形成各种生命，从而形成各种各样的生态系统。而人类来自于海洋。我们团队名为Ocean，我们也是组成这个海洋的一部分。海洋还有包容万物的决心与能力，这同时表明了我们团队开源的态度，以及接受任何意见与建议的态度。
:::


## 永久开源
Ocean Blog主要是用于知识库的构建，目前最佳的实战是使用博客的系统，然后不断细化，并计算其原子知识点，从而形成个人的知识点库。而本系统可以进行不断的扩展，说不定在未来的视频中也可以做到这样不断细分视频，从而构建一个 讲解各个原子知识点的视频 的视频库。所以为了不断适应未来的不同的变化，Ocean Blog将永久开源，于个人，它能辅助你自学，将复杂的深奥的知识进行拆解成自己能理解的原子知识点，还能将其进行整理成为跨学科的最有效的工具；于人类文明而言，众多的原子知识进行解析重组，将会产生新的知识，从而推进整个人类文明进行进步。



## 加入我们||支持项目
如果你喜欢Ocean Blog，请支持这个项目。支持该项目可以通过多种方式完成，其中一些将在下面介绍。其中一些不需要编程技能，因此任何人都可以自由地以自己的方式支持Ocean Blog。我们一直在等你。

### 添加功能或修复错误
添加功能或修复错误 如果您拥有软件工程技能，则可以通过编辑其源代码为项目做出贡献。有关这方面的指南，请参阅[这里](https://github.com/Ocean-dev/Ocean/blob/develop/CONTRIBUTING.md).
<!--TODO 将连接地址进行更换-->

### 参与讨论
你可以通过分享你对新功能或现有功能的意见以及报告错误来做出贡献。此类讨论可以在[GitHub](https://github.com/Ocean-dev)或[论坛](https://forum.Ocean.io/)等上进行。
<!--TODO 将连接地址进行更换-->

### 翻译文本
 Ocean Blog 有多种语言版本（也称为 i18n，是国际化的缩写）。虽然原始语言通常是中文简体，但志愿者正在将Ocean Blog翻译成其他语言。帮助这项工作也是一种贡献形式。Ocean Blog使用名为[Crowdin来管理其翻译的服务。](https://crowdin.com/project/Ocean)
<!--TODO 更换地址-->

### 分享你的印象
除了反馈bug之外，也请大家分享一些积极的印象，比如你个人喜欢Ocean的哪些部分，或者Ocean中你觉得有趣的事情。这些都是开发者的动力，也算是对Ocean的间接支持。 项目。

## 经常问的问题
### 这个项目的目标是什么？
坦率地说，虽然这有点模糊，但 Ocean 的目标是成为一个广泛使用的通用平台。 与其他平台不同，Ocean 并没有基于特定的想法（例如反中心化）或愿景并以此为基础进行开发，因此在这方面它有点“漫无目的”。 但另一方面，由于不受特定方向的限制，这创造了灵活性。


### Ocean是由一家公司开发的吗？
No.Ocean 是由个人开发的，并未通过与任何特定公司的联系进行商业化。 开发成员一般都是志愿者。 此外，虽然有一些企业赞助商，但开发仍然以社区为中心。

### 我应该选择哪个服务器？
[您可以在此处找到（不完整）服务器列表。](../instances.md) 根据服务器的不同，其社区或中心主题（例如，喜欢某个节目）可能会有所不同，因此如果有一台服务器 适合您的兴趣，加入它可能是一个不错的选择。 除此之外，服务器大小、用户群、国家或口语、对管理团队的依赖或信任以及许多其他因素也可以作为标准。 然而，没有一个服务器可以作为 Ocean 的官方服务器。您也可以选择创建自己的新服务器。

一般来说，无论您加入哪个服务器，您仍然可以与所有其他服务器的用户连接。

### 如何创建自己的服务器？
感谢您有兴趣创建 Ocean 服务器。 目前2022年还没有专门的Ocean托管服务，因此创建新服务器需要一定的知识。 请参阅[此处](./install.md) 了解更多相关信息。

### Ocean使用什么样的技术？
随着Ocean开发的不断进展，它所使用的技术也发生了很大的变化。最开始，它使用MySQL + PHP + jQuery的组合，但目前使用以下技术。
- 服务器端：Node.js
- 数据库：PostgreSQL、Redis
- UI框架：Vue.js
- 编程语言：TypeScript

除此之外，还使用了源自 Ocean 的技术，例如 MFM 或 AiScript。

### 这是 Mastodon 的叉子吗？
No.Ocean 是一个与 Mastodon 或其他类似项目完全不同的项目。 它已经发展了很长时间了。但是，它是在Mastodon出现之后才成为一个分布式网络。 除了两个项目都实现了 ActivityPub 协议之外，两者之间没有任何关系。
