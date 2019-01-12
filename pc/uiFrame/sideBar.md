# 页面右下角浮动导航

框架提供浮动导航，用于pc网站常见的右下角浮动导航效果。效果如下：

<iframe src="./demo/sideBar/sideBar.html" width="600px" height="500px" frameborder="0" scrolling="no" style="border: 1px dashed #ccc;padding: 20px;"> </iframe>

说明：

1. 需要引入`sideBar.css`

2. `DOM`结构

```
<div class="sideBar">
	<!-- 导航一 -->
	<div class="sideBtn">
		<a href="javascript:;" class="sideBtnA" target="_blank">
			<i class="iconfont">&#xe62c;</i>
			<span class="name">导航一</span>
		</a>
	</div>
	<!-- 导航二 -->
	<div class="sideBtn">
		<a href="javascript:;" >
			<i class="iconfont">&#xe62f;</i>
			<span class="name">导航二</span>
		</a>
	</div>
	<!-- 导航三 -->
	<div class="sideBtn"> 
		<a href="javascript:;" class="sideBtnA" >
			<i class="iconfont">&#xe616;</i>
			<span class="name">导航三</span>
		</a>
	</div>
	<!-- 导航四 -->
	<div class="sideBtn">
		<a href="javascript:;" class="sideBtnA" >
			<i class="iconfont">&#xe60b;</i>
			<span class="name">导航四</span>
		</a>
	</div>
</div>
```

`sideBar`是该导航的容器，每一个`sideBtn`都是一个导航按钮。