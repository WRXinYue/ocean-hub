# 共享表单

在 Ocean Web 中打开 `/share`，就会打开一个分享提交表单。如果你想让用户从外部网页与 Ocean 分享页面内容，这个分享表单就很有用。

您可以在 URL 中指定一些选项，包括共享内容，作为查询参数。

### 查询参数

::: tip
所有参数均为**可选**。
:::

| name | description |
| ---- | ---- |
| `title` | title, will be inserted before the main body in brackets |
| `text` | main body |
| `url` | URL, inserted after the main body |

#### 回复信息

您可以指定以下内容之一，使正在撰写的备注成为给定备注的回复。

| name | description |
| ---- | ---- |
| `replyId` | ID of the note you are replying to |
| `replyUri` | URL to reply to (specify the remote note object) |

### 重注信息

您可以通过指定以下信息之一，使正在编写的注释成为给定注释的重注释。

| name | description |
| ---- | ---- |
| `renoteId` | ID of the note to renote |
| `renoteUri` | URL of the note to renote (specify the remote note object) |

#### 出版范围

通过以下选项可以选择范围。

| name | description |
| ---- | ---- |
| `visibility` | one of `public`, `home`, `followers`, `specified` |
| `localOnly` | 0(false) or 1(true) |
| `visibleUserIds` | target user IDs |
| `visibleAccts` | target user [acct](../glossary.md#acct)s (comma separated) |

::: warning
If `visibility` is set to `specified`, either `visibleUserIds` or `visibleAccts` must be set too.
:::

### 附件

您可以使用以下选项指定附件。

| name | description |
| ---- | ---- |
| `fileIds` | IDs of files to be attached (comma separated) |
