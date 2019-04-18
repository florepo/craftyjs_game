var GAME_SCREEN_WIDTH = 800;
var GAME_SCREEN_HEIGHT = 600;
var PLAYER_WIDTH = 50;
var PLAYER_HEIGHT = 50;
var PLAYER_START_X = 0 - PLAYER_WIDTH/2;
var PLAYER_START_Y = 0 - PLAYER_HEIGHT/2;

Crafty.defineScene("Game2", function() {
	function centerCameraOn(x, y) {
		var center = Crafty.e('2D, DOM').attr({x: x, y: y, w: 100, h: 100});
		Crafty.viewport.centerOn(center, 0);
	}
	centerCameraOn(PLAYER_START_X, PLAYER_START_Y);


	//the payer
	var redSquare = Crafty.e('2D, DOM, Color, Collision')
		.origin(PLAYER_WIDTH/2, PLAYER_HEIGHT/2)
		.attr({x: PLAYER_START_X, y: PLAYER_START_Y, w: PLAYER_WIDTH, h: PLAYER_HEIGHT})
		.color('#444')
		.bind('KeyDown', function(e) {
		    if(e.key == Crafty.keys.LEFT_ARROW) {
		      this.rotation += 10 + Math.random()*5;
		    } else if (e.key == Crafty.keys.RIGHT_ARROW) {
		      this.rotation -= 10 + Math.random()*5;
			}
	 	})
	 	.onHit("Block", function (hitDatas) {	
	 		for (var i = hitDatas.length - 1; i >= 0; i--) {
	 			hitDatas[i].obj.vx = 0;
	 			this.attach(hitDatas[i].obj);
	 		}
	 	})


	var colours = ["#F00", "#0F0", "#00F", "#FF0", "#F0F", "#0FF", "#FFF"];

	function spawnBlock() {
		var randomColourIndex = Math.floor(Math.random()*colours.length);
		var block = Crafty.e('2D, DOM, Color, Motion, Block, Collision')
			.attr({x: GAME_SCREEN_WIDTH/2, y: 0, w: 8 + Math.random()*25, h: 8 + Math.random()*25})
			.color(colours[randomColourIndex])
		 	.onHit("Block", function (hitDatas) {	
		 		for (var i = hitDatas.length - 1; i >= 0; i--) {
		 			hitDatas[i].obj.vx = 0;
		 			if(hitDatas[i].obj._parent != null){
		 				if(hitDatas[i].obj._parent.has("Color") && hitDatas[i].obj._parent.color == this.color && hitDatas[i].obj._parent.has("Block")) {	
	 						hitDatas[i].obj._parent.destroy();
		 					this.destroy();
		 				} else {
			 				hitDatas[i].obj._parent.attach(this);
		 				}
			 		}
		 		}
		 	})
			.vx = -150
	}
	setInterval(spawnBlock, 2000);

});