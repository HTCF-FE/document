# 基本样式文件

框架提供三个基本样式文件：`reset.less、baseClass.less、resetMui.less`

### reset.less

重置了浏览器的默认样式

### baseClass.less

提供了一些基本的可重复使用的公用样式，如清除浮动、多余的文字使用`...`代替，透明浮层的透明背景等

使用的时候直接使用对应的`class`即可

### resetMui.less

对`mui`提供的`mui.min.css`上样式的重置，使之更适合`wap`项目的开发

### 以上三个文件以及`mui.min.css`的引入顺序

需要先引入`mui.min.css`，然后是`reset.less`，`baseClass.less`和`resetMui.less`不分前后



