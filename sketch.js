
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boy=loadImage("boy.png")
    
	
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;
	groundObject=new ground(width/2,600,width,20)
	mango1=new mango(1100,100,30)
	stoneObject=new stone(500,500,30)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,200,340,200,300)
  groundObject.display();
  mango1.display();
 stoneObject.display();
 
}



