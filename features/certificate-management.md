# 证书管理 (Certificate Management)

证书管理页面是你集中查看、管理和操作所有 SSL/TLS 证书的地方，包括通过自动化流水线申请的证书和手动上传的证书。

## 证书列表

![证书列表示例](/images/certificate.png)

*   **查询/搜索:** 你可以根据域名进行搜索。
*   **列表 (带分页):**
    *   **域名 (Domains):** 证书涵盖的主域名和 SAN (主题备用名称) 域名。
    *   **品牌/颁发机构 (Issuer/Brand):** 证书的签发机构，例如 Let's Encrypt, Sectigo, DigiCert 等。
    *   **剩余天数 (Days Remaining):** 证书距离到期的剩余天数。通常会用不同颜色或图标高亮显示即将到期（如 < 30 天）或已到期的证书。
    *   **到期时间 (Expiration Date):** 证书的具体到期日期。
    *   **来源 (Source):** 表明证书是如何添加到系统中的，例如 "自动申请 (Workflow: <流水线名称>)" 或 "手动上传"。
    *   **添加时间 (Added Date):** 证书被添加到系统中的时间。
*   **操作:**
    *   **下载 (Download):** 提供下载证书文件的选项，可能包括 PEM (证书链 + 私钥), PFX, JKS 等格式。
    *   **删除 (Delete):** 从 ALLinSSL 系统中移除该证书记录。注意：这通常不会从已部署的服务器上删除证书文件。

## 上传证书 (Upload Certificate)

除了通过自动化流水线申请，你也可以手动上传已有的证书到 ALLinSSL 进行统一管理。

通常提供两种上传方式：

1.  **粘贴内容 (Paste Content):**
    *   分别粘贴证书内容 (PEM 格式，通常以 `-----BEGIN CERTIFICATE-----` 开头)
    *   私钥内容 (PEM 格式，通常以 `-----BEGIN PRIVATE KEY-----` 或 `-----BEGIN EC PRIVATE KEY-----` 等开头)
    *   (可选) 中级证书链内容 (Intermediate CA Chain)

2.  **上传文件 (codeing~):**
    *   直接选择并上传证书文件 (`.crt`, `.pem`, `.cer`)
    *   私钥文件 (`.key`, `.pem`)
    *   (可选) 中级证书链文件
    *   系统需要支持解析这些常见的证书文件格式。

上传成功后，该证书将出现在证书列表中，并可以用于后续的部署或监控。
