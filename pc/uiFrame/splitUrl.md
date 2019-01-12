# 拆分并获取地址栏参数


框架提供从当前页面的地址`url`中拆分并获取参数的方法，需要引入`splitUrl.js`


逻辑说明在`splitUrl.js`中

例：此处使用`require`引入`splitUrl.js`

```
var splitUrl = require('./splitUrl.js');

var arg = splitUrl();  //arg即为当前地址栏里？后的所有参数及值组成的数组

//想要取得url参数的值
var url = arg['url'];

```