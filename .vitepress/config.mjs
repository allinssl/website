import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: 'zh-CN', // 语言
    title: "ALLinSSL-开源免费的 SSL证书申请/部署/续签自动化管理平台", // 网站标题
    description: "开源免费的 SSL 证书自动化申请、部署、管理平台", // 网站描述

    // 恢复 head 配置来引入自定义 CSS
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.svg', // 稍后我们会添加 logo 文件

        nav: [ // 顶部导航栏
            { text: '首页', link: '/' },
            { text: '指南', link: '/guide/introduction' },
            { text: '功能', link: '/features/dashboard' },
            { text: '社区', link: '/community/contributing' },
            {
                text: '相关链接',
                items: [
                    { text: 'GitHub', link: 'https://github.com/allinssl/allinssl' },
                    { text: '宝塔面板', link: 'https://www.bt.cn/' },
                    { text: 'QQ交流群', link: 'https://qm.qq.com/q/Y7Mwiwba80' },
                ]
            }
        ],

        sidebar: { // 侧边栏
            '/guide/': [
                {
                    text: '入门指南',
                    collapsed: false,
                    items: [
                        { text: '项目介绍', link: '/guide/introduction' },
                        { text: '快速上手', link: '/guide/getting-started' },
                        { text: '目标用户', link: '/guide/who-is-it-for' },
                        { text: '企业服务', link: '/guide/ltd' },
                    ]
                },
                {
                    text: '操作指南',
                    collapsed: false,
                    items: [
                        { 
                            text: '授权API管理', 
                            link: '/guide/help/provider/index' ,
                            items: [
                                { text: 'SSH', link: '/guide/help/provider/ssh' },
                                { text: '宝塔面板', link: '/guide/help/provider/btpanel' },
                                { text: '1Panel', link: '/guide/help/provider/1panel' },
                                { text: '宝塔WAF', link: '/guide/help/provider/btwaf' },
                                { text: '雷池WAF', link: '/guide/help/provider/safeline' },
                            ]
                        },
                        { text: '工作流-证书申请', link: '/guide/help/certificate/index' },                      
                        { 
                            text: '工作流-部署平台', 
                            link: '/guide/help/deploy/index' ,
                            items: [
                                { text: '本地部署', link: '/guide/help/deploy/local' },
                                { text: 'SSH', link: '/guide/help/deploy/ssh' },
                                { text: '宝塔面板', link: '/guide/help/deploy/btpanel' },
                                { text: '1Panel', link: '/guide/help/deploy/1panel' },
                                { text: '宝塔WAF', link: '/guide/help/deploy/btwaf' },
                                { text: '雷池WAF', link: '/guide/help/deploy/safeline' },
                            ]
                        },
                    ]
                }
            ],
            '/features/': [
                {
                    text: '功能详解',
                    items: [
                        { text: '首页/仪表盘', link: '/features/dashboard' },
                        { text: '自动化部署', link: '/features/automation-workflows' },
                        { text: '证书管理', link: '/features/certificate-management' },
                        { text: '申请证书', link: '/features/apply-certificate' },
                        { text: '授权API管理', link: '/features/api-key-management' },
                        { text: '监控', link: '/features/monitoring' },
                        { text: '设置', link: '/features/settings' },
                    ]
                }
            ],
            '/community/': [
                {
                    text: '社区',
                    items: [
                        { text: '贡献指南', link: '/community/contributing' },
                    ]
                }
            ]
        },

        socialLinks: [ // 页脚社交链接
            { icon: 'github', link: 'https://github.com/allinssl/allinssl' },
            { icon: 'qq', link: 'https://qm.qq.com/q/Y7Mwiwba80' },
        ],

        footer: { // 页脚
            message: '基于 AGPL-3.0 许可发布',
            copyright: `版权所有 © 2024-${new Date().getFullYear()} ALLinSSL 团队`
        },

        // 编辑链接 (方便用户直接提修改建议)
        // editLink: {
        //     pattern: 'https://github.com/allinssl/allinssl/edit/main/vitepress/:path', // 假设你的文档放在 main 分支的 vitepress 目录
        //     text: '在 GitHub 上编辑此页面'
        // }
    },

    // Markdown 配置 (可选)
    markdown: {
        lineNumbers: true // 显示代码行号
    }
}) 