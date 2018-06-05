/**
 * 统一调用分页插件的方法
 * @author yangjinlai  2016-11-22
 *
 * 其他页面需要使用分页时，引入本文件，向函数中传递4个参数：
 * that---
 * totalPage---总页码
 * totalRecords---总数据条数
 * callback---分页click事件中需要执行的逻辑，以回调函数形式传入
 * boxIds---设置分页外层dom的id，传入则为传入值，不传则为kkpager
 */

//引用分页
require('./js/paging.js');


/**
 * [pager description]
 * @param  {[number]} totalRecords [一页列表的条数]
 * @param  {[type]}  boxIds   [分页的容器]
 * @return {[type]}              [description]
 */
function Pager( totalRecords, boxIds, callback , where){

	//this.totalRecords = totalRecords;
	//this.boxIds = boxIds;

	//调用分页插件
	kkpager.generPageHtml({
		pagerid: boxIds, //容器
		pno : 1, //当前页码
		total : totalRecords,  //总页码
		mode : 'click',  //点击事件
		click: function(now_page, pagerId){
			//点击页码后的逻辑处理
			
			//调用callback，页面滚动回指定位置
			//需要从pagingArr中获取
			var p_obj = pagingArr.filter(function(i, el){
				return i.boxIds == pagerId
			});
			if( p_obj && p_obj.length ){
				//页面滚动回指定位置
				util.goToTop(p_obj[0].where);
				//调用回调函数
				p_obj[0].callback(now_page, pagerId);

				//设置正确的页码
				this.selectPage(now_page, pagerId, p_obj[0].totalRecords );
			}

			
		}
	})
}



/**
 * [exports description]
 * @param  {[type]}   totalRecords [总页码]
 * @param  {[type]}   $boxIds      [分页容器]
 * @param  {Function} callback     [点击页码后执行的回调函数]
 * @param  {[type]}   where        [点击后滚动到的位置]
 * @return {[type]}                [该分页组件的实例]
 *
 */
var pagingArr = []; 

module.exports = function(page, totalRecords, boxIds, callback, where, float){

	//判断页码是否为1，如果是1，初始化，不是1则不执行后面的逻辑
	if(page != 1){
		return false;
	}
	
	boxIds = boxIds ? boxIds: "kkpager";
	callback = callback ? callback : function(){};
	where = where ? where : 0;

	//初始化分页
	Pager(totalRecords, boxIds, callback , where);

	if( float == 'middle'){
		//表示分页位置需要居中
		$("#"+boxIds +'.kkpagerSty').css('float', 'none');
	}

	//判断pagingArr里是否已有该分页
	var p_obj = pagingArr.filter(function(i, el){
		return i.boxIds == boxIds
	});
	if( !(p_obj && p_obj.length) ){
		//没有，保存当前页面上所有的分页数据，用于点击页码时循环
		pagingArr.push({
			where: where,
			boxIds: boxIds,
			callback: callback,
			totalRecords: totalRecords
		})
	}

	

}


//调用分页插件
// module.exports = function(that,totalPage, totalRecords, callback,boxIds,where){
// 	var $id="kkpager";
// 	if(boxIds){
// 	  	$id=boxIds;
// 	}
// 	//调用分页插件
// 	kkpager.generPageHtml({
// 		pagerid: $id,
// 		pno : that.page || $('#'+$id).attr('page') , //当前页码
// 		total : totalPage,  //总页码
// 		totalRecords : totalRecords,  //总数据条数
// 		mode : 'click',  //点击事件
// 		//needGoTop: true,
// 		click : function(m, $id){ //页码的点击事件
			
// 			//重设that.page当前页
// 			$('#'+$id).attr('page', m);
// 			that.page = m;

// 			//返回顶部
// 			if (where) {
// 				util.goToTop(where);

// 			}else{
// 				util.goToTop();
// 			}

// 			//$.util.goToTop();
// 			callback( $id );


// 			//手动选中按钮
// 			//if( window.location.href.indexOf('account/views/transfer/transferDetail.html') == -1 || window.location.href.indexOf('application') == -1){
// 				//在此页面，不执行selectPage，因为selectPage里重新生成分页，若一个页面上多个分页
// 				//分页里的total总页码会停留在最后一个分页的页码数
// 				//因为点击页码后会向服务器请求新数据并生成一次分页，因此这里不需要执行selectPage
// 				//因为怕影响其他页面，这里只判断这个页面的路径
// 				//后期可以统一检查修改
// 				this.selectPage(m, $id);
// 			//}

// 		}
// 	});

// }