---
description: "Channel where nots from the home timeline are streamed."
---

# 开放仓库

源码可以在我们的github上找到。

你可以在每个存储库的 `README.md` 文件中找到有关如何生成和运行解决方案的基本文档

我们主要存储库：

| Repo       | Description       |
| ---------- | ----------------- |
| [ocean-blog]() | 旨在创建高性能、端到端加密web应用程序的协议，以促进多个用户和设备之间的无缝协作 |
| [ocean-hub](https://github.com/WRXinYue/ocean-hub)  | ocean官方文档     |

## 先决条件

为确保兼容性，请使用 Go 版本 `1.19` 进行构建

您将需要一个MongoDB来运行Any-Sync Coordinator节点，以及一个与S3兼容的对象存储和Redis来运行Any-Sync File Node。

与 S3 兼容的解决方案之一是 [MinIO](https://min.io/docs/minio/linux/operations/install-deploy-manage/deploy-minio-single-node-single-drive.html)。

## 步骤

1. 决定您所需的网络拓扑结构以满足 `any-sync` 的要求。对于个人使用，一组协调器、同步节点和文件节点，每类一个，就足够了。
2. 设置 MongoDB、S3 兼容的对象存储和 Redis，并保存它们的属性以在配置中显示。您需要：
	* MongoDB：
		* 连接 URL
		* 数据库名称
	* S3 存储：
		* Endpoint（如果您选择了 S3 兼容的对象存储）
		* 区域名称
		* 配置文件
		* 存储桶名称
		* 凭证（请参阅 `aws-sdk-go` [文档](https://pkg.go.dev/github.com/aws/aws-sdk-go#section-readme)）
	* Redis：
		* 连接 URL
3. 你可以为将来的 `any-sync-*` 节点和 `anytype-heart` 创建配置文件。
	您可以使用 `any-sync-network` 工具为节点生成基本配置，或者您可以自己创建更复杂的配置（请参阅 [any-sync-network](https://github.com/anyproto/any-sync-tools) 以获取详细信息）。
	如果您决定使用 `any-sync-network` 工具，请运行以下命令并使用交互式 CLI 生成配置文件：

	```bash
	git clone https://github.com/anyproto/any-sync-tools.git
	cd any-sync-tools
	go install ./any-sync-network
	any-sync-network create
	```
4. 下载并构建[any-sync-coordinator](https://github.com/anyproto/any-sync-coordinator)、[any-sync-node](https://github.com/anyproto/any-sync-node)和[any-sync-filenode](https://github.com/anyproto/any-sync-filenode)。具体请参考每个仓库中的 README.md。
5. 使用适当的配置文件运行节点。如果您使用 `any-sync-network 工具生成了它们，请使用：
	* coordinator.yml 用于 any-sync-coordinator 节点，
	* sync_N.yml 用于每个 any-sync-nodes，
	* file_N.yml 用于每个 any-sync-filenodes。
6. 下载 `anytype-heart` 中间件库。使用您的网络配置为所需客户端构建它。如果您使用 `any-sync-network` 工具生成了它，请使用 `heart.yml`：

	```bash
	＃ 为桌面客户端构建并安装
	make install-dev-js ANY_SYNC_NETWORK=heart.yml
	```

	```bash
	＃ 为 iOS 客户端构建
	make build-ios ANY_SYNC_NETWORK=heart.yml
	```

	```bash
	＃ 为 Android 客户端构建
	make build-android ANY_SYNC_NETWORK=heart.yml
	```

	参看 `anytype-heart` [`README.md`](https://github.com/anyproto/anytype-heart#build-from-source) 以获取详细信息。

	最后一步！从源代码构建所需的客户端。有关更多详细信息，请参阅客户端仓库中的 `README.md`：

	- [anytype-ts](https://github.com/anyproto/anytype-ts)
	- [anytype-kotlin](https://github.com/anyproto/anytype-kotlin)
	- [anytype-swift](https://github.com/anyproto/anytype-swift)

## 条件

`any-sync` 网络是无需许可的。这意味着任何知道协调器节点的 IP 和端口的人都可以连接到它、创建新空间或下载现有的加密对象。空间内的数据始终是安全的，因为需要空间加密密钥才能阅读。节点既不存储这些加密密钥，也无法访问它们，也不能解密数据。欲了解更多信息，请参阅 [Any-Sync 概述协议](tech/any-sync)。

中间件库 `anytype-heart` 以及 Anytype 客户端 `anytype-ts`、`anytype-swift` 和 `anytype-kotlin` 使用的是 [Any Source Available License 1.0](https://networks.any.coop/) 授权。

