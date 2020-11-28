(function($) {
	$.fn.gallery_slider = function(options) {
	  var _ops = $.extend({
	      imgNum: 5 , //number of pictures
	      gallery_item_left: '.prev' , //On the left side of the button
	      gallery_item_right: '.next' , //On the right side of the button
	      gallery_left_middle: '.gallery_left_middle', //Left picture container
	      gallery_right_middle: '.gallery_right_middle', //Left picture container
	      threeD_gallery_item: '.threeD_gallery_item' //picture container
	  }, options);
	  var _this = $(this),
	  		_imgNum = _ops.imgNum, //number of pictures
	  		_gallery_item_left = _ops.gallery_item_left, //On the left side of the button
	  		_gallery_item_right = _ops.gallery_item_right, //On the right side of the button
	  		_gallery_left_middle = _ops.gallery_left_middle, //Left picture container
	  		_gallery_right_middle = _ops.gallery_right_middle, //Left picture container
	  		_threeD_gallery_item = _ops.threeD_gallery_item; //picture container
	  		
  	//The left button binds the click event
  	_this.find(_gallery_item_left).live('click',function(){
			var idx = parseInt(_this.find(_gallery_left_middle).index());
			//Current display picture logic
			_this.find(_threeD_gallery_item).eq(idx).removeClass('gallery_left_middle').addClass('front_side');
			//When idX value is 0, the logic is executed
			_this.find(_threeD_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('gallery_out').addClass('gallery_left_middle');
			//When the IDX value is _imgnum-3, the logic executes
			_this.find(_threeD_gallery_item).eq(idx == _imgNum - 3 ? idx + 2 : idx - _imgNum + 2).removeClass('gallery_right_middle').addClass('gallery_out');
			//When the IDX value is _imgnum-2, the logic executes
			_this.find(_threeD_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('front_side').addClass('gallery_right_middle');
		})
		//The right button binds the click event
		_this.find(_gallery_item_right).live('click',function(){
			var idx = parseInt(_this.find(_gallery_right_middle).index());
			//Current display picture logic
			_this.find(_threeD_gallery_item).eq(idx).removeClass('gallery_right_middle').addClass('front_side');
			//When idX value is 0, the logic is executed
			_this.find(_threeD_gallery_item).eq(idx == 0 ? idx + _imgNum - 1 : idx - 1).removeClass('front_side').addClass('gallery_left_middle');
			//When idX value is 1, execute the logic
			_this.find(_threeD_gallery_item).eq(idx == 1 ? idx + _imgNum - 2 : idx - 2).removeClass('gallery_left_middle').addClass('gallery_out');
			//When the IDX value is imgnum-2, the logic executes
			_this.find(_threeD_gallery_item).eq(idx == _imgNum - 2 ? idx + 1 : idx - _imgNum + 1).removeClass('gallery_out').addClass('gallery_right_middle');
		})
	};
})(jQuery);