---
description: 'このガイドではOceanのインストール・セットアップ方法について解説します。'
---

Ocean構築の手引き
================================================================

このガイドではOceanのインストール・セットアップ方法について解説します。

::: danger
一度使用を始めたサーバーのドメイン・ホスト名では、データベースを作り直さないでください！
:::

::: tip 前提条件
以下のソフトウェアがインストール・設定されていること
- **[Node.js](https://nodejs.org/en/)** (20.4.x以上)
- **[PostgreSQL](https://www.postgresql.org/)** (15以上)
- **[Redis](https://redis.io/)**
- **[FFmpeg](https://www.ffmpeg.org/)**

Debian/Ubuntuをお使いであれば、`build-essential`パッケージをインストールしておくと良いです。

corepackが有効化されていること
```sh
sudo corepack enable
```
:::

ユーザーの作成
----------------------------------------------------------------
Oceanはrootユーザーで実行しない方がよいため、代わりにユーザーを作成します。
Debianの例:

```sh
adduser --disabled-password --disabled-login ocean
```

Oceanのインストール
----------------------------------------------------------------
```sh
sudo -iu ocean
git clone --recursive https://github.com/ocean-dev/ocean.git
cd ocean
git checkout master
git submodule update --init
NODE_ENV=production pnpm install --frozen-lockfile
```

設定
----------------------------------------------------------------
設定サンプルの`.config/example.yml`をコピーし、`default.yml`にリネームします。

```sh
cp .config/example.yml .config/default.yml
```

`default.yml` をファイル内の指示に従って編集します。

ビルドと初期化
----------------------------------------------------------------
次のコマンドでOceanのビルドとデータベースの初期化を行います。
これにはしばらく時間がかかります。

```sh
NODE_ENV=production pnpm run build
pnpm run init
```

起動
----------------------------------------------------------------
お疲れ様でした。以下のコマンドでOceanを起動できます。

```sh
NODE_ENV=production pnpm run start
```

GLHF✨

:::: details systemdを用いた管理

systemdサービスのファイルを作成

`/etc/systemd/system/ocean.service`

エディタで開き、以下のコードを貼り付けて保存:

``` ini
[Unit]
Description=Ocean daemon

[Service]
Type=simple
User=ocean
ExecStart=/usr/bin/npm start
WorkingDirectory=/home/ocean/ocean
Environment="NODE_ENV=production"
TimeoutSec=60
StandardOutput=journal
StandardError=journal
SyslogIdentifier=ocean
Restart=always

[Install]
WantedBy=multi-user.target
```

::: warning
CentOSで1024以下のポートを使用してOceanを使用する場合は`ExecStart=/usr/bin/sudo /usr/bin/npm start`に変更する必要があります。
:::

systemdを再読み込みしoceanサービスを有効化

```sh
sudo systemctl daemon-reload
sudo systemctl enable ocean
```

oceanサービスの起動

```sh
sudo systemctl start ocean
```

::: tip
`systemctl status ocean`と入力すると、サービスの状態を調べることができます。
:::
::::

## Oceanのアップデート方法
::: warning
アップデートの際は必ず[リリースノート](https://github.com/ocean-dev/ocean/blob/master/CHANGELOG.md)を確認し、変更点や追加で必要になる作業の有無(ほとんどの場合ありません)を予め把握するようにしてください。
:::

masterをpullし直し、インストール、ビルド、データベースのマイグレーションを行います:

```sh
git checkout master
git pull
git submodule update --init
NODE_ENV=production pnpm install --frozen-lockfile
NODE_ENV=production pnpm run build
pnpm run migrate
```

アップデート内容、およびデータベースの規模によっては時間がかかることがあります。

アップデートが終わり次第、Oceanプロセスを再起動してください。

```sh
sudo systemctl restart ocean
```

::: tip
ビルドや起動時にエラーが発生した場合は、以下のコマンドをお試しください:
- `pnpm run clean`または`pnpm run clean-all`
- `pnpm rebuild`
:::
