# 通过向导安装 BPB Panel

::: warning 免责声明
本文档是由社区成员创建的非官方中文文档，并非由 BPB Panel 官方团队开发或维护。文档内容基于原始法语文档翻译而来，仅供参考。如有任何差异，请以官方文档为准。
:::

<p align="center">
  <img src="/images/wizard.jpg">
</p>

## 简介

为了简化安装过程并防止用户在安装过程中出错，BPB Wizard 项目已经启动，它支持 Workers 和 Pages 两种安装方式。强烈建议使用这种方法进行安装。

<div class="custom-card">
<div class="card-title">📌 向导安装优势</div>
<div class="card-content">

- **简单快捷**：只需几分钟即可完成安装
- **自动配置**：自动设置所有必要的变量和 KV 命名空间
- **减少错误**：避免手动安装过程中的常见错误
- **支持多平台**：适用于 Windows、macOS、Linux 和 Android
- **无需技术知识**：不需要了解 Cloudflare Workers 或 Pages 的技术细节

</div>
</div>

## 第一步

使用这种方法，您只需要一个 Cloudflare 账户。如果您还没有账户，可以[在这里](https://dash.cloudflare.com/sign-up/)注册一个，并记得验证您的电子邮件。

## 第二步

如果您正在使用 VPN，请先断开连接。根据您的操作系统，从[这里](https://github.com/bia-pain-bache/BPB-Wizard/releases/latest)下载适合您系统的 zip 文件，解压并运行。

程序会首先登录到您的 Cloudflare 账户，然后返回到终端，询问一些与设置相关的问题。您可以使用默认设置，也可以输入您自己的值。最后，程序会在浏览器中打开面板，安装就完成了。

::: tip 提示
对于每个设置问题，程序已经为您生成了一个安全的默认值。您可以直接按 Enter 键使用默认值，也可以输入您自己的值。
:::

## Android 系统安装

如果您使用 Android 设备并安装了 Termux，只需在 Termux 中复制并运行以下代码即可安装 BPB Panel：

### ARM v8

```bash
curl -L -# -o BPB-Wizard.zip https://github.com/bia-pain-bache/BPB-Wizard/releases/latest/download/BPB-Wizard-linux-arm64.zip && unzip -o BPB-Wizard.zip && chmod +x ./BPB-Wizard-linux-arm64 && ./BPB-Wizard-linux-arm64
```

### ARM v7

```bash
curl -L -# -o BPB-Wizard.zip https://github.com/bia-pain-bache/BPB-Wizard/releases/latest/download/BPB-Wizard-linux-arm.zip && unzip -o BPB-Wizard.zip && chmod +x ./BPB-Wizard-linux-arm && ./BPB-Wizard-linux-arm
```

::: warning 重要提示
请确保从[官方源](https://github.com/termux/termux-app/releases/latest)下载并安装 Termux，从 Google Play 安装可能会导致问题。
:::

## 安装完成后

安装完成后，向导将在浏览器中打开您的面板 URL。您需要设置一个新密码并登录，然后就可以开始使用 BPB Panel 了。

## 故障排除

如果您在安装过程中遇到问题，请尝试以下解决方案：

1. 确保您已断开 VPN 连接
2. 检查您的网络连接是否稳定
3. 尝试使用不同的浏览器
4. 清除浏览器缓存并重试
5. 如果向导不起作用，您可以尝试[手动 Worker 安装](worker-installation)或[Pages 安装](pages-upload-installation)方法
