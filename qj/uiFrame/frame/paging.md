# 分页

效果如下:

<iframe src="../demo/paging/paging.html" height="250px" frameborder="0" scrolling="no" style="border: 1px dashed #ccc;"> </iframe>


### 文件目录：

![PNG](../../demo/img/paging.png)

- `js`
	- `paging.js`，存放分页组件的底层`paging.js`
- `paging.html` 分页组件的模板（目前使用`ejs`模板）
- `paging.less` 分页组件的样式
- `usePaging.js` 外部调用的分页组件的入口，这个文件会引用`paging.js`



### 使用方法：

1. 引入`usePaging.js`，引入`paging.html`并设置分页组件的唯一id，引入`paging.less`

2. `js`中，调用`usePaging.js`导出的分页组件的入口方法，进行初始化

3. 每一个分页只在页码为`1`时初始化即可，点击页码的`ajax`请求应该写在`callback`中