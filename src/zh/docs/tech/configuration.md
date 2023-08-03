# 配置

您可以使用 [`any-sync-network`](https://github.com/anyproto/any-sync-tools) 工具为您的节点生成基本配置。

## 通用节点配置选项

这些选项对于所有类型的 Any-Sync 节点都是通用的。

```yaml
# 必需; 用于在网络内传播的账户
account: 
  peerId:          # 必需; 公钥
  peerKey:         # 必需; 私钥
  signingKey:      # 必需; 私钥,
                   # 协调器节点使用网络的私钥
                   # 同步和文件节点使用它们的 peerKey

# 必需; tcp/yamux 网络配置
yamux:
  listenAddrs:     # 必需; 节点应监听的地址数组
  writeTimeoutSec: # 必需
  dialTimeoutSec:  # 必需

# 必需; 描述 any-sync 网络拓扑
network:
  id:              # 必需; 配置 ID
  networkId:       # 必需; 网络公钥
  nodes:           # 必需; 节点数组
    - peerId:        # 必需; 节点的账户 peer ID
      addresses:     # 必需; 节点地址数组
      types:         # 必需; 节点类型数组,
                     # 允许的值: tree（对于同步节点）, file, coordinator
  creationTime:    # 必需; 配置的创建时间

# 必需; 存储当前配置的路径
networkStorePath: 

# 可选; dRPC 参数
drpc:
  stream:
    maxMsgSizeMb:  # 必需

# 可选; Prometheus 监控监听器配置
metric:
  addr:            # 可选; Prometheus 监控监听地址
```

## 协调器节点配置选项

这些选项对 Any-Sync 协调器节点特定。

```yaml
# 必需; MongoDB 配置
mongo:
  connect:            # 必需; MongoDB 连接 URL
  database:           # 必需; MongoDB 数据库名称

# 必需; 空间状态更新配置
spaceStatus:
  runSeconds:         # 必需; 空间状态更新频率
  deletionPeriodDays: # 必需; 空间数据删除周期
  ```

## 同步节点配置选项

这些选项对 Any-Sync 同步节点特定。

```yaml
# 必需; 网络配置更新间隔
# 描述节点从协调器节点请求网络配置的频率
networkUpdateIntervalSec: 

# 必需; 空间缓存设置
space:
  gcTTL:             # 必需; 空间缓存在内存中的生存时间
  syncPeriod:        # 必需

# 必需; 空间数据存储配置
storage:
  path:              # 必需; 本地空间数据存储路径

# 必需; 直接节点间（无协调器）同步配置
nodeSync:
  hotSync:           # 必需
    simultaneousRequests: # 必需
  syncOnStart:       # 必需; 标志（布尔值）
  periodicSyncHours: # 必需

# 必需; 日志配置
log:
  production:        # 必需; 标志（布尔值）
  defaultLevel:      # 必需
  namedLevels:       # 必需

# 可选; 调试 API 监听器配置，不得公开
apiServer:
  listenAddr:        # 可选; 调试 API 监听地址
```

## 文件节点配置选项

这些选项对 Any-Sync 文件节点特定。

```yaml
# 必需; S3 配置
s3Store:
  endpoints:  # 可选; 与 S3 兼容的对象存储端点
  region:     # 必需; S3 区域名称
  profile:    # 必需; S3 配置文件名称
  bucket:     # 必需; S3 存储桶名称
  maxThreads: # 必需; 最大线程数量

# 必需; Redis 配置
redis:
  isCluster:  # 必需; Redis 集群标志（布尔值）
  url:        # 必需; Redis 连接 URL

# 必需; 网络配置更新间隔
# 描述节点从协调器节点请求网络配置的频率
networkUpdateIntervalSec:

# 可选; 文件节点开发模式存储路径
# 文件节点可以在开发模式下构建（`make build-dev`），绕过 S3，不可靠
fileDevStore:
  path:       # 可选; 本地文件存储路径
```

