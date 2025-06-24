# ALLinSSL 插件开发文档

## 1. 插件概述

ALLinSSL 插件是独立的 Go 程序，通过标准输入/输出与主程序通信，处理特定功能如证书部署、上传等操作。插件采用 JSON 格式进行数据交换。

## 2. 插件目录结构

标准插件目录结构如下：

```
插件名称/
  ├── main.go       # 入口文件，处理请求分发
  ├── action.go     # 实现具体动作逻辑
  └── 子功能目录/    # 可选，按功能划分代码
      └── action.go # 特定功能实现
```

## 3. 插件通信协议

### 3.1 请求格式

```go
type Request struct {
    Action string                 `json:"action"`  // 要执行的动作
    Params map[string]interface{} `json:"params"`  // 动作参数
}
```

### 3.2 响应格式

```go
type Response struct {
    Status  string                 `json:"status"`  // "success" 或 "error"
    Message string                 `json:"message"` // 响应消息
    Result  map[string]interface{} `json:"result"`  // 返回结果
}
```

## 4. 插件元数据

每个插件需定义元数据，包括：

```go
var pluginMeta = map[string]interface{}{
    "name":        "插件名称",
    "description": "插件描述",
    "version":     "版本号",
    "author":      "作者",
    "config":      map[string]interface{}{
        // 插件配置项
    },
    "actions": []ActionInfo{
        // 支持的动作列表
    },
}
```

## 5. 标准动作实现

所有插件必须实现的标准动作：

- `get_metadata`: 返回插件元数据
- `list_actions`: 返回插件支持的动作列表

## 6. 插件开发步骤

### 6.1 创建基本文件结构

1. 在 `plugins` 目录下创建插件目录
2. 创建 `main.go` 和 `action.go` 文件

### 6.2 定义插件元数据和动作

在 `main.go` 中：

```go
type ActionInfo struct {
    Name        string         `json:"name"`
    Description string         `json:"description"`
    Params      map[string]any `json:"params,omitempty"`
}

var pluginMeta = map[string]interface{}{
    "name":        "your_plugin",
    "description": "插件描述",
    "version":     "1.0.0",
    "actions": []ActionInfo{
        {
            Name:        "yourAction",
            Description: "动作描述",
            Params: map[string]any{
                "param1": "参数1说明",
            },
        },
    },
}
```

### 6.3 实现请求处理逻辑

main.go 中实现主流程：

```go
func main() {
    var req Request
    input, err := io.ReadAll(os.Stdin)
    if err != nil {
        outputError("读取输入失败", err)
        return
    }

    if err := json.Unmarshal(input, &req); err != nil {
        outputError("解析请求失败", err)
        return
    }

    switch req.Action {
    case "get_metadata":
        // 处理获取元数据
    case "list_actions":
        // 处理获取动作列表
    case "yourAction":
        // 调用自定义动作处理函数
        rep, err := yourAction(req.Params)
        if err != nil {
            outputError("处理失败", err)
            return
        }
        outputJSON(rep)
    default:
        outputJSON(&Response{
            Status:  "error",
            Message: "未知 action: " + req.Action,
        })
    }
}
```

### 6.4 在 action.go 中实现具体动作

```go
func yourAction(params map[string]interface{}) (*Response, error) {
    // 实现动作逻辑
    return &Response{
        Status:  "success",
        Message: "操作成功",
        Result:  map[string]interface{}{"key": "value"},
    }, nil
}
```

## 7. 插件测试

1. 创建测试文件（如 `your_plugin_test.go`）
2. 编写单元测试，模拟请求和验证响应
3. 运行 `go test` 进行测试

## 8. 示例参考

参考 aliyun 插件和 doge 插件的实现作为开发模板。

以上就是 ALLinSSL 插件开发的基本流程和规范，遵循这些规则可以确保插件与主系统正常交互。