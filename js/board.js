function Board() {
}

Board.prototype.start = function(){
};

Board.prototype.checkGame = function(){
};

Board.prototype.stop = function(){
};

Board.prototype.restart = function(){
};

Board.prototype.gameOver = function(){
};
/*
//Crear OBEJCT 1 automatico
Board.prototype.circleObject =function (){
  var v = setInterval(function(){
    var colocar =("<div id=\"ball-object1\"></div>");
    $( ".tablero" ).append(colocar);
  },5000);

};
*/



/* COMO BORRAR ALGO CREADO
$(".fa").on("click", function() {
  $(this).parent().remove();
});


$(".btn").on("click", function() {
  var newTask = prompt("Add new task");
  var formattedTask = ("<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i> </li>");
  $( ".container ul" ).append( formattedTask );
});

*/
