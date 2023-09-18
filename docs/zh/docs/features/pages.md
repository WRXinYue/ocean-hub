# 页数

Ocean Pages 是一项可以创建自定义网页的功能。 您可以在其中包含不同类型的媒体和格式。 甚至运行编程脚本。 与 Ocean 的许多其他区域一样，您可以使用 MFM 格式化您的内容。

Ocean 中的页面由不同类型的块组成，并且可以通过拖放来移动块。

## 内容块

内容块向用户显示不同类型的内容。

### 部分

可以包含其他块的分组块。 每个内容块都有一个标题，该标题将显示在其顶部。

### 文本

向用户显示文本内容。 文本内容可以格式化，并且可以包含变量插值（请参阅下面的变量）。

### 图片

显示您可以从驱动器中选择的图像。

### 文本区域

显示文本区域标记中的文本。 该块不支持 MFM，但允许变量插值。

### 嵌入式注释

TODO

### 画布

TODO

## 输入块

输入块可用于创建带有表单元素的交互式页面。 这些块可用于与页面中的变量和脚本进行交互。

## 特殊块

特殊块为您的页面提供独特的功能。 这包括注释发布表单和页面控制流程。

## 变量

变量可用于创建动态页面。 您可以通过在文本中写入 <b>{ 变量名称 }</b> 来嵌入变量的值。 例如，在 <b>Hello { thing } world!</b> 中，如果变量（thing）的值为 <b>ai</b>，则文本将变为 <b>Hello ai world!</b>.

变量是从上到下计算的，因此您不能在给定变量中引用下面定义的变量。 例如，如果有三个变量 <b>A, B, C</b>，按该顺序定义，则可以在内部引用 <b>A</b> 和 <b>B</b> <b>C</b> 的定义； 但是，<b>B</b> 和 <b>C</b> 不能在 <b>A</b> 内部引用。

要接收用户的输入，请在页面上放置一个“输入”块，并将“变量名称”设置为要在其中存储值的变量的名称（该变量将由块自动创建）。
该变量可用于响应用户输入执行操作。

函数可用于以可重用的形式封装值计算。 要创建函数，请创建“Function”类型的变量。 函数可以有槽（参数），并且槽的值可用作函数内的变量。 还有一些函数称为高阶函数，它们采用另一个函数作为参数。 可以在此类高阶函数的槽中内联预定义或实例化函数。