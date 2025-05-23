# 监控 (Monitoring)

监控功能用于定期检查你的域名和关联的 SSL/TLS 证书状态，并在发现问题（如证书即将到期、验证失败）时及时告警。

## 监控列表

![监控列表示例](/images/monitoring.png)

*   **搜索:** 你可以根据域名进行搜索。
*   **列表 (带分页，表头可自定义):**
    *   **域名 (Domain):** 被监控的目标域名。
    *   **证书域名 (Certificate Domains):** 该域名当前部署的 SSL 证书所涵盖的域名列表。
    *   **证书颁发机构 (Issuer):** 当前证书的签发机构。
    *   **证书状态 (Certificate Status):** 显示当前证书的有效性状态（例如 有效、即将到期、已过期、无效）。
    *   **证书到期时间 (Expiration Date):** 当前证书的到期日期。
    *   **告警渠道 (Alert Channel):** 当检测到异常时，通知会发送到哪个预设的渠道。
    *   **启用状态 (Enabled Status):** 该监控任务是否启用。你可以直接在列表上点击切换启用/停用状态。
    *   **检测周期 (Check Interval):** 多久执行一次检测（例如 5 分钟、1 小时）。
    *   **检测状态 (Check Status):** 显示最近一次检测的结果（例如 正常、异常、检测中）。
    *   **上次检查时间 (Last Check Time):** 最近一次执行检测的时间。
    *   **最后一次异常时间 (Last Abnormal Time):** 如果发生过异常，记录最近一次发生异常的时间。
    *   **创建时间 (Creation Date):** 该监控任务的创建时间。
    *   **(自定义表头):** 用户可以根据需要选择显示或隐藏某些列。
*   **操作 (Actions):**
    *   **编辑 (Edit):** 修改监控任务的配置（如域名、检测周期、告警渠道）。
    *   **删除 (Delete):** 删除该监控任务。

## 添加监控任务 (Add Monitoring Task)

点击"添加"按钮，创建新的监控任务。

*   **域名 (Domain):** 输入需要监控的域名（通常是 HTTPS 访问的域名，例如 `https://yourdomain.com`）。
*   **检测周期 (Check Interval):** 设置检查频率（例如每 5 分钟、每小时、每天）。默认可能是 5 分钟。
*   **告警渠道 (Alert Channel):** 选择一个或多个在检测到异常时接收通知的渠道（需要预先在系统 [设置](/features/settings.md) 中配置）。

添加监控任务后，系统会定期连接指定域名，获取其 SSL 证书信息，检查有效期、信任链等，并根据结果更新状态和触发告警。
