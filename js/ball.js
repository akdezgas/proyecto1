function Ball(x,y, paddle1, paddle2) {
    this.y = "";
    this.x = "";
    this.radius = 40;
    this.speedX= 5;
    this.speedY = 5;
    this.life1 =3;
    this.life2 =3;
}

Ball.prototype.moveballupright = function(){
  var t = setInterval( function(){
      //Valores de la bola
      this.y = document.getElementById("ball").style.top;
      this.x= document.getElementById("ball").style.left;
      var yNumber = parseInt(this.y.slice(0,-2));
      var xNumber = parseInt(this.x.slice(0,-2));
      var ratioBall=40;
      //Valores de la paleta
      var a = document.getElementById("paddle2");
      var paddle2Position = window.getComputedStyle(a).getPropertyValue("top");
      var aNumber = parseInt(paddle2Position.slice(0,-2));
      //Valores del OBSTACULO-4
      var ratioObstacle = 20;
      var obstacle4 = document.getElementById("ball-object4");
      var obstaclePositionY4 = window.getComputedStyle(obstacle4).getPropertyValue("top");
      var obstaclePositionX4 = window.getComputedStyle(obstacle4).getPropertyValue("left");
      var obstacleX4 =parseInt(obstaclePositionX4.slice(0,-2));
      var obstacleY4 =parseInt(obstaclePositionY4.slice(0,-2));

          //Calculo de la distancia entre obstaculo y bola
          var distance4 = Math.sqrt (((xNumber - obstacleX4) * (xNumber - obstacleX4)) + ((yNumber - obstacleY4) * (yNumber - obstacleY4)));
          distance4 = distance4.toFixed(2);
          //Valores del OBSTACULO-3
      var obstacle3 = document.getElementById("ball-object3");
      var obstaclePositionY3 = window.getComputedStyle(obstacle3).getPropertyValue("top");
      var obstaclePositionX3 = window.getComputedStyle(obstacle3).getPropertyValue("left");
      var obstacleX3 =parseInt(obstaclePositionX3.slice(0,-2));
      var obstacleY3 =parseInt(obstaclePositionY3.slice(0,-2));

          var distance3 = Math.sqrt (((xNumber - obstacleX3) * (xNumber - obstacleX3)) + ((yNumber - obstacleY3) * (yNumber - obstacleY3)));
          distance3 = distance3.toFixed(2);
          //Valores del OBSTACULO-2
      var obstacle2 = document.getElementById("ball-object2");
      var obstaclePositionY2 = window.getComputedStyle(obstacle2).getPropertyValue("top");
      var obstaclePositionX2 = window.getComputedStyle(obstacle2).getPropertyValue("left");
      var obstacleX2 =parseInt(obstaclePositionX2.slice(0,-2));
      var obstacleY2 =parseInt(obstaclePositionY2.slice(0,-2));

          var distance2 = Math.sqrt (((xNumber - obstacleX2) * (xNumber - obstacleX2)) + ((yNumber - obstacleY2) * (yNumber - obstacleY2)));
          distance2 = distance2.toFixed(2);
          //Valores del OBSTACULO-1
      var obstacle1 = document.getElementById("ball-object1");
      var obstaclePositionY1 = window.getComputedStyle(obstacle1).getPropertyValue("top");
      var obstaclePositionX1 = window.getComputedStyle(obstacle1).getPropertyValue("left");
      var obstacleX1 =parseInt(obstaclePositionX1.slice(0,-2));
      var obstacleY1 =parseInt(obstaclePositionY1.slice(0,-2));

          var distance1 = Math.sqrt (((xNumber - obstacleX1) * (xNumber - obstacleX1)) + ((yNumber - obstacleY1) * (yNumber - obstacleY1)));
          distance1 = distance1.toFixed(2);
//--------------------------------------------------------------------------------------

      $("#ball").css('top', "-=5px");
      $("#ball").css('left', "+=5px");

      if (distance4 < ratioBall + ratioObstacle){
            //HAY COLISION!!!!
            ball.colisionSound();
              clearInterval(t);
              ball.moveballdownleft();
      }
      if (distance3 < ratioBall + ratioObstacle){
            //HAY COLISION!!!!
            ball.colisionSound();
              clearInterval(t);
              ball.moveballdownleft();
      }
      if (distance2 < ratioBall + ratioObstacle){
            //HAY COLISION!!!!
            ball.colisionSound();
              clearInterval(t);
              ball.moveballdownleft();
      }
      if (distance1 < ratioBall + ratioObstacle){
            //HAY COLISION!!!!
            ball.colisionSound();
              clearInterval(t);
              ball.moveballdownleft();
      }


      if (this.y === "0px")   {
          clearInterval(t);
          ball.moveballdownrigth();
      }
      if (this.x === "1765px")   {
          ball.scoreLife2();
          clearInterval(t);
          ball.moveballupleft();
      }
      if(xNumber > 1650 && yNumber > aNumber && yNumber < aNumber +110 ){
            ball.sound();
            clearInterval(t);
            ball.moveballupleft();
      }
  }, 10);
};

Ball.prototype.moveballupleft = function (){
  var t = setInterval( function(){
      //Valores de la bola
      this.y = document.getElementById("ball").style.top;
      this.x = document.getElementById("ball").style.left;
      var yNumber = parseInt(this.y.slice(0,-2));
      var xNumber = parseInt(this.x.slice(0,-2));
      var ratioBall = 40;
      //Valores del PADDLE
      var a = document.getElementById("paddle1");
      var paddle1Position = window.getComputedStyle(a).getPropertyValue("top");
      var aNumber = parseInt(paddle1Position.slice(0,-2));
      //Valores del OBSTACULO-4
      var ratioObstacle = 20;
      var obstacle4 = document.getElementById("ball-object4");
      var obstaclePositionY4 = window.getComputedStyle(obstacle4).getPropertyValue("top");
      var obstaclePositionX4 = window.getComputedStyle(obstacle4).getPropertyValue("left");
      var obstacleX4 =parseInt(obstaclePositionX4.slice(0,-2));
      var obstacleY4 =parseInt(obstaclePositionY4.slice(0,-2));
          //Calculo de la distancia entre obstaculo y bola
          var distance4 = Math.sqrt (((xNumber - obstacleX4) * (xNumber - obstacleX4)) + ((yNumber - obstacleY4) * (yNumber - obstacleY4)));
          distance4 = distance4.toFixed(2);

          //Valores del OBSTACULO-3
      var obstacle3 = document.getElementById("ball-object3");
      var obstaclePositionY3 = window.getComputedStyle(obstacle3).getPropertyValue("top");
      var obstaclePositionX3 = window.getComputedStyle(obstacle3).getPropertyValue("left");
      var obstacleX3 =parseInt(obstaclePositionX3.slice(0,-2));
      var obstacleY3 =parseInt(obstaclePositionY3.slice(0,-2));

          var distance3 = Math.sqrt (((xNumber - obstacleX3) * (xNumber - obstacleX3)) + ((yNumber - obstacleY3) * (yNumber - obstacleY3)));
          distance3 = distance3.toFixed(2);

          //Valores del OBSTACULO-2
      var obstacle2 = document.getElementById("ball-object2");
      var obstaclePositionY2 = window.getComputedStyle(obstacle2).getPropertyValue("top");
      var obstaclePositionX2 = window.getComputedStyle(obstacle2).getPropertyValue("left");
      var obstacleX2 =parseInt(obstaclePositionX2.slice(0,-2));
      var obstacleY2 =parseInt(obstaclePositionY2.slice(0,-2));

          var distance2 = Math.sqrt (((xNumber - obstacleX2) * (xNumber - obstacleX2)) + ((yNumber - obstacleY2) * (yNumber - obstacleY2)));
          distance2 = distance2.toFixed(2);

          //Valores del OBSTACULO-1
      var obstacle1 = document.getElementById("ball-object1");
      var obstaclePositionY1 = window.getComputedStyle(obstacle1).getPropertyValue("top");
      var obstaclePositionX1 = window.getComputedStyle(obstacle1).getPropertyValue("left");
      var obstacleX1 =parseInt(obstaclePositionX1.slice(0,-2));
      var obstacleY1 =parseInt(obstaclePositionY1.slice(0,-2));

          var distance1 = Math.sqrt (((xNumber - obstacleX1) * (xNumber - obstacleX1)) + ((yNumber - obstacleY1) * (yNumber - obstacleY1)));
          distance1 = distance1.toFixed(2);

//-----------------------------------------------------------------------------------------

      $("#ball").css('top', "-=5px");
      $("#ball").css('left', "-=5px");

      if (distance4 < ratioBall + ratioObstacle){
            //HAY COLISION!!!!
              ball.colisionSound();
              clearInterval(t);
              ball.moveballdownrigth();

        }
      if (distance3 < ratioBall + ratioObstacle){
              //HAY COLISION!!!!
              ball.colisionSound();
                clearInterval(t);
                ball.moveballdownrigth();
        }
      if (distance2 < ratioBall + ratioObstacle){
              //HAY COLISION!!!!
              ball.colisionSound();
                clearInterval(t);
                ball.moveballdownrigth();
        }
      if (distance1 < ratioBall + ratioObstacle){
              //HAY COLISION!!!!
              ball.colisionSound();
                clearInterval(t);
                ball.moveballdownrigth();
        }

      if (this.y === "0px")   {
            clearInterval(t);
            ball.moveballdownleft();
      }
      if (this.x === "5px")   {
            ball.scoreLife1();
            clearInterval(t);
            ball.moveballupright();
      }
      if(xNumber < 80 && yNumber > aNumber && yNumber < aNumber +110 ){
            ball.sound();
            clearInterval(t);
            ball.moveballupright();
      }
  }, 10);
};

Ball.prototype.moveballdownleft =function(){

  var t = setInterval(function(){
      //Valores de la bola
      this.y = document.getElementById("ball").style.top;
      this.x =document.getElementById("ball").style.left;
      var yNumber = parseInt(this.y.slice(0,-2));
      var xNumber = parseInt(this.x.slice(0,-2));
      var ratioBall =40;
      //Valores del paddle
      var a = document.getElementById("paddle1");
      var paddle1Position = window.getComputedStyle(a).getPropertyValue("top");
      var aNumber = parseInt(paddle1Position.slice(0,-2));
      //Valores del OBSTACULO-4
      var ratioObstacle = 20;
      var obstacle4 = document.getElementById("ball-object4");
      var obstaclePositionY4 = window.getComputedStyle(obstacle4).getPropertyValue("top");
      var obstaclePositionX4 = window.getComputedStyle(obstacle4).getPropertyValue("left");
      var obstacleX4 =parseInt(obstaclePositionX4.slice(0,-2));
      var obstacleY4 =parseInt(obstaclePositionY4.slice(0,-2));
            //Calculo de la distancia entre obstaculo y bola
              var distance4 = Math.sqrt (((xNumber - obstacleX4) * (xNumber - obstacleX4)) + ((yNumber - obstacleY4) * (yNumber - obstacleY4)));
              distance4 = distance4.toFixed(2);

          //Valores del OBSTACULO-3
      var obstacle3 = document.getElementById("ball-object3");
      var obstaclePositionY3 = window.getComputedStyle(obstacle3).getPropertyValue("top");
      var obstaclePositionX3 = window.getComputedStyle(obstacle3).getPropertyValue("left");
      var obstacleX3 =parseInt(obstaclePositionX3.slice(0,-2));
      var obstacleY3 =parseInt(obstaclePositionY3.slice(0,-2));

          var distance3 = Math.sqrt (((xNumber - obstacleX3) * (xNumber - obstacleX3)) + ((yNumber - obstacleY3) * (yNumber - obstacleY3)));
          distance3 = distance3.toFixed(2);

          //Valores del OBSTACULO-2
      var obstacle2 = document.getElementById("ball-object2");
      var obstaclePositionY2 = window.getComputedStyle(obstacle2).getPropertyValue("top");
      var obstaclePositionX2 = window.getComputedStyle(obstacle2).getPropertyValue("left");
      var obstacleX2 =parseInt(obstaclePositionX2.slice(0,-2));
      var obstacleY2 =parseInt(obstaclePositionY2.slice(0,-2));

          var distance2 = Math.sqrt (((xNumber - obstacleX2) * (xNumber - obstacleX2)) + ((yNumber - obstacleY2) * (yNumber - obstacleY2)));
          distance2 = distance2.toFixed(2);

          //Valores del OBSTACULO-1
      var obstacle1 = document.getElementById("ball-object1");
      var obstaclePositionY1 = window.getComputedStyle(obstacle1).getPropertyValue("top");
      var obstaclePositionX1 = window.getComputedStyle(obstacle1).getPropertyValue("left");
      var obstacleX1 =parseInt(obstaclePositionX1.slice(0,-2));
      var obstacleY1 =parseInt(obstaclePositionY1.slice(0,-2));

          var distance1 = Math.sqrt (((xNumber - obstacleX1) * (xNumber - obstacleX1)) + ((yNumber - obstacleY1) * (yNumber - obstacleY1)));
          distance1 = distance1.toFixed(2);

// ----------------------------------------------------------------------------------------

      $("#ball").css('top', "+=5px");
      $("#ball").css('left', "-=5px");


      if (distance4 < ratioBall + ratioObstacle){
            //HAY COLISION!!!!
            ball.colisionSound();
              clearInterval(t);
              ball.moveballupright();

      }
      if (distance3 < ratioBall + ratioObstacle){
              //HAY COLISION!!!!
              ball.colisionSound();
                clearInterval(t);
                ball.moveballupright();
        }
      if (distance2 < ratioBall + ratioObstacle){
              //HAY COLISION!!!!
              ball.colisionSound();
                clearInterval(t);
                ball.moveballupright();
        }
      if (distance1 < ratioBall + ratioObstacle){
              //HAY COLISION!!!!
              ball.colisionSound();
                clearInterval(t);
                ball.moveballupright();
        }

      if (this.y === "560px" ){
            clearInterval(t);
            ball.moveballupleft();

      }
      if (this.x === "5px"){
            ball.scoreLife1();
            clearInterval(t);
            ball.moveballdownrigth();
      }
      if(xNumber < 80 && yNumber > aNumber && yNumber < aNumber +110 ){
            ball.sound();
            clearInterval(t);
            ball.moveballdownrigth();
      }
   },10);
};

Ball.prototype.moveballdownrigth = function (){
  var t = setInterval( function(){
      //Valores de la bola
      this.y = document.getElementById("ball").style.top;
      this.x = document.getElementById("ball").style.left;
      var yNumber = parseInt(this.y.slice(0,-2));
      var xNumber = parseInt(this.x.slice(0,-2));
      var ratioBall = 40;
      //Valores del Paddle
      var a = document.getElementById("paddle2");
      var paddle2Position = window.getComputedStyle(a).getPropertyValue("top");
      var aNumber = parseInt(paddle2Position.slice(0,-2));
      //Valores del OBSTACULO-4
      var ratioObstacle = 20;
      var obstacle4 = document.getElementById("ball-object4");
      var obstaclePositionY4 = window.getComputedStyle(obstacle4).getPropertyValue("top");
      var obstaclePositionX4 = window.getComputedStyle(obstacle4).getPropertyValue("left");
      var obstacleX4 =parseInt(obstaclePositionX4.slice(0,-2));
      var obstacleY4 =parseInt(obstaclePositionY4.slice(0,-2));
          //Calculo de la distancia entre obstaculo y bola
            var distance4 = Math.sqrt (((xNumber - obstacleX4) * (xNumber - obstacleX4)) + ((yNumber - obstacleY4) * (yNumber - obstacleY4)));
            distance4 = distance4.toFixed(2);


//--------------------------------------------------------------------------------------------------

      $("#ball").css('top', "+=5px");
      $("#ball").css('left', "+=5px");

      if (this.y === "560px")   {
            clearInterval(t);
            ball.moveballupright();
      }
      if (this.x === "1750px")   {

            clearInterval(t);
            ball.scoreLife2();
            ball.moveballdownleft();

      }
      if(xNumber > 1650 && yNumber > aNumber && yNumber < aNumber +110 ){
            ball.sound();
            clearInterval(t);

            ball.moveballdownleft();
      }

  }, 10);
};


Ball.prototype.randomDirection = function() {

};

Ball.prototype.scoreLife1 = function(){
  this.life1 -=1;
  $("#life-1").html("<h3>"+ this.life1 + "</h3>" );
  if (this.life1 === 0){
    ball.gameOver();
  }
};

Ball.prototype.scoreLife2 = function(){
  this.life2 -=1;
  $("#life-2").html("<h3>"+ this.life2 +"</h3>" );
  if (this.life2 === 0){
    ball.gameOver();
  }

};

// returns winner paddle or false
Ball.prototype.gameOver = function(){
  alert("PERDISTE");

};


Ball.prototype.sound = function(){
    $("#ball-sound")[0].play();
};

Ball.prototype.colisionSound = function(){
  $("#ball-ball-sound")[0].play();
};



/*Ball.prototype.collisionCircle =function (){
  var t = setInterval( function(){
      this.y = document.getElementById("ball").style.top;
      this.x = document.getElementById("ball").style.left;
      var yNumber = parseInt(this.y.slice(0,-2));
      var xNumber = parseInt(this.x.slice(0,-2));
      var velX = 5;
      var velY = 5;
      var ratioBall = 40;
      var ratioObstacle = 80;
      var obstacle = document.getElementById("ball-object1");
      var obstaclePositionY = window.getComputedStyle(obstacle).getPropertyValue("top");
      var obstaclePositionX = window.getComputedStyle(obstacle).getPropertyValue("left");
      var obstacleX =parseInt(obstaclePositionX.slice(0,-2));
      var obstacleY =parseInt(obstaclePositionY.slice(0,-2));

      var distance = Math.sqrt (((xNumber - obstacleX) * (xNumber - obstacleX)) + ((yNumber - obstacleY) * (yNumber - obstacleY)));
      distance = distance.toFixed(1);
      if (distance < ratioBall + ratioObstacle){
        //HAY COLISION!!!!
        var collisionX = ((xNumber * ratioObstacle) + (obstacleX * ratioBall)) / (ratioBall + ratioObstacle);
        var collisionY = ((yNumber * ratioObstacle) + (obstacleY * ratioBall)) / (ratioBall + ratioObstacle);
        console.log(collisionY,collisionX);
        var newVelX = -velX;
        var newVelY = -velY;
      }

  }, 20);

};*/
