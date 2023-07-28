# 关于 Ocean Blog

Ocean Blog 是一个免费开放的分布式博客平台。它是基于一种思想进行设计的一套博客系统，主要用于的是知识的笔记的整理，并形成自己的知识库。其下包括：博客系统，原子性知识展示系统，AI答疑解惑系统，费曼学习系统，知识应用系统。


## 历史

Ocean Blog在创造开始的时候主要使用于学习笔记博客的建立的。

任何开发者也可以加入到Ocean Blog开发中，并遵循着原子性知识点的思想，进行扩展以及开发。

## 到底什么是原子性知识点？

原子性知识点，是由HpnosCicero(github ID)提出的一种衡量知识点的思想。主要思想是利用原子在物理世界的各种特性：不可在分性，基础性，可组合性；来描述一个知识点在某个领域中的一个状态。本质是某个领域的概念，不过这个概念必须是：不可再分的；是某个领域的最基础的；知识点之间能进行组合的；能迁移到其他领域的。

::: tip
Ocean Blog为什么需要Ocean作为前缀，是因为这些庞杂的原子性知识组成了知识海洋。现实中海洋里的原子之间进行迁移,组合等作用。形成各种生命，从而形成各种各样的生态系统。而人类来自于海洋。我们团队名为Ocean，我们也是组成这个海洋的一部分。海洋还有包容万物的决心与能力，这同时表明了我们团队开源的态度，以及接受任何意见与建议的态度。
:::


## 永久开源
Ocean Blog主要是用于知识库的构建，目前最佳的实战是使用博客的系统，然后不断细化，并计算其原子知识点，从而形成个人的知识点库。而本系统可以进行不断的扩展，说不定在未来的视频中也可以做到这样不断细分视频，从而构建一个 讲解各个原子知识点的视频 的视频库。所以为了不断适应未来的不同的变化，Ocean Blog将永久开源，于个人，它能辅助你自学，将复杂的深奥的知识进行拆解成自己能理解的原子知识点，还能将其进行整理成为跨学科的最有效的工具；于人类文明而言，众多的原子知识进行解析重组，将会产生新的知识，从而推进整个人类文明进行进步。



## 加入我们||支持项目
如果你喜欢Ocean Blog，请支持这个项目。支持该项目可以通过多种方式完成，其中一些将在下面介绍。其中一些不需要编程技能，因此任何人都可以自由地以自己的方式支持Ocean Blog。我们一直在等你。

### 添加功能或修复错误
添加功能或修复错误 如果您拥有软件工程技能，则可以通过编辑其源代码为项目做出贡献。有关这方面的指南，请参阅[这里](https://github.com/misskey-dev/misskey/blob/develop/CONTRIBUTING.md).
<!--TODO 将连接地址进行更换-->

### 参与讨论
你可以通过分享你对新功能或现有功能的意见以及报告错误来做出贡献。此类讨论可以在[GitHub](https://github.com/misskey-dev)或[论坛](https://forum.misskey.io/)等上进行。
<!--TODO 将连接地址进行更换-->

### 翻译文本
 Ocean Blog 有多种语言版本（也称为 i18n，是国际化的缩写）。虽然原始语言通常是中文简体，但志愿者正在将Ocean Blog翻译成其他语言。帮助这项工作也是一种贡献形式。Ocean Blog使用名为[Crowdin来管理其翻译的服务。](https://crowdin.com/project/misskey)
<!--TODO 更换地址-->

### Sharing your impressions
Besides reporting bugs, please also feel free to share positive impressions such as which parts of Misskey you personally like, or things about Misskey that you find fun.As things like these serve as motivation for the developers, it also counts as indirect support for the project.

### Increasing the number of Misskists
"Misskist" refers to the people using Misskey. By spreading the word about Misskey through introducing it to your acquaintances, the number of Misskists may increase, which serves as motivation for the developers.

### Making donations
[Please take a look here](./donate.md)

## Frequently Asked Questions
### What is this project aiming to achieve?
To put it bluntly, while this is a bit vague, Misskey is aiming to be a widely-used all-purpose platform. Unlike other platforms, Misskey is not grounded in a specific idea (for example, anti-centralization) or vision and being developed with that in mind, so it's a bit "aimless" in this respect. On the other hand though, this creates a flexibility due to not being bound by a specific direction to go towards.


### Is Misskey being developed by a company?
No.Misskey is being developed by an individual person and not commercialized through connection with any particular company. Development members are generally volunteers. Additionally, while there are some corporate sponsors, development is still centered around the community.

### Who is managing Misskey?
Due to the distributed nature of Misskey, each individual server has their own administration.Therefore, not all of Misskey is managed by one individual person or company. This means that, as the development team does not control individual servers, for management-related questions you should contact your server's administration instead. You can verify who is managing your individual server on [this page](/about). If you were to create a server, then you would also become its administrator.

### Which server should I choose?
[You can find an (incomplete) list of servers here.](../instances.md) Depending on the server, its community or central theme (for example, liking a show) may vary, so if there is a server that suits your interests, joining it would likely be a good choice. Besides that, server size, userbase, country or spoken language, reliance or trust in the administration team and many other things can also serve as criteria. There is however no single server that serves as the official server of Misskey.You also have the choice of creating a new server of your own.

Generally speaking, no matter which server you join, you will still be able to connect with users from all other servers.

### How can I create my own server?
Thank you for having an interest in creating a Misskey server. In the current year of 2022 there is no specialized Misskey hosting service, so creating a new server requires a certain amount of knowledge. Please see [here](./install.md) for more information regarding this.

### What kind of technology does Misskey use?
As development on Misskey progressed, the technology it has used has changed greatly.In the beginning, it used a combination of MySQL + PHP + jQuery, but currently uses the following.
- Server-side: Node.js
- Database: PostgreSQL, Redis
- UI Framework: Vue.js
- Programming language: TypeScript

In addition to this, from Misskey derived technology such as MFM or AiScript are also being used.

### Is this a fork of Mastodon?
No.Misskey is a project completely different from Mastodon or other alike projects. It has been in development for a long time already.However, it only became a distributed network after the appearance of Mastodon. Besides both projects implementing the ActivityPub protocol, there is no relation between the two.

### Are there any apps for iOS / Android available?
While no official Misskey app for either OS exists, there are several third-party applications. For details, please check [here](./apps).

However, functionality of third-party applications will inevitably lag behind the official Web client, so unless you really want to use a native application, we recommend the official Web client instead. As the Misskey Web client supports PWA, it is also possible to make it act as if it was a native application instead. For details regarding this, please check [here](todo).

### Where can I download Misskey's logo or icon?
Please refer to the [assets collection](../appendix/assets.html).

### Who's that cute cat-eared girl that you see sometimes?
It's Misskey's guardian deity, Ai.(They called Ai cute, yay!)
<div class="info">ℹ️ To read more about Ai, check <a href="https://xn--931a.moe/" target="_blank">here</a> (Japanese-only).</div>
