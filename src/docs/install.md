# Create your own Ocean instance
Thank you for your interest in building a Ocean instance 🚀
There are several ways to create an instance, so please choose one below and read the guide.

::: danger
Do not recreate the database with the domain/hostname of the server once you have started using it!
:::

::: danger
If you use Cloudflare for your own server, do not use the Auto Minify setting.

Ocean will not work properly because Cloudflare will not interpret the latest JavaScript and will break the source code inside.

See also: [ocean-dev/ocean #9791](https://github.com/ocean-dev/ocean/issues/9791)
:::

## Using Docker
[See here](./install/docker.html)

## Using Bash Script
[See here](./install/bash.html)

## Manually
[See here](./install/manual.html)

## Using Yunohost
Ocean can be installed as an App on YunoHost. For more information see [the repository of the Ocean package for YunoHost](https://github.com/YunoHost-Apps/ocean_ynh).

## Using Kubernetes/TrueNAS Scale
[See here](./install/kubernetes.html)
