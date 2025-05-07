---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "BPB Panel 非官方文档"
  text: "一个提供 GUI 的 Cloudflare Worker              代理服务器"
  tagline: 简单、高效、功能丰富的代理面板
  image:
    src: https://avatars.githubusercontent.com/u/155004885?s=256
    alt: BPB Panel 图标
  actions:
    - theme: brand
      text: 开始使用
      link: /configuration
    - theme: alt
      text: 安装教程
      link: /worker-installation

features:
  - icon: 🚀
    title: 简单易用
    details: 提供直观的图形界面，无需复杂的命令行操作，轻松管理您的代理配置
  - icon: 🔧
    title: 多种安装方式
    details: 支持 Cloudflare Workers 和 Pages 两种部署方式，满足不同用户的需求
  - icon: 🌐
    title: 丰富的功能
    details: 支持 Fragment、Warp、多种协议和端口，以及自定义路由规则等高级功能
  - icon: 🔄
    title: 订阅管理
    details: 提供多种订阅格式，支持 v2ray、Clash、Sing-box 等多种客户端
  - icon: 🔒
    title: 安全可靠
    details: 基于 Cloudflare 的可靠基础设施，提供稳定的服务和安全的连接
  - icon: 🆓
    title: 完全免费
    details: 基于 Cloudflare 免费计划，无需支付任何费用即可使用所有功能
---

## 欢迎使用

欢迎使用 BPB Panel 中文文档。本非官方中文文档提供了关于 BPB Panel 的安装、配置和使用的详细指南。

::: warning 免责声明
本文档是由社区成员创建的非官方中文文档，并非由 BPB Panel 官方团队开发或维护。文档内容基于原始法语文档翻译而来，仅供参考。如有任何差异，请以官方文档为准。
:::

## 什么是 BPB Panel？

BPB Panel 是一个基于 Cloudflare Workers 的代理服务器，提供了友好的图形用户界面，使您能够轻松管理和配置您的代理设置。它支持多种协议、Fragment 技术、Warp 集成以及丰富的自定义选项。

## 主要功能

- **多种订阅类型**：支持 Normal、Full Normal、Fragment、Warp 和 Warp PRO 等多种订阅类型
- **Fragment 技术**：提供高级的 Fragment 配置，帮助优化连接质量
- **Warp 集成**：内置 Cloudflare Warp 支持，提供更稳定的连接
- **多协议支持**：支持 VLESS、Trojan 等多种协议
- **自定义路由规则**：可以自定义路由规则，实现更精细的流量控制
- **IP 管理**：支持自定义清洁 IP 和代理 IP 设置
- **多端口支持**：提供多种端口选择，满足不同网络环境的需求

## 快速开始

选择以下任一方式开始使用 BPB Panel：

- [使用指南和配置](/configuration)：了解如何使用和配置 BPB Panel
- [Worker 安装](/worker-installation)：通过 Cloudflare Workers 安装 BPB Panel
- [Pages 安装](/pages-upload-installation)：通过 Cloudflare Pages 安装 BPB Panel
- [向导安装](/wizard-installation)：使用向导快速安装 BPB Panel
