# 帮助和提示

框架提供帮助图标组件，鼠标放在`?`上，会显示提示文案。

效果如下：

<iframe src="./demo/help/help.html" width="500px" height="140px" frameborder="0" scrolling="no" style="border: 1px dashed #ccc;padding: 20px;"> </iframe>


使用方法：

1. 引入`help.css`

2. `DOM`结构

```
<div class="help">    
  <!-- ? -->
    <i class="iconfont">&#xe65e;</i>
    <!-- 三角 -->
    <div class="single"></div>
    <!-- 提示文案-->
    <div class="txt">这里是提示文案</div>
 </div>

```