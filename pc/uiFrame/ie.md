# 判断IE版本

PC框架提供了判断IE版本的方法，兼容各浏览器~

方法如下：

```
var ua = navigator.userAgent, //存放当前浏览器ua
	//isIE = UA.indexOf('MSIE') > -1, //ie6 7使用MSIE 判断
	v = 10, //设置为>9的数字（因为兼容到IE9，这个数字只要设置成比兼容的版本大的就可以）
	ieBrowser = false; //标识当前是否为IE浏览器

if(ua.indexOf('MSIE') > -1){ //如果是IE
	
	//获取IE版本	
	//这里IE6.7使用MSIE判断
	//其他IE版本不是，因此有个if else

	if(UA.match(/MSIE (\d+\.\d+)/)){ 
		v = Number(UA.match(/MSIE (\d+\.\d+)/)[1]);
	}else{
		v = /\d+/.exec(UA.split(';')[1]);
	}  
}

//最后得出的v就是IE版本了
//可以根据v的值进行不同版本的处理

if(v < 9){
	//这里的版本<9
}else {
	//这里的版本为9+
}

```