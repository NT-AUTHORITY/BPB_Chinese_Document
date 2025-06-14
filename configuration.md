# 使用指南和配置

::: warning 免责声明
本文档是由社区成员创建的非官方中文文档，并非由 BPB Panel 官方团队开发或维护。文档内容基于原始法语文档翻译而来，仅供参考。如有任何差异，请以官方文档为准。
:::

本文档将详细介绍 BPB Panel 的使用方法和各项配置选项。

## 访问面板

假设您的 worker 或 pages 名称为 `worker-polished-leaf-d022`：

您可以通过在其末尾添加 `panel/` 来访问面板，如下所示：

```
https://worker-polished-leaf-d022.workers.dev/panel
```

首次访问时，系统会要求您设置新密码并登录。

::: warning 重要提示
密码必须至少包含 **8 个字符**，并且至少包含一个 **大写字母** 和一个 **数字**。您也可以在面板底部更改密码。
:::

接下来，让我们了解面板的各个部分。

## 1. Normal 订阅

![Normal 配置](/images/Normal-Configs.jpg)

这部分提供了不使用 Fragment 的基本配置。请注意，您需要了解如何在应用程序中设置这些配置，否则可能会遇到问题。建议使用 `Full Normal` 订阅，因为它们已经应用了所有面板设置，无需额外配置。请注意，面板的路由规则、链式代理和 DNS 设置不会应用于这些订阅（需要在应用程序中手动设置）。

此链接提供 6 个配置（您可以通过清洁 IP、端口和协议设置增加配置数量）。这 6 个配置有什么区别？

- **Websocket 路径**：每个配置都有不同的路径。
- **配置地址**：第一个使用您的 worker 域名，第二个使用 www.speedtest.net（在大多数运营商上都很稳定），第 3-6 个使用您域名的 IP 地址（通常也很稳定）。其中包括两个 IPv4 和两个 IPv6 地址。

如何增加配置数量？详细说明请参阅 [清洁 IP 设置](#1-4-清洁-ip-设置)、[端口设置](#1-9-端口选择)、[协议选择](#1-8-协议选择) 和 [自定义 CDN 设置](#1-6-自定义-cdn-设置) 部分。

::: danger 注意
使用这些订阅时，请在您使用的任何应用程序中禁用 Mux 功能。
:::

::: warning 警告
使用此 Worker 会定期更改您设备的 IP 地址，因此不要将其用于交易、PayPal 或 Hetzner 等对 IP 敏感的网站，否则可能会被封禁。我们提供了两种解决方案来固定 IP：[设置代理 IP](#1-2-代理-ip-设置) 和 [使用链式代理](#1-3-链式代理设置)。
:::

## 2. Full Normal 订阅

![Full Normal 配置](/images/Full-Normal-Configs.jpg)

此订阅提供与上面相同的配置，但区别在于它应用了面板 VLESS/Trojan 部分的所有设置（您可以在 [这里](#1-1-vlesstrojan-设置) 了解更多信息）。此外，这些订阅还包含 **Best Ping** 配置（稍后解释）。

通过应用路由设置，它可以阻止约 90% 的国内外广告，绕过中国和伊朗网站（无需为支付网关等关闭 VPN），绕过 LAN，阻止色情内容和 QUIC，并且 Sing-box 订阅还能很好地阻止钓鱼和恶意软件内容。

::: tip 提示
**Best Ping** 配置是什么？这个配置合并了面板中的所有配置，每 30 秒检查一次哪个配置速度最快，然后连接到最佳配置！如果您添加了清洁 IP、启用了 Trojan 协议或选择了其他端口，它们也会添加到 Best Ping 中。在 Fragment 和 Warp 订阅中也有这种类型的配置。
:::

## 3. Fragment 订阅

![Fragment 订阅](/images/Fragment-Sub.jpg)

::: info Fragment 配置的优势
1. 即使您的个人域名或 worker 被封锁，也能保持连接
2. 在所有运营商上提高质量和速度，特别是在 Cloudflare 上有干扰的运营商
:::

### 3-1. Xray 的 Fragment 订阅

这是为使用 Xray 内核的程序设计的，实际上是 Fragment SUB 表中的第一行，导入应用程序的方式与普通订阅相同。这些配置名称中包含 `F`。

此订阅提供与 Full Normal 订阅相同数量的配置，但使用 Fragment（使用您在面板中应用的 Fragment 设置），并额外提供 **Best Fragment** 和 **Workerless** 配置。您在面板中进行的任何设置更改都会在更新订阅时应用到所有配置。

::: tip 提示
Workerless 配置无需 worker 即可访问许多被封锁的网站和应用程序！如 YouTube、Twitter、Google Play 等。请注意，由于此配置不使用 worker，它不会更改您的 IP 地址，因此不适合安全任务。您在面板中为 Fragment 所做的更改也会应用于此配置，但链式代理除外。

Best Fragment 配置应用 18 种不同的 Fragment 值，并根据您的运营商选择性能最佳的值！这 18 种模式的选择确保覆盖所有范围，配置每分钟测试一次所有小范围和大范围，并连接到最佳选项。
:::

有关 Fragment 的高级设置在 [这里](#4-2-fragment-设置) 有详细说明。

### 3-2. Hiddify 的 Fragment 订阅

Fragment SUB 表中的第二行是为 Hiddify 应用程序设计的，但有一个区别。由于该应用程序的限制，面板的许多设置不会应用于此订阅，实际上应用程序会重写这些设置。这些配置名称中也包含 `F`。您需要在 Hiddify 应用程序中手动应用以下设置，目前无法从面板应用：

1. 远程 DNS
2. 本地 DNS
3. Fragment 数据包
4. 路由规则

::: danger 注意
1. 请务必从应用程序设置中将远程 DNS 更改为 DOH，例如：
   https://8.8.8.8/dns-query 或 https://94.140.14.14/dns-query
   如果您在此部分使用 ...//:udp 或纯 IP，您的 worker 将无法工作。

2. 如果您在应用程序中手动启用了 Fragment，面板的 Fragment 设置将不会应用。
:::

另一种方法是将普通订阅导入 Hiddify 应用程序，然后如下图所示手动启用 Fragment：

![Hiddify Fragment](/images/Hiddify_fragment.jpg)

## 4. Warp 订阅

![Warp 配置](/images/Warp-Configs.jpg)

此订阅提供一个 Warp 配置（IP 为伊朗的 Cloudflare IP）和一个 Warp on Warp（简称 WoW）配置（IP 为国外，但由于 Cloudflare 的变化，有时可能会提供伊朗 IP）。还有一个 Warp Best Ping 配置，它连接到最快的 Warp 配置，始终具有伊朗 IP，以及一个 WoW Best Ping 配置，它连接到最快的 WoW 配置，具有国外 IP。

默认情况下，只有一个 Warp 和一个 WoW 配置，但如果您编辑 Endpoints 部分，Warp 和 WoW 配置的数量将根据输入的 Endpoint 数量增加。

您还可以下载 Warp 配置的 zip 文件，进入 Wireguard 应用程序，导入下载的 zip 文件。请注意，伊朗的大多数运营商已阻止 Warp，仅当您的运营商允许 Wireguard 时才使用此应用程序。

请务必使用扫描器在您的运营商上找到合适的 Endpoint。面板中有扫描器脚本，复制它并在 Android 上的 Termux 中运行。有关在面板中设置的信息，请阅读高级设置部分 7-4。普通 Warp 订阅可能在某些运营商（如 Irancell）上运行良好，但对于其他运营商，请使用 Warp Pro 订阅。

## 5. Warp PRO 订阅

![Warp Pro 配置](/images/Warp-Pro-Configs.jpg)

GFW-Knocker 和 Hiddify 团队在 Xray 和 Singbox 内核上进行了新的开发，结果是 MahsaNG、NikaNG、v2rayN-PRO 和 Hiddify 应用程序，使我们能够为伊朗的条件优化 Warp 连接，类似于 Oblivion 所做的工作。因此，我在面板中添加了 WARP PRO SUB，可以通过 WARP PRO SETTINGS 部分进行自定义。

每个运营商的最佳值是通过经验确定的，就像 Fragment 设置一样，它们在不同时间可能也会有所不同，但默认值已经过测试，目前运行良好，您只需设置合适的 Endpoint。

::: danger 注意
Hiddify 应用程序的版本必须至少为 2.0.5。
:::

您还可以下载 Pro 配置的 zip 文件，进入 WG Tunnel 应用程序，点击 +，选择下载的 zip 文件，无需任何特殊设置，配置将连接。对于 Amnezia，步骤相同，但该应用程序无法正确读取 zip 文件，下载 zip 文件后，先解压，然后将所需的配置导入 Amnezia 并连接。

## My IP 表格

![My IP](/images/My-IP.jpg)

连接到代理后，您可以刷新页面并查看此表格，了解您的 IP 地址。该表格有两行：第一行显示您在 Cloudflare 地址上的 IP。如果您有代理 IP，您在 Cloudflare 地址上的 IP 将是该代理 IP，对于其他地址，将是随机的 Cloudflare IP。这样，您可以检查所选的代理 IP 是否已应用。如果您连接到 Warp 配置，表格的两行应显示相同的 IP。请注意，为了使此部分正常工作，如果您使用 uBlock Origin 扩展，您需要禁用它。

## 高级设置

首先，如果您进行了任何错误的更改，请不要担心，在 APPLY SETTINGS 按钮旁边有一个 Reset 按钮，可将面板恢复为默认设置。

### 1-1. VLESS/TROJAN 设置

![VLESS/Trojan 设置](/images/VLESS_Trojan_settings.jpg)

此部分用于 Fragment 配置和 Clash 与 Singbox 订阅的设置，对普通 v2ray 部分的配置和 Warp 订阅没有影响。

#### DNS 服务器

默认情况下，我为远程 DNS 设置了 Google DOH，为本地 DNS 设置了 Google DNS。即默认配置为：

```
远程 DNS: https://8.8.8.8/dns-query
本地 DNS: 8.8.8.8
```

::: danger 注意
请勿将 `https://1.1.1.1/dns-query` 或 `https://cloudflare-dns.com/dns-query` 用于远程 DNS，因为它会增加延迟并使连接不稳定。
:::

::: tip 提示
从版本 2.5.5 开始，您可以使用官方的 DOH 或 DOT，并确信它们具有最佳性能，例如：

```
https://dns.google/dns-query
https://dns.adguard-dns.com/dns-query
https://dns.quad9.net/dns-query
tls://dns.google
```
:::

您还可以启用 Fake DNS，它有助于提高 DNS 速度，但请注意，它可能与某些应用程序不兼容，或者可能影响系统 DNS，因此如果您不确切知道它是什么，最好不要启用它。

### 1-2. 代理 IP 设置

从版本 2.3.5 开始，您也可以通过面板本身更改代理 IP，只需应用更改并更新订阅即可。但我建议使用旧的 Cloudflare 仪表板方法，因为：

::: danger 注意
如果您通过面板应用代理 IP，而该 IP 停止工作，您需要替换它并更新订阅。这意味着，如果您已经分享了配置，更改代理 IP 将不再有用，因为用户没有订阅来更新配置。因此，建议仅将此方法用于个人使用。旧方法的优点是无需更新配置。
:::

例如，您可以从以下链接选择代理 IP，它显示一些 IP，您可以检查它们的国家并选择一个或多个：

[代理 IP](https://www.nslookup.io/domains/bpb.yousef.isegaro.com/dns-records/)

::: tip 提示
如果您想要多个代理 IP，可以像下图所示输入它们。
:::

### 1-3. 链式代理设置

我们之前提到，您可以设置一个代理 IP 并为 Cloudflare 后面的网站固定 IP，但当我们访问普通网站时，我们的 IP 仍然属于 worker，它会定期更改。为了完全固定所有网站的 IP，添加了此部分。我们可以在此部分放置一个免费的 VLESS、Socks 或 Http 配置（即使它在伊朗被封锁，只要它在伊朗以外的地方工作），我们的 IP 将永久固定为该配置的 IP。

::: danger 注意
1. 此配置本身不应该是 worker，否则您的最终 IP 仍会更改。

2. 有很多免费配置的来源，我推荐 [racevpn.com](https://racevpn.com)，尽管它有时间限制，您可以根据国家获取配置。您也可以使用 [IRCF](https://ircfspace.github.io/tconfig/) 的配置或 Telegram 机器人 [TheTVCbot](https://t.me/TheTVCbot)，但其中一些配置可能已停止工作。

3. VLESS 配置可以是以下类型之一：
   - Reality TCP
   - Reality GRPC
   - Reality WS
   - Reality TCP Header
   - WS TLS
   - GRPC TLS
   - TCP TLS
   - WS
   - GRPC
   - TCP
   - TCP Header

4. Socks 配置可以是以下形式之一：
   - socks://address:port
   - socks://user:pass@address:port

5. Http 配置可以是以下形式之一：
   - http://address:port
   - http://user:pass@address:port

6. 此部分仅应用于除 Normal 表第一行和 Warp 订阅外的所有订阅，应用后请务必更新订阅。但 Normal 订阅会单独提供该配置。例如，您可以在 Nekobox 或 Husi 应用程序中编辑订阅的 Group 部分，将此配置设置为 Landing Proxy，这样订阅就会链接。最近，v2rayNG 应用程序从版本 1.9.1 开始也添加了此功能，您需要复制配置名称，转到 Subscription group setting，编辑您的订阅，并在 `Next proxy remarks` 部分粘贴名称。
:::

::: warning 重要提示
1. 如果您使用 VLESS TLS 配置进行链接，其端口必须为 443，否则面板将不允许。

2. 具有 randomized alpn 值的 VLESS 配置在 Clash 上不起作用，因为它不支持。

3. VLESS WS 配置不适合在 Sing-box 上链接，有 bug。
:::

### 1-4. 清洁 IP 设置

普通订阅链接（无 Fragment）提供 6 个配置。在这里，您可以增加配置数量。还有一个扫描器，您可以根据操作系统下载 zip 文件，解压后运行 CloudflareScanner 文件，测试完成后，结果将保存在 result.csv 文件中，您可以根据延迟和下载速度进行选择，建议在 Windows 上进行测试，测试时请确保 VPN 已断开连接。通常情况下，它会提供良好的 IP，但对于高级扫描，请阅读 [此处](https://github.com/bia-pain-bache/Cloudflare-Clean-IP-Scanner/blob/master/README.md) 的指南。

::: tip 提示
在支持 IPv6 的运营商（如 Rightel、Irancell 和 Asiatech）上，首先在 SIM 卡上启用 IPv6，然后在 V2RayNG 设置中启用 Prefer IPv6 选项，并使用这 6 个配置中的最后两个或地址是您自己域名的那个。一般来说，始终点击一次 Real delay all configuration，并使用最佳的那个连接。
:::

面板提供的 6 个默认配置都是清洁 IP，此外，如果您使用 Fragment 配置，清洁 IP 的重要性就不那么大了，但某些运营商（如 Telecommunication）在普通配置上仍然需要清洁 IP。

现在，如果您想除了那 6 个配置外添加更多使用您自己的清洁 IP 的配置，请按照图片所示逐行输入您的清洁 IP 或域名，然后点击 Apply。

现在，如果您在应用程序中点击 Update subscription，您将看到新配置已添加。

此外，这些新配置也会同时添加到 Fragment 部分。

::: danger 注意
应用后请务必更新订阅。
:::

### 1-5. 启用 IPv6

面板默认也提供 IPv6 配置，但如果您的运营商不支持，您可以禁用它以简化配置并优化 DNS 设置。

### 1-6. 自定义 CDN 设置

我们有三个称为 Custom CDN 的字段，用于当您将 Worker 域名放在另一个 CDN（如 Fastly、Gcore 或任何其他 CDN）后面时。这三个部分依次是：

1. `Custom Addr` 部分实际上相当于 Cloudflare 的 IP 或清洁 IP。但对于您在此处使用的任何 CDN，您必须使用其自己的 IP，不能为 Fastly 或 Gcore 使用 Cloudflare IP。与我们之前的清洁 IP 一样，您可以逐行添加域名、IPv4 或 IPv6，请注意 IPv6 必须放在 [ ] 之间，例如：
   ```
   [2a04:4e42:200::731]
   ```

2. `Custom Host` 部分应该是您在该 CDN 中定义的指向您的 worker 的主机。例如，在 Fastly 中，可以定义一个虚假的域名地址。

3. `Custom SNI` 部分可以是该虚假域名，也可以是该 CDN 上的网站。例如，speedtest.net 网站（不带 www）在 Fastly CDN 上。

设置此部分后，配置将添加到 Normal 订阅中，包括所有 Sing-box、Clash 和 v2ray 订阅等。这些配置名称中包含 `C`，以区别于其他配置。

::: warning 重要提示
目前，只有端口 443 和 80 的配置可以使用此方法连接。
:::

::: tip 提示
这些配置出现在 Normal 和 Full Normal 订阅中。但如果您使用 Normal 订阅，您需要从配置设置中手动启用 Allow Insecure。Full Normal 会自动应用此设置。
:::

### 1-7. Best Ping 检查时间

在所有 Fragment、Sing-box 和 Clash 订阅中，我们都有 Best Ping。默认情况下，它每 30 秒检查一次最佳配置或 Fragment 值，并连接到它，但如果您的网络速度不佳，并且您正在观看视频或玩游戏，这 30 秒可能会造成问题，导致延迟体验。从这里，您可以调整时间，最短可以是 10 秒，最长可以是 90 秒。

### 1-8. 协议选择

您可以启用一个或两个 VLESS 和 Trojan 协议。

::: danger 注意
这两种协议在 Cloudflare 上不能很好地支持 UDP 连接，因此例如 Telegram 语音通话将无法工作。此外，您不能使用 UDP DNS 作为远程 DNS，如果您在程序中看到远程 DNS 是像 1.1.1.1 这样的 IP 或类似 udp://1.1.1.1 的东西，您将遇到问题。请务必使用以下格式：

```
https://IP/dns-query 如 https://8.8.8.8/dns-query, https://94.140.14.14/dns-query ....
https://doh/dns-query 如 https://dns.google/dns-query, https://cloudflare-dns.com/dns-query ....
tcp://IP 如 tcp://8.8.8.8, tcp://94.140.14.14 ....
tls://IP 如 tls://dns.google, tls://cloudflare-dns.com ....
```
:::

### 1-9. 端口选择

从此部分，您可以选择所需的端口。其中一些提供 TLS 配置，更安全，但当 TLS 和 Fragment 受到干扰时，这些配置可以连接。

::: danger 注意
请注意，要使用非 TLS 配置，您必须使用 Workers 部署方法。否则，http 端口不会在面板中显示，因为它们不适用于 Pages 方法。
:::

::: tip 提示
非 TLS 配置仅添加到普通订阅中。
:::

## 4-2. Fragment 设置

![Fragment 设置](/images/Fragment-Settings.jpg)

默认设置为：

```
Length: 100-200
Interval: 1-1
Packets: tlshello
```

现在，您可以调整参数并点击 Apply。这样，Fragment 配置将使用您的设置提供。

::: info 注意
您可以更改一个参数或同时更改所有参数。您所做的任何更改都会保存，下次无需重新设置。
:::

::: warning 重要提示
Fragment 值有最大限制，Length 不能超过 500，Interval 不能超过 30。
:::
