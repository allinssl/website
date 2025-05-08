# 授权 API 管理 (API Key Management)

此页面用于管理 ALLinSSL 与其他服务交互所需的凭证和 API 密钥。例如，申请证书时需要 DNS 提供商的 API 密钥进行域名验证，部署证书时可能需要服务器的 SSH 凭证、云平台的 API 密钥或面板的接口密钥。

集中管理这些授权信息可以避免在多个工作流中重复输入，并提高安全性。

## API 授权列表

![添加API授权示例](/images/api-list.png)

## 添加授权 API (Add API Key)

点击"添加"按钮，会弹出一个表单让你选择并填写不同类型的授权信息：

*   **名称 (Name):** 为此授权起一个易于识别的名称。
*   **授权 API 类型 (Provider/Type):** 下拉选择需要添加凭证的服务类型。

根据选择的类型，需要填写的字段会有所不同：

### 1. SSH

*   **服务器 IP (Host IP):** 目标服务器的 IP 地址或域名。
*   **SSH 端口 (Port):** SSH 连接端口（默认填充 22）。
*   **用户名 (Username):** 登录服务器的用户名（默认填充 root）。
*   **验证类型 (Authentication Type):**
    *   **密码 (Password):** 直接输入登录密码。
    *   **SSH 密钥 (SSH Key):** 粘贴 SSH 私钥内容。
        *   **(可选) SSH 密钥口令 (Key Passphrase):** 如果你的私钥设置了密码保护，在此输入。

### 2. 宝塔面板 (BT Panel)

*   **宝塔面板登录地址 (Panel URL):** 你的宝塔面板访问地址，例如 `http://<服务器IP>:8888`。
*   **API 接口密钥 (API Key):** 在宝塔面板的"面板设置" -> "API 接口"中获取的密钥。

### 3. 1Panel

*   **1Panel 登录地址 (Panel URL):** 你的 1Panel 访问地址。
*   **API 接口密钥 (API Key):** 在 1Panel 的设置中生成的 API 密钥。

### 4. 阿里云 (AK/SK)

*   **AccessKeyId:** 阿里云 RAM 用户的 AccessKey ID。
*   **AccessKeySecret:** 对应的 AccessKey Secret。
    *   **权限建议:** 为了安全，建议创建一个拥有所需最小权限（例如 DNS 管理 `AliyunDNSFullAccess`，CDN 管理 `AliyunCDNFullAccess`，WAF 管理相关权限等）的 RAM 用户，并使用其 AK/SK。

### 5. 腾讯云 (AK/SK)

*   **SecretId:** 腾讯云 CAM 用户的 Secret ID。
*   **SecretKey:** 对应的 Secret Key。
    *   **权限建议:** 同阿里云，建议创建拥有最小所需权限（例如 DNSPod 管理 `QcloudDNSPodFullAccess`，CDN 管理 `QcloudCDNFullAccess`，WAF 管理相关权限等）的 CAM 子用户，并使用其凭证。

### (后续将会支持的类型...也可能更多)

*   **Cloudflare API Token:** 用于 Cloudflare DNS 验证。
*   **DNSPod API Token:** 用于 DNSPod (国内版/国际版) DNS 验证。
*   **其他 DNS 提供商:** (根据支持情况添加)

添加完成后，这些授权信息就可以在自动化部署流水线的"申请 SSL"和"部署 SSL"节点中被选择使用。
