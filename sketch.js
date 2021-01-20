
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hero, grlimg, grlfly;
var spacee;
var gradientt;
var ground;
var alien, alienimg;

function preload()
{
//grrlimg = loadAnimation("download (2).png");	
grlimg = loadAnimation("download (2).png", "download (3).png");
grlfly = loadImage("supergirl.png");
spacee = loadImage("space.jpg");
gradientt = loadImage("gradient.png");
ground = loadImage("bg.jpg");
alienimg = loadImage("UFO.png");
}

function setup() {
	createCanvas (1350, displayHeight*10);
	rectMode(CENTER);

ground1 = createSprite(displayWidth/2,displayHeight*9.6 );
ground1.addImage(ground);
ground1.scale=2;

grl = createSprite(500,displayHeight*9.8,20,20);
grl.addAnimation("girll",grlimg);
grl.scale=1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  if(keyDown("right")){
	grl.x=grl.x+2;  
  }
  if(keyDown("left")){
	grl.x=grl.x-2;  
  }
  if(keyDown("space")){
	grl.changeAnimation("ml",grlfly);  
	grl.y=grl.y-20;  
  }
  //camera.position.x = displayWidth/2;
  //camera.position.y = grl.y;


  drawSprites();
 
}



