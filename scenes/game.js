Crafty.defineScene("Game", function () {

	var score = 0;

	// LABEL SCORE
	Crafty.e("2D, DOM, Text")
		.attr({ w: 30, h: 100, x: 700, y: 20 })
		.text("Score")
		.textFont({ size: '10px', weight: 'bold' });

	Crafty.e("2D, DOM, Text")
		.attr({ w: 20, h: 100, x: 750, y: 20 })
		.text("0")
		.textFont({ size: '10px', weight: 'bold' })
		.bind("updateScore", function(score){
			this.text(score)
		});
	// PLAYER
	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity, Collision')
		.attr({ x: 0, y: 0, w: 40, h: 40 })
		.color('#F00')
		.twoway(200, 300)
		.gravity('Floor')
		.onHit('Coin', function(hitDatas){
			 for (var i = 0, l = hitDatas.length; i < l; ++i) { // WHEN COLLIDE AGAINST COIN HIDE IT
				hitDatas[i].obj.destroy();
				// UPDATE THE SCORE
				score ++;
				Crafty.trigger("updateScore", score);
			 }
		})

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

	for (var i = 0; i < 5; i++) {
		Crafty.e('2D, Collision, Canvas, Color, Coin')
			.attr({ x: posX, y: posY, w: 30, h: 30 })
			.color('yellow')
		posX += 140;
	}

});