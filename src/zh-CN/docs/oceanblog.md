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


## Always Open-Source
Misskey has always been, and will always be, open source.Open source means, simply speaking, <b>making the source code of software (a program) publicly available</b>.This also includes being able to adjust or redistribute the source code in its definition. The entirety of Misskey's source code is [being licensed](https://github.com/misskey-dev) under an open-source license called [AGPL](https://github.com/misskey-dev/misskey/blob/develop/LICENSE), which means anyone can freely inspect, use, adjust, change or redistribute as they see fit. Open source has many merits, including allowing anyone being able to make changes as they like, to make sure the code does not include any harmful components and being able to easily participate in its development. For realizing the distributed nature of Misskey, this concept of open source is indispensable. Using the same example as before, most profit-oriented services like Twitter, Facebook etc. are not open source.

::: tip
Technically speaking, Misskey's source code is being managed via Git, and its repository is being hosted at [GitHub.](https://github.com/misskey-dev)
:::

## Joining development and supporting the project
If you like Misskey, please support the project.Supporting the project can be done in many ways, with some of them introduced below.Some of these do not require programming skills, so anyone can feel free to support Misskey their own way.We're always waiting for you.

### Adding features or fixing bugs
If you possess software engineering skills, you can contribute to the project through editing its source code. For guidelines regarding this, please see [here](https://github.com/misskey-dev/misskey/blob/develop/CONTRIBUTING.md).

### Participating in discussions
You can contribute by sharing your opinion on new or existing features, as well as by reporting bugs. Such discussions can be held at [GitHub](https://github.com/misskey-dev) or the [Forums](https://forum.misskey.io/) etc.

### Translating text
Misskey is available in many languages (also called i18n, which is an abbreviation for Internationalization).While the original language is generally japanese, volunteers are translating Misskey into other languages. Helping out with this translation work is also a form of contributing. Misskey uses a service called [Crowdin to manage its translations.](https://crowdin.com/project/misskey)

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
