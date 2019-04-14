Crafty.defineScene("Game", function () {

	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity')
		.attr({ x: 0, y: 0, w: 40, h: 40 })
		.color('#F00')
		.twoway(200, 300)
		.gravity('Floor');

	// PLATFORMS
	var green_floor = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({ x: 0, y: 590, w: 160, h: 10 })
		.color('green');
	var blue_floor = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({ x: 278, y: 590, w: 160, h: 10 })
		.color('blue');
	var yellow_floor = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({ x: 556, y: 590, w: 160, h: 10 })
		.color('yellow');

	// COINS
	var posY = 480;
	var posX = 70;
	var changeColor = False

	for(var i = 0; i < 5; i++) {
		Crafty.e('2D, Collision, Canvas, Color, coin')
			.attr({x: posX, y: posY, w: 30, h: 30})
			.color('yellow')
			.collision()
		posX += 140;
	}

});