# 常见问题

::: warning 免责声明
本文档是由社区成员创建的非官方中文文档，并非由 BPB Panel 官方团队开发或维护。文档内容基于原始法语文档翻译而来，仅供参考。如有任何差异，请以官方文档为准。
:::

本文档收集了关于 BPB Panel 的常见问题和解答。

## 基本问题

### BPB Panel 是什么？

BPB Panel 是一个基于 Cloudflare Workers 的代理服务器，提供了友好的图形用户界面，使您能够轻松管理和配置您的代理设置。它支持多种协议、Fragment 技术、Warp 集成以及丰富的自定义选项。

### BPB Panel 是免费的吗？

是的，BPB Panel 完全免费。它基于 Cloudflare 的免费计划，您无需支付任何费用即可使用所有功能。

### 我需要技术知识才能使用 BPB Panel 吗？

基本使用不需要深厚的技术知识。安装过程已经尽可能简化，特别是使用[向导安装](wizard-installation)方法。但是，了解一些关于代理、协议和网络的基本概念会对您有所帮助。

## 安装问题

### 我应该选择哪种安装方法？

BPB Panel 提供三种安装方法：

1. **[Worker 安装](worker-installation)**：直接在 Cloudflare Workers 上安装，适合希望快速部署的用户。
2. **[Pages 安装](pages-upload-installation)**：通过 GitHub 和 Cloudflare Pages 安装，适合希望自动更新和更好管理的用户。
3. **[向导安装](wizard-installation)**：通过用户友好的界面引导您完成安装过程，适合初学者。

如果您是初学者，建议使用向导安装。如果您希望更好地控制和管理，可以选择 Pages 安装。如果您希望快速部署，可以选择 Worker 安装。

### 安装过程中遇到错误怎么办？

如果您在安装过程中遇到错误，请检查以下几点：

1. 确保您已正确设置所有必要的变量（UUID 和 TR_PASS）
2. 确保您已创建并绑定 KV 命名空间，且变量名为 `kv`
3. 检查部署日志，查看是否有任何错误消息
4. 尝试重新部署应用程序

如果问题仍然存在，您可以在 [GitHub Issues](https://github.com/bia-pain-bache/BPB-Worker-Panel/issues) 上寻求帮助。

### 如何更新 BPB Panel？

更新方法取决于您的安装方式：

- **Worker 安装**：下载最新的 Worker 代码，删除旧文件，上传新文件，然后部署。
- **Pages 安装**：同步您的 GitHub fork 与原始仓库，Cloudflare Pages 将自动检测更改并重新部署。
- **向导安装**：根据您选择的安装方式（Worker 或 Pages）按照相应的更新指南操作。

## 使用问题

### 如何访问面板？

假设您的 Worker 或 Pages 名称为 `worker-polished-leaf-d022`，您可以通过以下 URL 访问面板：

```
https://worker-polished-leaf-d022.workers.dev/panel
```

### 忘记密码怎么办？

如果您忘记了密码，您可以通过修改 KV 存储来重置密码：

1. 登录您的 Cloudflare 账户
2. 转到 Workers & Pages > KV
3. 选择您的 KV 命名空间
4. 删除名为 `password` 的键
5. 重新访问面板，系统会要求您设置新密码

### 为什么我的配置无法连接？

如果您的配置无法连接，请检查以下几点：

1. 确保您的客户端应用程序已更新到最新版本
2. 检查您的网络环境，某些网络可能会阻止特定端口或协议
3. 尝试使用不同的协议或端口
4. 如果您使用 Fragment，确保您的 Fragment 设置适合您的网络环境
5. 检查您的 DNS 设置，确保使用推荐的 DNS 服务器

### 如何选择最佳配置？

BPB Panel 提供了多种配置类型，您可以根据您的需求选择：

1. **Normal**：基本配置，适合大多数用户
2. **Full Normal**：应用了所有面板设置的配置，推荐大多数用户使用
3. **Fragment**：使用 Fragment 技术的配置，适合在网络受限的环境中使用
4. **Warp**：使用 Cloudflare Warp 的配置，提供更稳定的连接
5. **Warp PRO**：优化的 Warp 配置，适合特定网络环境

建议您尝试不同类型的配置，看哪种在您的网络环境中表现最佳。

## 技术问题

### 什么是 Fragment？

Fragment 是一种网络技术，它将数据包分割成更小的片段，以绕过某些网络限制和检测。在某些网络环境中，Fragment 可以提高连接质量和稳定性。

### 什么是 Warp？

Warp 是 Cloudflare 提供的一项服务，它使用 WireGuard 协议提供安全、快速的连接。BPB Panel 集成了 Warp 功能，使您能够通过 Cloudflare 的网络路由您的流量。

### 如何固定 IP 地址？

BPB Panel 提供了两种方法来固定 IP 地址：

1. **设置代理 IP**：您可以在面板中设置一个或多个代理 IP，这样您在 Cloudflare 网站上的 IP 将保持不变。
2. **使用链式代理**：您可以设置一个外部代理（如 VLESS、Socks 或 Http），所有流量都将通过该代理路由，从而固定您的 IP。

详细说明请参阅 [使用指南](configuration#1-2-代理-ip-设置) 和 [链式代理设置](configuration#1-3-链式代理设置)。

### 如何优化 DNS 设置？

BPB Panel 默认使用 Google DOH 作为远程 DNS，Google DNS 作为本地 DNS。这对大多数用户来说已经足够好，但您可以根据您的网络环境进行调整：

1. 避免使用 Cloudflare DNS（1.1.1.1）作为远程 DNS，因为它可能会增加延迟
2. 考虑使用其他 DOH 或 DOT 服务，如 AdGuard DNS 或 Quad9
3. 如果您的网络不支持 IPv6，可以在设置中禁用 IPv6

详细说明请参阅 [DNS 服务器设置](configuration#dns-服务器)。

## 其他问题

### BPB Panel 是否安全？

BPB Panel 基于 Cloudflare 的可靠基础设施，提供安全的连接。它支持 TLS 加密，并允许您配置各种安全选项。但是，请记住，任何代理服务的安全性都取决于您如何使用它和配置它。

### 我可以分享我的配置吗？

是的，您可以分享您的配置。但请注意，如果您分享配置，用户可能会从配置中提取 UUID 并访问您的订阅，从而访问您的所有配置。如果您想防止这种情况，可以更改订阅路径。详细说明请参阅 [更改订阅路径](worker-installation#3-更改订阅路径)。

### 我可以使用自己的域名吗？

是的，您可以将自己的域名连接到 Worker 或 Pages。这样，您可以使用自己的域名访问面板，而不是使用 `.workers.dev` 或 `.pages.dev` 域名。详细说明请参阅 [将域名连接到 Workers](worker-installation#4-将域名连接到-workers) 或 [添加自定义域名](pages-upload-installation#添加自定义域名)。

### 如何获取更多帮助？

如果您有其他问题或需要帮助，可以：

1. 查阅 [GitHub 仓库](https://github.com/bia-pain-bache/BPB-Worker-Panel) 的文档
2. 在 [GitHub Issues](https://github.com/bia-pain-bache/BPB-Worker-Panel/issues) 上提问
3. 加入相关社区或论坛寻求帮助
