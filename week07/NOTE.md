##### Flex
根据外部容器决定内部尺寸
-	主轴： Flex 延伸的方向
-	交叉轴：垂直的方向
-	交叉轴起点、交叉轴终点、主轴起点、主轴终点，它们可能是 top、left、bottom、right

Flex排版
-	把 flex 项分行
	-	有 flex 属性的 flex 项可以直接放进当前行
	-	不允许换行就直接放入当前行
	-	允许换行，先设定主轴剩余空间为 Flex 容器主轴尺寸，每放入一个就把主轴剩余空间减掉它的主轴尺寸，直到某个 flex 项放不进去为止，换下一行，重复。
-	计算每个 flex 项主轴尺寸和位置。
	-	如果不允许换行，且主轴尺寸超出了Flex容器，则做等比缩放
	-	如果有多行，将主轴剩余空间按Flex比例本行所有的带Flex属性的flex项
	-	如果本行无带flex属性的flex项，justify-content则生效，如果是 flex-start 就要加到第一个 flex 项身上，如果是 center 就给第一个 flex 项加一半的尺寸，如果是 space-between，就要给除了第一个以外的每个 flex 项加上“flex 项数减一分之一”。
-	计算flex项交叉轴尺寸和位置
	-	根据align-content计算每一行的位置
	-	再根据alignItems 和flex项的alignSelf来确定每个元素在行内的位置