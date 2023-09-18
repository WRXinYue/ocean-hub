# 时间线

时间线按时间倒序显示[notes](.note)。
时间线有如下所示的不同类型，并且显示的注释根据类型的不同而不同。
请注意，实例可能会禁用某些类型的时间线。

## 家

将显示您关注的用户的帖子。 缩写为HTL。

## 当地的

将显示所有不具有“主页”可见性的本地用户的帖子。 缩写为 LTL。

## 社会的

将显示您关注的用户的帖子以及所有不具有“主页”可见性的本地用户的帖子。 缩写为STL。 可以将其视为 STL = HTL + LTL。

## 全球的

所有不具有“主页”可见性的本地用户帖子以及到达服务器的所有不具有“主页”可见性的远程用户帖子。 缩写为GTL。

## 自定义时间线

Ocean 还有其他功能，您可以在其中创建更精细的时间线。 详细信息请参见[列表](./list.md)和[天线](./antenna.md)。

## Comparison

| Source                |            |        |   Timeline |       |            |
|-----------------------|------------|--------|---------|------------|------------|
| User                  | Visibility | Home   | Local    | Social     | Global |
| Local (Followers)     | Public     | ✔      | ✔        | ✔          | ✔          |
|                       | Home       | ✔      |          | ✔          |            |
|                       | Followers  | ✔      |          | ✔          |            |
| Remote (Followers)    | Public     | ✔      |          | ✔          | ✔          |
|                       | Home       | ✔      |          | ✔          |            |
|                       | Followers  | ✔      |          | ✔          |            |
| local (Non-followers) | Public     |        | ✔        | ✔          | ✔          |
|                       | Home       |        |          |            |            |
|                       | Followers  |        |          |            |            |
| Remote (Non-followers)| Public     |        |          |            | ✔          |
|                       | Home       |        |          |            |            |
|                       | Followers  |        |          |            |            |
