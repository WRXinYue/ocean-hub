# 配置

您可以使用 [`any-sync-network`](https://github.com/anyproto/any-sync-tools) 工具为节点和网络生成基本配置。

## 网络配置选项

```yaml
# 必需; 描述 any-sync 网络拓扑
networkId: # 必需; 网络公钥
nodes:     # 必需; 节点数组
  - peerId:    # 必需; 节点的帐户 peer ID
    addresses: # 必需; 节点地址的数组
    types:     # 必需; 节点类型的数组，
               # 允许的值: tree（用于同步节点）, file, coordinator
```
