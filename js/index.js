var board = new Board();
var paddle1 = new Paddle();
var paddle2 = new Paddle();
var ball =new Ball();
var keys = {};

//Inicializacion del juego
var vid = document.getElementById("game-sound");
vid.volume = 0.2;
var aleatory =0;
$("#game-sound")[0].play();

$('#start').on('click', function(){

  board.start();
  getRandomInt();
  setInterval(checkControls, 10);
});


//Llamadas a funciones de Paddles

$(document).keydown(function(e){
  keys[e.keyCode] = true;
}).keyup(function(e){
  delete keys[e.keyCode];
});

function checkControls(){
  if (keys[81])
    paddle1.moveUp();
  else if (keys[65])
    paddle1.moveDown();

  if (keys[79])
    paddle2.moveUp2();
  else if (keys[76])
    paddle2.moveDown2();
}

function getRandomInt() {
  var i = Math.floor(Math.random() * (4 - 1)) + 1;
  switch(i) {
    case 1:
        ball.moveballdownleft();
        break;
    case 2:
        ball.moveballupright();
        break;
    case 3:
        ball.moveballupleft();
        break;
    case 4:
        ball.moveballdownrigtht();
        break;
      }
}

/*
function updateState(){
}

function activatePaddle2() {
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}
*/
