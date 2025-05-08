# 申请证书 (Apply Certificate)

此页面提供了申请新 SSL/TLS 证书的入口，包括商业证书和免费证书。

## 免费 SSL 证书 (Free SSL)

对于大多数个人网站、博客和中小型项目，免费 SSL 证书（如 Let's Encrypt）是性价比极高的选择。

*   **Let's Encrypt:** 点击 Let's Encrypt 卡片，通常会弹出一个窗口，提供两种操作选项：

    1.  **手动申请 (Manual Application):**
        *   **目的:** 快速申请一个证书，但不自动创建续期和部署任务。
        *   **配置项:**
            *   **域名 (Domains):** 输入需要申请证书的域名。
            *   **选择 DNS 服务商 (DNS Provider):** 选择用于 DNS-01 验证的 [授权 API](/features/api-key-management.md)。
        *   **结果:** 申请成功后，证书会出现在 [证书管理](/features/certificate-management.md) 列表中。

    2.  **创建自动化部署 (Create Automation Workflow):**
        *   **目的:** 不仅申请证书，还直接创建一个包含"申请 SSL"节点的新的 [自动化部署流水线](/features/automation-workflows.md)，方便后续的自动续期和部署。
        *   **配置项:** 基本与"手动申请"一致，但可能额外包含：
            *   **续签间隔 (Renewal Threshold):** (同工作流节点) 设置自动续期的条件。
        *   **结果:** 跳转到自动化部署流水线的编辑器页面，并预填好"申请 SSL"节点的信息，你可以继续添加"部署 SSL"、"通知"等后续步骤。

## 商用 SSL 证书 (Commercial SSL)

如果你需要更高级别的验证（OV/EV）、更广泛的浏览器兼容性、保险额度或专业支持，可以考虑购买商业 SSL 证书。

系统可能会以卡片形式展示不同类型的商业证书，并按验证级别分类：

*   **DV (Domain Validation):** 只验证域名所有权，签发速度快。
    *   示例：宝塔证书（单域名）、单域名通配符、IP 证书等。
*   **OV (Organization Validation):** 除域名所有权外，还需验证申请单位的真实性，证书详情中会显示单位名称。
    *   示例：单域名、多域名、单域名通配符、多域名通配符等。
*   **EV (Extended Validation):** 最严格的验证，除 OV 信息外，还需验证组织的法律和运营状况。浏览器地址栏通常会显示绿色标识和组织名称。
    *   示例：Sectigo EV (单域名/多域名), sslTrust EV (单域名/多域名) 等。

**重要提示:** 根据你的描述，点击这些商用证书卡片将**直接跳转到** [堡塔公司(宝塔面板)商用 SSL 证书购买界面](https://www.bt.cn/new/ssl.html)。ALLinSSL 在此仅作为入口，不直接处理商业证书的购买流程。

ALLinSSL 与堡塔公司(宝塔面板)商用 SSL 证书商集成的入口，允许用户在工作流中直接使用已购买的商业证书，并且ALLinSSL为每个用户提供了折扣授权码，凭码可享受堡塔公司(宝塔面板)商用 SSL 证书的折扣。

