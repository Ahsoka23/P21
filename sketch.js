var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  backgroundimg= loadImage("images/iss.png");
  sleepimg = loadAnimation("images/sleep.png");
  brushimg = loadAnimation("images/brush.png");
  gymimg = loadAnimation("images/gym1.png","images/gym1.png","images/gym2.png","images/gym2.png");
  eatimg = loadAnimation("images/eat1.png","images/eat1.png","images/eat1.png","images/eat2.png","images/eat2.png","images/eat2.png");
  bathimg = loadAnimation("images/bath1.png","images/bath1.png","images/bath1.png","images/bath2.png","images/bath2.png","images/bath2.png");
 moveimg = loadAnimation("images/move1.png","images/move1.png","images/move2.png","images/move2.png");
}

function setup() {
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230);
  astronaut.addAnimation("img1", sleepimg);
  astronaut.scale = 0.12;
  
}

function draw() {
  background(backgroundimg);
  drawSprites();

  textSize(20);
  fill(255);
  text("Instrucciones:",10, 10);
  textSize(15);
  text("Flecha hacia arriba = Cepillarse",20, 55);
  text("Flecha hacia abajo= Ejercitarse",20, 70);
  text("Flecha hacia la izquierda = Comer",20, 85);
  text("Flecha hacia la derecha = Bañarse",20, 100);
  text("tecla m = Moverse",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brushimg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gymimg);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eatimg);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bathimg);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", moveimg);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

}
