  
##### 选择器语法
简单选择器
```
*
div svg|a  （| namespace）
.cls
#id
[attr=value]
:hover
::before
```
复合选择器
```
<简单选择器><简单选择器><简单选择器>
* 或 div 必须写在最前面
```
复杂选择器
```
<复合选择器><sp><复合选择器>
<复合选择器>">"<复合选择器>
<复合选择器>"~"<复合选择器>
<复合选择器>+<复合选择器>
<复合选择器>||<复合选择器>
```

##### BOX（盒）
- 排版渲染的基本单位是盒
- css 选择其中选中的是元素，可能会产生多个 盒
##### 盒模型
- 分成4层，content， padding， border， margin
- content-box: width => content-box
- border-box: width => content-box + border + padding

##### 正常流 （normal flow）
###### 正常流排版
-	收集盒进行
-	计算盒在行中的排布
-	计算行的排布

IFC  (Inline Formatting Content)
BFC (Block Formatting Content)
###### 行模型
inline-block
-	保证最高元素对齐正确
-	如果子元素超过line-height,以最高的子元素为行高
-	如果子元素都未超过line-height,以line-height为行高
-	建议只使用top, bottom, middle
##### float 与clear

BFC
正常流中正常元素设置了overflow:hidden， 会产生边距重叠

block-level 表示可以被放入bfc，都是正常流
-	block-levels: flex. table, grid, block

block-cotainer 表示可以容纳bfc
-	inline-block, block....

block-box = block-level+block-container
block-box 如果overflow是visible，就跟父bfc合并

选择器语法
简单选择器

*
div svg|a  （| namespace）
.cls
#id
[attr=value]
:hover
::before
复合选择器

<简单选择器><简单选择器><简单选择器>
* 或 div 必须写在最前面
复杂选择器

<复合选择器><sp><复合选择器>
<复合选择器>">"<复合选择器>
<复合选择器>"~"<复合选择器>
<复合选择器>+<复合选择器>
<复合选择器>||<复合选择器>
BOX（盒）
排版渲染的基本单位是盒

css 选择其中选中的是元素，可能会产生多个 盒

盒模型
分成4层，content， padding， border， margin

content-box: width => content-box

border-box: width => content-box + border + padding

正常流 （normal flow）
正常流排版
收集盒进行

计算盒在行中的排布

计算行的排布

IFC (Inline Formatting Content)
BFC (Block Formatting Content)

行模型
inline-block

保证最高元素对齐正确

如果子元素超过line-height,以最高的子元素为行高

如果子元素都未超过line-height,以line-height为行高

建议只使用top, bottom, middle

float 与clear
BFC
正常流中正常元素设置了overflow:hidden， 会产生边距重叠

block-level 表示可以被放入bfc，都是正常流

block-levels: flex. table, grid, block

block-cotainer 表示可以容纳bfc

inline-block, block….

block-box = block-level+block-container
block-box 如果overflow是visible，就跟父bfc合并

 绑定印象笔记账号
 绑定 Evernote International 账号
当前文档
 恢复至上次同步状态
 删除文档
 导出...
 预览文档
 分享链接
系统
 设置
 下载桌面客户端
 下载离线Chrome App
 使用说明
 快捷帮助
 常见问题
 关于
搜索文件
Untitled 
选择器语法 
Flex 
有限状态机 
Objects in EMCA 
Types 
Untitled 
Untitled 
编程语言通识 
数据分析 
Performance 接口 
Untitled 
Untitled 
Untitled 
Untitled 
检测到该文件正在被另一窗口编辑，开启只读模式
