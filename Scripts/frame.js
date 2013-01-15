// JavaScript Document
//frame类
$(document).ready(function(e) {
    var frame=new Frame();
	frame.init();
});
var Frame=function(){
	this.currentFrame=0;//存放当前显示的frame
	this.frameSize=0;
	this.currentSpan=0;
	this.spanSize=0;
}

Frame.prototype={
	init:function(){
		var _this=this;
		_this.frameSize=$('.frame').length;
		//alert(_this.frameSize);
		$('#show').click(function(e) {
			if(_this.currentFrame>0){
				//alert(_this.currentSpan);
				//alert(_this.spanSize);
				if(_this.currentSpan<_this.spanSize){
					//alert(_this.currentSpan);
					var randomTemp=Math.floor(Math.random()*3);
					switch(randomTemp){//动画
						case 0:
							$('.frame').eq(_this.currentFrame).find('span').eq(_this.currentSpan).show('slow');
							break;
						case 1:	
							$('.frame').eq(_this.currentFrame).find('span').eq(_this.currentSpan).slideDown('slow');
							break;
						case 2:
							$('.frame').eq(_this.currentFrame).find('span').eq(_this.currentSpan).fadeIn('slow');
							break;
						default:
							$('.frame').eq(_this.currentFrame).find('span').eq(_this.currentSpan).show('slow');	
					}
					_this.currentSpan++;
				}
			}
        });
		$('#next').click(function(e) {
			if(_this.currentFrame<_this.frameSize-1){
				$('.frame').eq(_this.currentFrame++).slideUp('slow');
				_this.currentSpan=0;
				
				$('.frame').eq(_this.currentFrame).find('span').each(function(index, element) {
                    $(this).hide();
					_this.spanSize++;
					
                });
				//alert(_this.spanSize);
				$('#show').click();
			}
        });
		$('#preview').click(function(e) {
            if(_this.currentFrame>0){
				$('.frame').eq(--_this.currentFrame).slideDown('slow');	
				_this.currentSpan=0;
				//this.spanSize=$('.frame').eq(_this.currentFrame).find('span').size();
				//alert(_this.spanSize);
				if(_this.currentFrame>0){
					$('.frame').eq(_this.currentFrame).find('span').each(function(index, element) {
						$(this).hide();
						_this.spanSize++;
						//alert(index);
					});
				}
				$('#show').click();
			}
        });
	},
}