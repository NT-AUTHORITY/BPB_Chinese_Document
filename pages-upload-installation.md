# 通过 Cloudflare Pages 安装

::: warning 免责声明
本文档是由社区成员创建的非官方中文文档，并非由 BPB Panel 官方团队开发或维护。文档内容基于原始法语文档翻译而来，仅供参考。如有任何差异，请以官方文档为准。
:::

本文档将指导您如何通过 Cloudflare Pages 安装 BPB Panel。

## 准备工作

首先，您需要一个 GitHub 账户。如果您还没有，请在 [GitHub](https://github.com) 上注册一个账户。

## 步骤 1：Fork 仓库

1. 访问 [BPB-Worker-Panel 仓库](https://github.com/bia-pain-bache/BPB-Worker-Panel)
2. 点击右上角的 "Fork" 按钮，将仓库复制到您的 GitHub 账户

![Fork 仓库](/images/Fork_repo.jpg)

## 步骤 2：连接 GitHub 到 Cloudflare

1. 登录您的 Cloudflare 账户
2. 从左侧菜单选择 "Workers & Pages"
3. 点击 "Create application" 按钮
4. 选择 "Pages" 选项卡
5. 点击 "Connect to Git"

![连接到 Git](/images/Connect_to_git.jpg)

6. 选择 GitHub 并授权 Cloudflare 访问您的 GitHub 账户
7. 在仓库列表中找到并选择您刚刚 fork 的 `BPB-Worker-Panel` 仓库
8. 点击 "Begin setup" 按钮

## 步骤 3：配置部署设置

在 "Set up builds and deployments" 页面上，配置以下设置：

![Pages 应用](/images/Pages_application.jpg)

- **Project name**：输入一个项目名称（可以是任何名称）
- **Production branch**：选择 `main`
- **Framework preset**：选择 `None`
- **Build command**：留空
- **Build output directory**：输入 `src`
- **Root directory**：留空
- **Environment variables**：不需要添加任何环境变量

点击 "Save and Deploy" 按钮开始部署过程。

## 步骤 4：等待部署完成

Cloudflare 将开始构建和部署您的应用程序。这个过程通常需要几分钟时间。

![Pages 生产详情](/images/Pages_production_details.jpg)

如果部署失败，您可以点击 "Retry deployment" 按钮重试：

![Pages 重试部署](/images/Pages_retry_deployment.jpg)

## 步骤 5：设置环境变量

部署完成后，您需要设置一些必要的环境变量：

1. 在 Pages 项目中，转到 "Settings" 选项卡
2. 滚动到 "Environment variables" 部分
3. 点击 "Add variable" 按钮

![Pages 环境变量](/images/Pages_env_vars.jpg)

您需要添加以下变量：

- **UUID**：输入一个有效的 UUID（您可以使用 [UUID 生成器](https://www.uuidgenerator.net/) 生成一个）
- **TR_PASS**：输入一个强密码作为 Trojan 密码

![Pages 添加变量](/images/Pages_add_variables.jpg)

4. 对于每个变量，确保选择 "Production" 环境
5. 添加完所有变量后，点击 "Save" 按钮

## 步骤 6：创建和绑定 KV 命名空间

1. 在 Cloudflare 仪表板中，转到 "Workers & Pages"
2. 在左侧菜单中选择 "KV"
3. 点击 "Create namespace" 按钮
4. 输入一个命名空间名称（例如 "bpb-kv"）
5. 点击 "Add" 按钮创建命名空间

![Pages 绑定 KV](/images/Pages_bind_kv.jpg)

6. 返回到您的 Pages 项目
7. 转到 "Settings" > "Functions" > "KV namespace bindings"
8. 点击 "Add binding" 按钮
9. 在 "Variable name" 字段中输入 `kv`（必须是小写）
10. 从下拉菜单中选择您刚刚创建的 KV 命名空间
11. 点击 "Save" 按钮

![设置函数](/images/Settings_functions.jpg)

## 步骤 7：重新部署应用程序

1. 转到 "Deployments" 选项卡
2. 找到最新的部署
3. 点击 "Retry deployment" 按钮重新部署应用程序

## 步骤 8：访问面板

部署完成后，您可以通过以下 URL 访问您的面板：

```
https://your-project-name.pages.dev/panel
```

将 `your-project-name` 替换为您的 Pages 项目名称。

系统会要求您设置新密码并登录，安装就完成了。

## 更新面板

当有新版本发布时，您可以按照以下步骤更新面板：

1. 转到您 fork 的 GitHub 仓库
2. 点击 "Sync fork" 按钮，确保您的仓库与原始仓库同步

![同步 fork](/images/Sync_fork.jpg)

3. Cloudflare Pages 将自动检测更改并重新部署您的应用程序

## 高级设置

### 添加自定义域名

如果您想使用自己的域名而不是 `.pages.dev` 域名，您可以按照以下步骤操作：

1. 在 Pages 项目中，转到 "Custom domains" 选项卡
2. 点击 "Set up a custom domain" 按钮
3. 输入您想要使用的域名
4. 按照屏幕上的说明完成 DNS 配置

### 设置代理 IP

如果您想固定代理 IP，可以添加一个名为 `PROXY_IP` 的环境变量：

1. 转到 "Settings" > "Environment variables"
2. 点击 "Add variable" 按钮
3. 变量名称输入 `PROXY_IP`
4. 变量值输入您想要使用的 IP 地址（可以从 [这里](https://www.nslookup.io/domains/bpb.yousef.isegaro.com/dns-records/) 获取可用的 IP 地址）
5. 点击 "Save" 按钮

### 更改 Fallback 域名

默认情况下，当您访问主域名时，它会重定向到 Cloudflare 的速度测试网站。如果您想更改这个行为，可以添加一个名为 `FALLBACK` 的环境变量：

1. 转到 "Settings" > "Environment variables"
2. 点击 "Add variable" 按钮
3. 变量名称输入 `FALLBACK`
4. 变量值输入您想要使用的域名（不包括 `https://` 或 `http://`），例如 `www.example.com`
5. 点击 "Save" 按钮

### 更改订阅路径

如果您想更改获取订阅的路径，可以添加一个名为 `SUB_PATH` 的环境变量：

1. 转到 "Settings" > "Environment variables"
2. 点击 "Add variable" 按钮
3. 变量名称输入 `SUB_PATH`
4. 变量值输入您想要使用的路径
5. 点击 "Save" 按钮

## 故障排除

如果您在安装过程中遇到问题，请检查以下几点：

1. 确保您已正确设置所有必要的环境变量（UUID 和 TR_PASS）
2. 确保您已创建并绑定 KV 命名空间，且变量名为 `kv`
3. 检查部署日志，查看是否有任何错误消息
4. 尝试重新部署应用程序

如果问题仍然存在，您可以在 [GitHub Issues](https://github.com/bia-pain-bache/BPB-Worker-Panel/issues) 上寻求帮助。
