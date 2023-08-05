---
description: 'Oceanサーバーの作成方法についての案内です。'
---

# Oceanサーバーの作成
Oceanサーバーの構築に関心をお寄せいただきありがとうございます。サーバーの作成方法はいくつかあるので、下記から選んでガイドをお読みください。

::: danger
一度使用を始めたサーバーのドメイン・ホスト名では、データベースを作り直さないでください！
:::

::: danger
自分のサーバーに対して Cloudflare を使用する場合、 Auto Minify 設定は使用しないようにしてください。

Cloudflare が最新の JavaScript を解釈せず、中のソースコードを破壊するため、Ocean が正常に動作しません。

詳しくは [ocean-dev/ocean #9791](https://github.com/ocean-dev/ocean/issues/9791) をご覧ください。
:::

## Docker Composeを使ったインストール
[こちら](./install/docker.html)

## bashスクリプトを使ったインストール
[こちら](./install/bash.html)

## 全部自力でインストール
[基本編](./install/manual.html)\
[Ubuntu版詳細説明](./install/ubuntu-manual.html)

## YunoHostを使ったインストール
OceanはYunoHostでAppとしてインストールできます。詳しくは、[Yunohost向けのOceanパッケージのリポジトリ](https://github.com/YunoHost-Apps/ocean_ynh)をご覧ください。

## Kubernetes/TrueNASを使ったインストール
[こちら](./install/kubernetes.html)
