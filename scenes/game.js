Crafty.defineScene("Game", function() {

	var redSquare = Crafty.e("2D, Canvas, Color, Gravity")
  .attr({ x: 200, y: 50, w: 50, h: 50 })
  .color("black")
  .gravity("Floor");

  var floor = Crafty.e("2D, Canvas, Color, Twoway, Floor")
  .attr({ x: 200, y: 340, w: 200, h: 50 })
  .color("orange")
  .twoway(300);

});
