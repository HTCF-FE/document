/**
 * 给所有图片添加点击放大事件
 *
 * @author yangjinlai 2018-05-23
 *
 * 可以直接使用jQuery
 */

require(['gitbook', 'jQuery'], function (gitbook, $) {

	var $body = $('body');
	
	$body.append('<div class="openBig_uiFrame"><img src="" class="openBig_img"></div>');


	/**
	 * 显示放大区域
	 * src是需要放大显示的图片的路径
	 */
	function showOpenBig( src ){
		$('.openBig_uiFrame').show().find('.openBig_img').attr('src', src);
	}	

	/**
	 * 隐藏放大区域
	 */
	function hideOpenBig( ){
		$('.openBig_uiFrame').hide().find('.openBig_img').attr('src', '');
	}


	/**
	 * 绑定显示事件
	 * @param  {[type]} ){	showOpenBig( $(this).attr('src') );} [description]
	 * @return {[type]}                  [description]
	 */
	$body.on('click', '.body-inner .page-inner .normal img', function(){
		showOpenBig( $(this).attr('src') );
	})

	/**
	 * 绑定关闭事件
	 */
	$body.on('click', '.openBig_uiFrame', function(){
		hideOpenBig();
	})

})
