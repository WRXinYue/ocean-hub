# 网络钩子

::: tip
该功能从 Ocean 12.109.0 版开始提供。
:::

::: warning
这是一项试验性功能，可能不稳定或将来会有变化。
:::

Ocean 提供网络钩子，让您可以实时接收来自 Ocean 的各种事件。

您可以进入 "设置">"网络钩子 "管理网络钩子。

注册 Webhook 后，每次发生指定事件时，都会向指定 URL 发送 HTTP 请求。请求方法将是 POST，正文中包含 JSON。
此外，请求头还将包含注册时设置的密文，名称为 "X-Ocean-Hook-Secret"。你可以使用该秘密验证请求是否合法。

有效载荷将包含以下属性。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		hookId: {
			type: 'string',
			description: 'Webhook ID',
		},
		userId: {
			type: 'string',
			description: 'User ID of webhook creator',
		},
		eventId: {
			type: 'string',
			description: 'Event ID',
		},
		createdAt: {
			type: 'integer',
			description: 'Date and time of event occurrence (UNIX time, ms)',
		},
		type: {
			type: 'string',
			description: 'Event type',
		},
		body: {
			type: 'object',
			description: 'Event payload',
		},
	}
}"/>

如果目标服务器返回 5XX 错误或没有响应，请求会在延迟一段时间后重新发送。

Webhooks 可以通过管理屏幕单独更改其激活状态，以暂时停止发送请求。

## 事件

以下是每种事件类型的说明和有效载荷。

### 关注

当您关注某人时发生。

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'ocean://User',
			description: 'User that is followed',
		},
	}
}"/>

### followed

Occurs when you are followed by someone.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'ocean://User',
			description: 'User that is following you',
		},
	}
}"/>

### unfollow

Occurs when you unfollow someone.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		user: {
			$ref: 'ocean://User',
			description: 'The user being unfollowed',
		},
	}
}"/>

### note

Occurs when you post a note.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'ocean://Note',
			description: 'The composed note',
		},
	}
}"/>

### reply

Occurs when someone has replied to your note.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'ocean://Note',
			description: 'The reply',
		},
	}
}"/>

### renote

Occurs when your note is renoted.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'ocean://Note',
			description: 'Renote',
		},
	}
}"/>

### mention

Occurs when someone has mentioned you.

<MkSchemaViewerItemObject :schema="{
	type: 'object',
	properties: {
		note: {
			$ref: 'ocean://Note',
			description: 'The note that contains the mention',
		},
	}
}"/>
