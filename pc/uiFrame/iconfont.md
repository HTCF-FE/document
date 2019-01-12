# iconfont

`iconfont`使用阿里巴巴的`Iconfont`图标库，本框架已将图标全部下载到本地，使用时需要引入图标文件及样式文件。

相关文件全部在`iconfont`文件夹下。

使用方法：

1. 引入样式文件`iconfont.css`

2. `iconfont.css`中，有这样一段话

```
@font-face {font-family: "iconfont";
  src: url('iconfont.eot?t=1498614572698'); /* IE9*/
  src: url('iconfont.eot?t=1498614572698#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('iconfont.woff?t=1498614572698') format('woff'), /* chrome, firefox */
  url('iconfont.ttf?t=1498614572698') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('iconfont.svg?t=1498614572698#iconfont') format('svg'); /* iOS 4.1- */

```

这里的`iconfont.eot  iconfont.woff   iconfont.ttf   iconfont.svg`都是字体库，为了兼容不同浏览器因此有多个不同版本

这里是使用相对路径引入的，因此使用时如果挪动了字体库位置，要对应修改这里的引用路径

3. 然后就可以直接使用iconfont了，有两种方法：

	1）写在`DOM`结构中，如：

		```
		<i class="iconfont">&#xe6a1;</i>
		```

		需要给`i`添加`class`为`iconfont`
	2）写在`:after  :before'伪类中，如有这样一个结构：
		```
		<div class="name">这是名字</div>
		```
		需要给`这是名字`几个字后面添加一个`iconfont`图标，可以在样式里这样写：

		```
		.name:after{
			content: '\e6a1';
			font-family: 'iconfont';
		}
		```
