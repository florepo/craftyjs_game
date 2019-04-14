Crafty.defineScene("Game", function () {

	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity')
		.attr({ x: 0, y: 0, w: 70, h: 70 })
		.color('#F00')
		.twoway(200, 300)
		.gravity('Floor');
	var green_floor = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({ x: 0, y: 590, w: 160, h: 10 })
		.color('green');
	var blue_floor = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({ x: 278, y: 590, w: 160, h: 10 })
		.color('blue');
	var yellow_floor = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({ x: 556, y: 590, w: 160, h: 10 })
		.color('yellow');

	// ADD COINS (SQUARE)
	var initialX = 180;
	var posY = 420;
	
	
	var yellowSquare = Crafty.e('2D, DOM, Color')
		.attr({ x: 180, y: 420, w: 70, h: 70 })
		.color('yellow');
	var yellowSquare = Crafty.e('2D, DOM, Color')
		.attr({ x: 320, y: 420, w: 70, h: 70 })
		.color('yellow');
	
});