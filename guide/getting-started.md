# 快速上手

本指南将引导你快速安装和运行 ALLinSSL。

## 系统要求

*   操作系统：Linux (推荐 CentOS 7+, Ubuntu 18.04+, Debian 9+) 
*   硬件：至少 1 核 CPU, 512MB RAM, 1GB 可用磁盘空间
*   网络：需要连接互联网以下载依赖和申请证书

## 安装

我们推荐使用 二进制包 进行安装，这是最快捷方便的方式。

### 使用二进制安装命令 (推荐)

```bash
curl -sSO http://download.allinssl.com/install_allinssl.sh && bash install_allinssl.sh allinssl
```
### 备用安装命令

```bash
curl -sSO https://cnb.cool/allinssl/install.sh/-/git/raw/main/install_allinssl.sh && bash install_allinssl.sh allinssl
```

### 其他安装方式
*   **源码编译:** [https://github.com/allinssl/allinssl/blob/1.0.1/README.md]
*   **Docker:** 复制以下命令直接安装，用户名：`allinssl`    密码：`allinssldocker`    安全入口：`allinssl`
```bash
docker run -itd \
  --name allinssl \
  -p 7979:8888 \
  -v /www/allinssl/data:/www/allinssl/data \
  -e ALLINSSL_USER=allinssl \
  -e ALLINSSL_PWD=allinssldocker \
  -e ALLINSSL_URL=allinssl \
  allinssl/allinssl:latest
```

## 重要提醒

如果您安装了安全软件，请在安全软件中添加 `/usr/bin/allinssl`和`/www/allinssl/allinssl` 的信任，否则可能会导致 ALLinSSL 无法正常运行。

* 如果安装了宝塔面板并且安装了系统加固插件，请在系统加固插件中添加 `/usr/bin/allinssl` 和 `/www/allinssl/allinssl` 的信任。或者临时关闭系统加固插件，安装完成后重新开启。

## 访问系统

假如使用二进制方式安装完成后，终端界面会显示 ALLinSSL 的登录信息，请妥善保存。如图：

![安装完成](/images/install_success.png)

## 下一步

*   了解 [目标用户](./who-is-it-for.md)，看看 ALLinSSL 如何帮助不同角色的用户。
*   探索 [仪表盘](../features/dashboard.md) 功能。
*   开始创建你的第一个 [自动化部署流水线](../features/automation-workflows.md)。
