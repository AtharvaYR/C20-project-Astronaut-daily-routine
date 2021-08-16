var astronaut;
var invisibleGround,invisibleGround2;
var bath,dri,drink,eat,gym,backgroundImg,move,sleep,brush,dry;

function preload(){

dri = loadImage("dri.png");
bath = loadAnimation("bath1.png","bath2.png");
drink = loadAnimation("drink1.png","drink2.png");
eat = loadAnimation("eat1.png","eat2.png");
gym = loadAnimation("gym1.png","gym2.png");
backgroundImg = loadImage("inss.png");
move = loadAnimation("move.png","move1.png")
sleep = loadAnimation("sleep.png")
brush = loadAnimation("brush.png")
}



function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1;

invisibleGround = createSprite(400,5,800,10);
  invisibleGround.visible = false;

  invisibleGround2 = createSprite(795,10,10,800);
  invisibleGround2.visible = false;



}

function draw() {
  background(backgroundImg);  
  textSize(25);
  fill("white")
  text("Use all Arrow key and w,a key to see Astronaut Daily routine",50,70);
  
  if (keyDown("Up_Arrow")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath");
    astronaut.x=400;
   astronaut.y=250;
  }

  if (keyDown("Left_Arrow")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.x=350;
    astronaut.y=250;
  }

  if (keyDown("right_Arrow")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.x=350;
    astronaut.y=250;
    astronaut.velocityX=0.5;
    astronaut.velocityY=-0.5;
  
  
  }

  if (keyDown("Down_Arrow")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
    astronaut.x=400;
    astronaut.y=250;
  }
  
  if (keyDown("W")){
    astronaut.addAnimation("gym",gym);
    astronaut.changeAnimation("gym");
    astronaut.x=400;
    astronaut.y=250;
  }
  
  if (keyDown("A")){
    astronaut.addAnimation("sleep",sleep);
    astronaut.changeAnimation("sleep");
    astronaut.x=300;
    astronaut.y=250;
  }
  
  

  
  
  astronaut.collide(invisibleGround);
  astronaut.collide(invisibleGround2);
  drawSprites();
}