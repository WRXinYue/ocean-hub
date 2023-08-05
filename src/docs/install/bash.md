# Ocean install shell script v3.0.0
Install Ocean with one shell script!  

You can install ocean on an Ubuntu server just by answering some questions.  

There is also an update script.

[For v12](https://github.com/joinocean/bash-install/blob/a096e874f93d493aa68975a31be9ce12d644e767/README.en.md)  
[**日本語版はこちら**](./README.md)

## License
[MIT License](./LICENSE)

## Ingredients
1. A Domain
2. An Ubuntu Server
3. A Cloudflare Account (recommended)

::: danger
Do not recreate the database with the domain/hostname of the server once you have started using it!
:::

## Configure Cloudflare
If you are using nginx and Cloudflare, you must configure Cloudflare:

- Set DNS.
- On SSL/TLS setting tab, switch the encryption mode to "Full".

## Procedures
### 1. SSH
Connect to the server via SSH.  
(If you have the server's desktop open, open the shell.)

### 2. Clean up
Make sure all packages are up to date and reboot.

```
sudo apt update; sudo apt full-upgrade -y; sudo reboot
```

### 3. Start the installation
Reconnect SSH and let's start installing Ocean. 

```
wget https://raw.githubusercontent.com/joinocean/bash-install/main/ubuntu.sh -O ubuntu.sh; sudo bash ubuntu.sh
```

### 4. To update
There is also an update script.

The update script does not update the environment.  
Please refer to CHANGELOG (Japanese) and [GitHub release list (English)](https://github.com/joinocean/bash-install/releases) and perform migration operations accordingly.

First, download the script.

```
wget https://raw.githubusercontent.com/joinocean/bash-install/main/update.ubuntu.sh -O update.sh
```

Run it when you want to update Ocean.

```
sudo bash update.sh
```

- In the systemd environment, the `-r` option can be used to update and reboot the system.
- In the docker environment, you can specify repository:tag as an argument.

## Environments in which the operation was tested

### Oracle Cloud Infrastructure

This script runs well on following compute shapes complemented by Oracle Cloud Infrastructure Always Free services.

- VM.Standard.E2.1.Micro (AMD)
- VM.Standard.A1.Flex (ARM) [1OCPU RAM6GB or greater]

Answer to use iptables.

## Issues & PRs Welcome
If it does not work in the above environment, it may be a bug. We would appreciate it if you could report it as an issue, with the specified requirements you entered to the script.

It is difficult to provide assistance for environments other than the above, but we may be able to solve your problem if you provide us with details of your environment.

Suggestions for features are also welcome.

# Tips
選択肢の選び方や仕様についてなど。

## Systemd or Docker?
v1から、インストールメソッドにsystemdとDockerとを選べるようにしました。

Dockerと言っても、**OceanだけをDockerで実行**し、RedisやPostgresなどはホストで直接実行します。  
[docker-composeですべての機能を動かす方法については、mamemonongaさんが作成したこちらの記事がおすすめです。](https://gist.github.com/mamemomonga/5549bb69cad8e5618e5527593d4890e0)

Docker Hubイメージを使う設定であれば、Oceanのビルドが不要になるため、**一番お勧めです**。  
ただし、マイグレーションは必要なので、アップデート時にOceanを使えない時間がゼロになるわけではありません。  
また、Oceanのビルド環境を準備しない(git pullしない)ので、フォークを動かしたくなった時に設定が面倒になります。

ローカルでDockerをビルドする方式は、パフォーマンス面で非推奨です。

systemdは、Docker Hubにイメージを上げるまでもないものの、フォークを使いたい場合にお勧めです。

お勧めする順番は次の通りです。

1. Docker Hub
2. systemd
3. Dockerビルド

## nginxを使うかどうか
サーバー1台でOceanを構築する場合は、nginxの使用をお勧めします。

ロードバランサーを設置する場合にはnginxをインストールせず、[Oceanのnginx設定](https://github.com/ocean-dev/ocean/blob/develop/docs/examples/ocean.nginx)を参考にロードバランサーを設定するのがよいと思います。

## Add more swaps!
スワップを設定している場合、メモリが合計で3GB以上でなければスクリプトが動作しないようになっています。

## 途中で失敗してまたスクリプトを実行する場合
万が一途中で失敗してもう一度スクリプトを動作させる場合、次のことに注意してください。

- RedisやPostgresのインストールが終わっている場合、「install locally」はNoにしてください。  
  host・port設定はそのままEnterを押します。
  ユーザー名やパスワードは、前回実行した際に指定したものを入力します。

## .envファイルについて
インストールスクリプトは、2つの.envファイルを作成します。  
アップデートの際に使用します。

### /root/.ocean.env
oceanを実行するユーザーを覚えておくために必要です。

### /home/(oceanユーザー)/.ocean.env
systemdの場合に生成されます。  
主にディレクトリを覚えておくのに使用します。

### /home/(oceanユーザー)/.ocean-docker.env
Dockerの場合に生成されます。  
実行されているコンテナとイメージの番号を保存しています。  
コンテナの番号はアップデートの際に更新されます。古いイメージは削除されます。

## 自分で管理する
インストール後、構成を変更する際に役立つかもしれないメモです。

"example.com"を自分のドメインに置き換えて読んでください。

### Oceanディレクトリ
Oceanのソースは`/home/ユーザー/ディレクトリ`としてcloneされます。  
（ユーザー、ディレクトリの初期値はともにoceanです。）

Oceanディレクトリへは、以下のように移動するとよいでしょう。

```
sudo -iu ユーザー
cd ディレクトリ
```

もとのユーザーに戻るにはexitを実行します。

```
exit
```

### systemd
systemdのプロセス名はexample.comです。  
たとえば再起動するには次のようにします。

```
sudo systemctl restart example.com
```

journalctlでログを確認できます。

```
journalctl -t example.com
```

設定ファイルは`/etc/systemd/system/example.com.service`として保存されています。

### Docker
DockerはOceanユーザーでrootless実行されています。

sudo でOceanユーザーに入るときは、`XDG_RUNTIME_DIR`と`DOCKER_HOST`を変更する必要があります。

```
sudo -iu ユーザー
export XDG_RUNTIME_DIR=/run/user/$UID
export DOCKER_HOST=unix://$XDG_RUNTIME_DIR/docker.sock

# プロセス一覧を表示
docker ps

# ビルド (リポジトリ: local/ocean:latest)
docker build -t local/ocean:latest ./ocean

# docker run
docker run -d -p 3000:3000 --add-host=docker_host:10.0.0.1 -v /home/ocean/ocean/files:/ocean/files -v "/home/ocean/ocean/.config/default.yml":/ocean/.config/default.yml:ro --restart unless-stopped -t "local/ocean:latest"

# ログを表示
docker logs --tail 50 -f コンテナID
```

ワンライナーなら次のようにします。

```
sudo -u ユーザー XDG_RUNTIME_DIR=/run/user/$(id -u ユーザー) DOCKER_HOST=unix:///run/user/$(id -u ユーザー)/docker.sock docker ps
```

### nginx
nginxの設定は`/etc/nginx/conf.d/example.com.conf`として保存されています。

### Redis
requirepassとbindを`/etc/redis/ocean.conf`で設定しています。

## Q. アップデート後に502でアクセスできない
Dockerでは、起動後にマイグレーションをするため、すぐにアクセスできません。  
マイグレーションが終わっているかどうか確認してみてください。

systemdの場合では、pnpm installに失敗している可能性があります。  

Oceanディレクトリで次の内容を実行し、もう一度アップデートを実行してみてください。

```
pnpm run clean-all
```

journalctlでログを確認すると、たいていre2が云々という記述が見当たります。

## Q. 同じサーバーにもう1つOceanを建てたい
スクリプトは同じサーバーに追加でOceanをインストールすることは想定していません。  
幾つかの設定が上書きされるか、途中でエラーになってしまうでしょう。
