---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "All in SSL"
  text: "开源免费的 SSL 证书自动化管理平台"
  tagline: 一键自动化申请、续期、部署、监控所有 SSL/TLS 证书，支持跨云环境和多 CA (coding~)，告别繁琐配置和高昂费用。
  image:
    src: /images/main.png
    alt: ALLinSSL 产品示意图
  actions:
    - theme: brand
      text: 快速上手
      link: /guide/getting-started
    - theme: alt
      text: 查看 GitHub
      link: https://github.com/allinssl/allinssl
    - theme: alt
      text: 功能概览
      link: /features/dashboard

features:
  - title: 全自动化管理
    icon: 🚀
    details: 从证书申请、验证、签发、部署到自动续期，实现全生命周期自动化，大幅减少手动操作和出错风险。
  - title: 灵活的工作流引擎
    icon: 🛠️
    details: 通过拖拽式或模板化的方式构建自动化部署流水线，满足不同场景下的证书部署需求，如 CDN、WAF 等。
  - title: 跨平台与多 CA 支持
    icon: ☁️
    details: 无缝集成多种 DNS 提供商、云平台（阿里云、腾讯云等）、服务器（SSH、宝塔、1Panel）和 CA 机构（Let's Encrypt 等）。
  - title: 开源免费与社区驱动
    icon: ❤️
    details: 核心功能完全免费，基于 AGPL-3.0 许可开源。欢迎社区贡献，共同打造更好的 SSL 管理工具。
  - title: 可视化仪表盘
    icon: 📊
    details: 提供直观的仪表盘，集中展示所有证书状态、工作流执行情况和监控预警，管理状况一目了然。
  - title: 全方位监控与告警
    icon: 🔔
    details: 实时监控证书到期时间、部署状态，支持多种通知渠道（Webhook、邮件等），确保证书问题及时发现和处理。
---

<SelfHostedSetup />

