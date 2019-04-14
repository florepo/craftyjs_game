Crafty.defineScene("Game", function() {
	
	var total_points = 0;

	//label: score
	Crafty.e('2D, DOM, Text') 
		.attr({w: 50, h: 100, x: 650, y: 20})
		.text("Score:")
		
	//points container
	var points = Crafty.e('2D, DOM, Text') 
		.attr({w: 50, h: 100, x: 700, y: 20})
		.text("0")
		.bind("UpdateScore", function(score){
			this.text(score)
		});

	//the payer
	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity, Collision, player')
		.attr({x: 0, y: 0, w: 100, h: 100})
		.color('#F00')
		.twoway(200)
		.gravity('Floor')
		.onHit('coin', function(hitDatas){
			Crafty.log("hit the object");
			 for (var i = 0, l = hitDatas.length; i < l; ++i) { // for each bullet hit
				//hide obj
				hitDatas[i].obj.destroy(); // destroy the bullet

				//update point
				total_points += 5;
				Crafty.trigger("UpdateScore", total_points);
			 }
		});

	//platform1
	var obs1 = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 0, y: 550, w: 130, h: 5})
		.color('green')

	//platform2
	var obs2 = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 300, y: 550, w: 130, h: 5})
		.color('blue')

	//platform3
	var obs3 = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 600, y: 550, w: 130, h: 5})
		.color('orange')

	//region coins
	var mx = 150;
	var my = 350;
	for(var i = 0; i < 3; i++) {
		Crafty.e('2D, Collision, Canvas, Color, coin')
			.attr({x: mx, y: my, w: 10, h: 10})
			.color('yellow')
		mx+= 30;
		my-=10;
	}

	
	for(var i = 0; i < 3; i++) {
		Crafty.e('2D, Collision, Canvas, Color, coin')
			.attr({x: mx, y: my, w: 10, h: 10})
			.color('yellow')
		mx+= 30;
		my+=10;
	}
	//endregion coins
	

});