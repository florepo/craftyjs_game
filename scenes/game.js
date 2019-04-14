Crafty.defineScene("Game", function() {
	



	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity, Collision, player')
		.attr({x: 0, y: 0, w: 100, h: 100})
		.color('#F00')
		.twoway(200)
		.gravity('Floor')
		.onHit('coin', function(hitDatas){
			Crafty.log("hit the object");
			 for (var i = 0, l = hitDatas.length; i < l; ++i) { // for each bullet hit
          		hitDatas[i].obj.destroy(); // destroy the bullet
			 }
		});

	var obs1 = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 0, y: 550, w: 130, h: 5})
		.color('green')

	var obs2 = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 300, y: 550, w: 130, h: 5})
		.color('blue')

	var obs3 = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 600, y: 550, w: 130, h: 5})
		.color('orange')

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
	
		// Crafty.e('2D, Collision, Canvas, Color, coin')
		// // .checkHits('Solid')
		// .attr({x: 180, y: 280, w: 10, h: 10})
		// .color('yellow')
		
		// .bind("HitOn", function(hitData) {
       	// 	this.destroy() // fire the HitOn event in the next frame also, if the collision is still active.
    	// })
		// .onHit('bullet', function(hitDatas) {

		// })	

	// Crafty.e("2D, Collision")
	// 	.checkHits('coin')
	// 	.bind("HitOn", function(hitData) {

	// 	});

});