function Paddle() {
  this.y = "";
  this.x = document.getElementById("paddle2").style.left;

}
//Movimientos de Paddle1

Paddle.prototype.moveUp = function() {
  this.y = document.getElementById("paddle1").style.top;
  if (this.y === "4px"){
      $("#paddle1").css('top', 4 + "px");
  return;
  }
      $("#paddle1").css('top', "-=8px");
};

Paddle.prototype.moveDown = function (){
  this.y = document.getElementById("paddle1").style.top;
  if (this.y === "492px"){
      $("#paddle1").css('top', 492 + "px");
  return;
  }
      $("#paddle1").css('top', "+=8px");
};
//Movimientos de Paddle2

Paddle.prototype.moveUp2 = function() {
  this.y = document.getElementById("paddle2").style.top;
  if (this.y === "4px"){
      $("#paddle2").css('top', 4 + "px");
  return;
  }
      $("#paddle2").css('top', "-=8px");
};

Paddle.prototype.moveDown2 = function (){
  this.y = document.getElementById("paddle2").style.top;
  if (this.y === "492px"){
      $("#paddle2").css('top', 492 + "px");
  return;
  }
      $("#paddle2").css('top', "+=8px");
};

/*
Paddle.prototype.restart = function(){
};

Paddle.prototype.hitBall = function(ball_y){

};
*/
