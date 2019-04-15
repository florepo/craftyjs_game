Crafty.defineScene("Game", function() {
  var table=  Crafty.e("Envi, 2D, Canvas, Color")
    .attr({ x: 0, y: 250, w: 250, h: 10 })
    .color("green");

  Crafty.e("Envi2, 2D, Canvas, Color")
    .attr({ x: 110, y: 10, w: 100, h: 20 })
    .color("#222");

  var redSquare = Crafty.e("2D, Canvas, Color, Fourway, Collision")
    .attr({ x: 0, y: 0, w: 20, h: 20 })
	.color("#F00")
	.onHit('Envi2',function(e){
	
	 this.mbr();
	 
		console.log(_x);
		console.log(e[0].x);
		// this.x = e[0]._x;
		// console.log(e[0].mbr);
	})
    .fourway(300);
});
