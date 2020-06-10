##### Animation
-	animation-name 动画的名称，@keyframes 
-	animation-duration 动画的时长
-	animation-timing-function 动画的时间曲线
-	animation-delay 动画开始前的延迟
-	animation-iteration-count 动画的播放次数
-	animation-direction 动画的方向

##### Transition
-	transition-property 要变换的属性
-	transition-duration 变换的时长
-	transition-timing-function 时间曲线
-	transition-delay 延迟

##### HTML
###### head标签，必须是第一个标签，内容必须包含title
head标签中可包含：
- title标签，表示文档的标题
- base标签，给页面所有的url相对地址提供基础
- meta标签，一组键值对name， content
	- 具有charset属性的meta，无需键值对，描述html编码形式
	- 具有http-equiv属性的meta标签，表示执行一个命令，无需name
		- http-equiv = "content-type", 指定http编码方式
		- http-equiv = "content-language", 指定内容的语言
		- http-equiv = "default-style"，指定默认样式表
		- http-equiv = "set-cookie"，刷新
		- http-equiv = "set-cookie"，设置cookie
		- http-equiv = "x-ua-compatible"，声明ua兼容性
		- http-equiv ="content-security-policy"， 声明内容安全策略
	- name 为viewport的meta
		- `<meta name="viewport" content="width=500, initial-scale=1">`
		- with：页面宽度
		- height：页面高度
		- initial-scale：初始缩放比例
		- minimum-scale：最小缩放比例
		- maximum-scale：最大缩放比例
		- user-scalable：是否允许用户缩放

##### DOM
###### DOM Tree

###### Events
-	target.addEventListener(type, listener [, options]); options: capture, once, passive
	-	once, 只执行一次
	-	capture
	-	passive
	-	document.body.addEventListener('click', {handleEvent: function(){}})
	-	捕获, capture
	-	冒泡, bubble
- Node
	- 属性
		- Node.childNodes
		- Node.firstChild
		- Node.lastChild
		- Node.nextSibling
		- Node.parentNode
		- Node.parentElement
		- Node.previousSibling
	- 方法
		- appendChild
		- cloneNode
		- contains
		- insertBefore
		- isEqualNode
		- isSameNode
		- removeChild
		- replaceChild
