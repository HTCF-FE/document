/**
 * 给所有图片添加点击放大事件
 *
 * @author yangjinlai 2018-05-23
 *
 * 可以直接使用jQuery
 */

require(['gitbook', 'jQuery'], function (gitbook, $) {

	var $body = $('body');
	
	//放大图片
	$body.append('<div class="img_openBig_uiFrame"><img src="" class="openBig_img"></div>');

	//放大代码
	$body.append('<div class="code_OpenBig_uiFrame"><code class="openBig_code"></code></div');

	//在code区域上添加放大按钮
	var bigButton = '<button class="enlarge_button">Enlarge</button>';
	$body.find('.book .book-body .page-wrapper .page-inner section.normal pre').append(bigButton);

	/**
	 * 显示放大区域
	 * src是需要放大显示的图片的路径
	 */
	function showOpenBig( type, str ){
		if( type == 'img'){
			//放大图片
			$('.img_openBig_uiFrame').show().find('.openBig_img').attr('src', str);
		}
		else{
			//放大代码
			$('.code_OpenBig_uiFrame').show().find('.openBig_code').html(str);
		}
		
	}	

	/**
	 * 隐藏放大区域
	 */
	function hideOpenBig( ){
		$('.img_openBig_uiFrame').hide().find('.openBig_img').attr('src', '');
		$('.code_OpenBig_uiFrame').hide().find('.openBig_code').html('');
	}


	/**
	 * 绑定显示事件
	 * @param  {[type]} ){	showOpenBig( $(this).attr('src') );} [description]
	 * @return {[type]}                  [description]
	 */
	$body.on('click', '.body-inner .page-inner .normal img', function(){
		showOpenBig( 'img', $(this).attr('src') );
	})

	$body.on('click', '.book .book-body .page-wrapper .page-inner .enlarge_button', function(){
		showOpenBig( 'code', $(this).siblings('code').html() );
	})

	/**
	 * 绑定关闭事件
	 */
	$body.on('click', '.img_openBig_uiFrame, .code_OpenBig_uiFrame', function(){
		hideOpenBig();
	})

})
