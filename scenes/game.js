Crafty.defineScene("Game", function() {
	
	//the payer
	var redSquare = Crafty.e('2D, DOM, Color, Twoway, Gravity, Collision, player, GroundAttacher')
		.attr({x: 0, y: 0, w: 50, h: 50})
		.color('#F00')
		.twoway(200)
		.gravity('Floor')
		.onHit("Gem", function () {
			Crafty.log("On Hit bind red")
		})
		.checkHits('Gem')
		.bind("HitOn", function(hitData) {
       		Crafty.log("Collision with Solid entity was reported in this frame again!");
   		 })

		//platform1
	var obs1 = Crafty.e('Floor, 2D, Canvas, Color')
		.attr({x: 0, y: 250, w: 130, h: 5})
		.color('green')


		//platform1
	var sq = Crafty.e('2D, Canvas, Color, Collision, Gem')
		.attr({x: 100, y: 150, w: 15, h: 15})
		.color('yellow')


var iso = Crafty.diamondIso.init(32,32,20,20);
iso.place(Crafty.e('2D, DOM, Color').color('red').attr({w:31, h:31}),1,1,2);
iso.place(Crafty.e('2D, DOM, Color').color('red').attr({w:31, h:31}),1,2,2);
iso.place(Crafty.e('2D, DOM, Color').color('red').attr({w:31, h:31}),2,2,2);

	Crafty.viewport.clampToEntities = false;
	Crafty.viewport.scale(1);
	Crafty.one("CameraAnimationDone", function() {
	    Crafty.viewport.follow(redSquare, 0, 0);
	});
	Crafty.viewport.centerOn(redSquare, 0);
});