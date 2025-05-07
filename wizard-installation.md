# 使用向导安装

::: warning 免责声明
本文档是由社区成员创建的非官方中文文档，并非由 BPB Panel 官方团队开发或维护。文档内容基于原始法语文档翻译而来，仅供参考。如有任何差异，请以官方文档为准。
:::

本文档将指导您如何使用向导快速安装 BPB Panel。

## 什么是向导安装？

向导安装是一种简化的安装方法，它通过一个用户友好的界面引导您完成整个安装过程。这种方法特别适合那些不熟悉 Cloudflare Workers 或 Pages 的用户。

![向导](/images/wizard.jpg)

## 准备工作

在开始之前，您需要：

1. 一个 Cloudflare 账户
2. 一个 GitHub 账户（如果您选择 Pages 安装方式）

## 步骤 1：访问安装向导

访问 [BPB Panel 安装向导](https://bpb-wizard.pages.dev/)。

## 步骤 2：选择安装方式

在向导界面中，您将看到两种安装选项：

1. **Worker 安装**：直接在 Cloudflare Workers 上安装
2. **Pages 安装**：通过 GitHub 和 Cloudflare Pages 安装

根据您的需求选择合适的安装方式。

## 步骤 3：按照向导指示操作

### Worker 安装

如果您选择 Worker 安装，向导将引导您完成以下步骤：

1. 登录您的 Cloudflare 账户
2. 创建一个新的 Worker
3. 上传 Worker 代码
4. 设置必要的变量和 KV 命名空间
5. 部署 Worker

### Pages 安装

如果您选择 Pages 安装，向导将引导您完成以下步骤：

1. 登录您的 GitHub 账户
2. Fork BPB-Worker-Panel 仓库
3. 连接 GitHub 到 Cloudflare
4. 配置部署设置
5. 设置必要的变量和 KV 命名空间
6. 部署应用程序

## 步骤 4：完成安装

安装完成后，向导将显示您的面板 URL。您可以通过该 URL 访问您的 BPB Panel。

系统会要求您设置新密码并登录，安装就完成了。

## 向导的优势

使用向导安装有以下优势：

1. **简单易用**：无需深入了解 Cloudflare Workers 或 Pages 的技术细节
2. **步骤清晰**：向导提供了清晰的步骤和说明
3. **可视化界面**：通过可视化界面完成安装，减少错误
4. **快速部署**：比手动安装更快速
5. **自动配置**：自动设置必要的变量和 KV 命名空间

## 故障排除

如果您在使用向导过程中遇到问题，请尝试以下解决方案：

1. **刷新页面**：有时简单地刷新页面可以解决问题
2. **清除浏览器缓存**：清除浏览器缓存并重试
3. **使用不同的浏览器**：尝试使用不同的浏览器
4. **检查网络连接**：确保您的网络连接稳定
5. **手动安装**：如果向导不起作用，您可以尝试 [Worker 安装](worker-installation) 或 [Pages 安装](pages-upload-installation) 方法

## 更新面板

当有新版本发布时，您需要手动更新面板。更新方法取决于您的安装方式：

- **Worker 安装**：按照 [Worker 更新指南](worker-installation#更新面板) 操作
- **Pages 安装**：按照 [Pages 更新指南](pages-upload-installation#更新面板) 操作

## 结论

向导安装是一种简单、快速的方法，适合大多数用户。如果您是初学者或不想处理技术细节，强烈推荐使用这种方法。

如果您需要更多控制或自定义选项，可以考虑使用 [Worker 安装](worker-installation) 或 [Pages 安装](pages-upload-installation) 方法。
