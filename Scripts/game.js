// JavaScript Document

$(document).ready(function(e) {
    var game=new Game();
	game.init();//初始化
});

var Game=function(){
}

Game.prototype={
	init:function(){
		var _this=this;
		$('#tetris').click(function(e) {
            $('#canvas').slideDown('slow');//游戏界面下拉
			$('#canvas iframe').attr('src','file:///E|/mysource/html5/html5-tetris/play.html');
			$('#content').hide('fast');
        });
		$('#tank').click(function(e) {
            $('#canvas').slideDown('slow');//游戏界面下拉
			$('#canvas iframe').attr('src','file:///E:/mysource/js/tank/index.html');
			$('#content').hide('fast');
        });
		$('#taikong').click(function(e) {
            $('#canvas').slideDown('slow');//游戏界面下拉
			$('#canvas iframe').attr('src','file:///E:/mysource/html5/feiji/play.html');
			$('#content').hide('fast');
        });
		$('#zhiwu').click(function(e) {
            $('#canvas').slideDown('slow');//游戏界面下拉
			$('#canvas iframe').attr('src','file:///E:/mysource/js/js植物大战僵尸/Index.html');
			$('#content').hide('fast');
        });
		$('#llk').click(function(e) {
            $('#canvas').slideDown('slow');//游戏界面下拉
			$('#canvas iframe').attr('src','file:///E:/myhtml/连连看/index.html');
			$('#content').hide('fast');
        });
		$('#shutDownCanvas').click(function(e) {
            $('#canvas').slideUp('slow',function(){
				$('#canvas iframe').attr('src','');//清空src
			});
			$('#content').show('fast');
        });
	},
}