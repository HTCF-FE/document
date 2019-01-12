# loading加载中

效果是这样滴：

<iframe src="./demo/loading/loading.html" width="300px" height="200px" frameborder="0" scrolling="no" style="border: 1px dashed #ccc;"> </iframe>

`DOM`结构：

```
<div id="loading" style="background:rgba(0,0,0,0.5);position:fixed;top:0;bottom:0;left:0;right:0;z-index:999">
	<img style="width:300px;height:300px;position:fixed;left:50%;top:50%;margin:-150px 0 0 -150px;z-index:9999" src="./loading.gif" alt="">
</div> 

```

使用时将这段结构直接放入页面中即可。

默认是显示的。

为了方便地在各个页面各个项目使用，样式写在行内。