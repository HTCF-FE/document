# 用户操作步骤及当前标识

框架提供操作步骤及当前标识的UI组件，效果如下：

<iframe src="./demo/stepAction/stepAction.html" width="700px" height="400px" frameborder="0" scrolling="no" style="border: 1px dashed #ccc;padding: 20px;"> </iframe>


说明：

1. 需要引入`stepAction.css`或`stepAction.less`

2. `DOM`结构

```
<ul class="stepAction clearfix">
    <li  num="1">
          <span class="iconfont">&#xe608;</span>
          <span class="outerCircle"></span>
          <span class="line"></span>
          <span class="innerCircle"></span>
          <span class="title">第一步</span>
    </li>
    <li num="2" class="active">
          <span class="iconfont">&#xe608;</span>
          <span class="outerCircle"></span>
          <span class="line"></span>
          <span class="innerCircle"></span>
          <span class="title">第二步</span>
    </li>
    <li num="3">
          <span class="iconfont">&#xe608;</span>
          <span class="outerCircle"></span>
          <span class="line"></span>
          <span class="innerCircle"></span>
          <span class="title">第三步</span>
    </li>
    <li num="4">
          <span class="iconfont">&#xe608;</span>
          <span class="outerCircle"></span>
          <span class="line"></span>
          <span class="innerCircle"></span>
          <span class="title">第四步</span>
    </li>
</ul>
```

`stepAction`为该组件的容器，当前的步骤用`active`标识。

该组件采用`table-cell`平均分配`li`在一行上的宽度，因此无论有多少个`li`都可以平均分配，无需针对设置宽度。


