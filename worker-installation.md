# 通过 Cloudflare Workers 安装

::: warning 免责声明
本文档是由社区成员创建的非官方中文文档，并非由 BPB Panel 官方团队开发或维护。文档内容基于原始法语文档翻译而来，仅供参考。如有任何差异，请以官方文档为准。
:::

本文档将指导您如何通过 Cloudflare Workers 安装 BPB Panel。

## 下载 Worker 代码

首先，从 [这里](https://github.com/bia-pain-bache/BPB-Worker-Panel/releases/latest/download/worker.js) 下载 Worker 代码。

## 上传代码到 Worker

接下来，点击您创建的 Worker 的 "Edit code" 按钮，从左侧边栏中删除 worker.js 文件，然后上传您刚刚下载的新文件。如果出现错误，也请删除 package-lock.json 文件。由于代码量很大，在手机上复制粘贴可能很困难，请按照下图所示上传。在移动设备上，打开侧边菜单，长按并上传。

![Worker 移动上传](/images/Worker_mobile_upload.jpg)

最后，点击 `Save and Deploy` 部署 Worker。

::: tip 提示
请注意，面板更新过程也是完全相同的：删除旧文件，上传新文件，然后部署。您之前的设置将被保留，只有面板会更新。
:::

## 配置 Worker

现在，返回 Worker 仪表板并按照以下步骤操作：

![导航 Worker 仪表板](/images/Navigate_worker_dash.jpg)

首先，从仪表板顶部点击 `Visit`，您会看到一个错误，提示您需要先设置 UUID 和 Trojan 密码。有一个链接，在浏览器中打开它，保留该页面，稍后会用到。

![生成密钥](/images/Generate_secrets.jpg)

从这里进入 `KV` 部分：

![导航到 KV](/images/Nav_dash_kv.jpg)

在 KV 部分，点击 `Create` 并输入一个名称（例如 Test），然后点击 `Add`。

再次从左侧菜单返回到 `Workers & Pages` 部分，打开您创建的 Worker，转到 `Settings` 部分，找到 `Bindings`。点击 `Add` 并选择 `KV Namespace`，如下图所示，从下拉菜单中选择您刚刚创建的 KV（在示例中是 Test）。重要的是上面的下拉菜单，必须将其值设置为 `kv`，然后点击 `Deploy`。

![绑定 KV](/images/Bind_kv.jpg)

在同一个 `Settings` 部分，您会看到 `Variables and Secrets` 部分。点击 `Add variable`，在第一个框中输入 `UUID`（使用大写字母），您可以从之前打开的链接中复制 UUID 到 Value 部分，然后点击 `Deploy`。再次点击 `Add variable`，在第一个框中输入 `TR_PASS`（使用大写字母），您可以从同一个链接中获取 Trojan 密码并复制到 Value 部分，然后点击 `Deploy`。

## 访问面板

例如，假设您的 Worker 域名是 worker-polished-leaf-d022.workers.dev，在末尾添加 `panel/` 并访问面板。例如：

```
https://worker-polished-leaf-d022.workers.dev/panel
```

系统会要求您设置新密码并登录，安装就完成了。

以下是一些可能不是所有人都需要的高级设置说明。有关设置和提示的教程，请参阅 [主要教程](configuration)。

## 高级设置（可选）

### 1. 固定代理 IP

默认情况下，此代码使用多个代理 IP，每次连接到 Cloudflare 后面的网站（包括大部分网络）时，都会随机选择一个新 IP，因此您的 IP 会定期更改。对于某些用户（特别是交易者）来说，这种 IP 变化可能会造成问题。从版本 2.3.5 开始，您可以通过面板本身更改代理 IP，只需应用更改并更新订阅即可。但我建议使用下面解释的方法，因为：

::: danger 注意
如果您通过面板应用代理 IP，而该 IP 停止工作，您需要替换它并更新订阅。这意味着，如果您已经分享了配置，更改代理 IP 将不再有用，因为用户没有订阅来更新配置。因此，建议仅将此方法用于个人使用。而下面介绍的第二种方法的优点是通过 Cloudflare 仪表板完成，无需更新配置。
:::

要更改代理 IP，从左侧菜单转到 `Workers & Pages` 部分，打开您创建的 Worker，转到 `Settings` 部分，找到 `Variables and Secrets`：

![Workers 变量](/images/Workers_variables.jpg)

在这里，您需要指定值。每次点击 `Add`，输入一个值，然后点击 `Deploy`：

![Workers 添加变量](/images/Workers_add_variables.jpg)

现在点击 `Add variable`，在第一个框中输入 `PROXY_IP`（使用大写字母），您可以从下面的链接获取 IP，打开它会显示一些 IP，您可以检查它们的国家并选择一个或多个：

[代理 IP](https://www.nslookup.io/domains/bpb.yousef.isegaro.com/dns-records/)

![代理 IP](/images/Proxy_ips.jpg)

::: tip 提示
如果您想要多个代理 IP，可以用逗号分隔输入，例如 `151.213.181.145`,`5.163.51.41`,`bpb.yousef.isegaro.com`
:::

### 2. 更改 Fallback 域名

您可能已经注意到，当您打开 Pages 的主域名时，它会转到 Cloudflare 的速度测试网站。要更改它，请按照与代理 IP 相同的步骤操作，但变量名称应为 `FALLBACK`，其值应为不带 https:// 或 http:// 的域名。例如 www.speedtest.net 或 npmjs.org。

### 3. 更改订阅路径

默认情况下，获取订阅链接的路径与用于 VLESS 的 UUID 相同。但是，如果您分享配置，用户可以从配置中提取 UUID 并通过它访问您的订阅，从而访问您的所有配置。虽然在分享时我们不应该担心更多的使用，但仍然可以更改路径，使用户无法访问订阅。步骤与第 1 和第 2 部分完全相同，不同之处在于变量名称是 `SUB_PATH`。如果您转到 secrets/ 页面（同一个 Secrets 生成器页面），您会看到添加了一个 `Random Subscription URI path` 选项，它为您生成了一个路径，您可以使用它或设置自己的值（考虑允许的字符）。

### 4. 将域名连接到 Workers

为此，转到 Cloudflare 仪表板，从 `Workers and Pages` 部分选择您的 Worker。转到 `Settings` 部分，您会在开头看到 `Domains & Routes`，点击 `Add +` 并选择 `Custom domain`。在这里，它会要求您输入一个域名（请注意，您必须已经购买了一个域名并在同一账户上激活它，这里不提供教程）。假设您有一个名为 bpb.com 的域名，在 Domain 部分，您可以输入域名本身或一个自定义子域名。例如 xyz.bpb.com。然后点击 `Add domain`。Cloudflare 将自动将 Worker 连接到您的域名（这需要一些时间，Cloudflare 表示可能需要长达 24 小时）。

然后，您需要再次点击 `Add +` 并这次选择 `Route`，在 Zone 部分选择您的域名，在 Route 部分，您需要按以下方式输入新域名：
```
*bpb.com/*
```

完成后，您可以使用地址 `https://xyz.bpb.com/panel` 访问您的面板并接收新的订阅。

::: tip 提示
1. 如果您将域名连接到 Worker，就像 Pages 一样，流量将是无限的。

2. Worker 本身支持非 TLS 端口，如 80、8080 等，并在面板中显示它们，但如果连接了域名，这些端口将不再工作，面板也不会显示它们。
:::
