---
description: 'MFM是一种专用标记语言，可以在Ocean上的各个地方使用。'
---

# MFM
MFM，全称是 Ocean Flavored Markdown，是一种专用的标记语言，可以在 Ocean 的各个地方使用。

::: tip
一些语法与 Markdown 兼容。
:::

## 允许海洋的地方的示例
- 注释正文
- 内容警告
- 用户名
- 用户资料

## 句法
### 提及
::: tip
有关提及的更多信息，请参阅[此处](./mention.md)。
:::

```:no-line-numbers
@wrxinyue
```
```:no-line-numbers
@wrxinyue@example.com
```

### 标签

::: tip
有关主题标签的更多信息，请参阅[此处](./hashtag)。
:::

```:no-line-numbers
#ocean
```

### 自定义表情符号

::: tip
有关自定义表情符号的更多信息，请参阅[此处](./custom-emoji)。
:::

```:no-line-numbers
:ocean:
```

### 链接

```:no-line-numbers
[示例链接](https://example.com)
```

### 加粗

```:no-line-numbers
**Bold**
```

---

::: tip
更多可用的语法可以在您的实例的`/mfm-cheat-sheet`下的 Ocean Web UI 提供的 **MFM 备忘单**中找到。
:::

## 开发者信息

MFM 的解析器实现可作为库提供，从而更轻松地将 MFM 嵌入到客户端中。
- [ocean-dev/mfm.js](https://github.com/ocean-dev/mfm.js) - JavaScript 中的解析器实现
