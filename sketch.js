
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(400,300);

	box1 = new Box(900, 365, 200, 10);
	box2 = new Box(800,320,10,100);
	box3 = new Box(1000,320,10,100);
	ground = new Box (600,375,1200,10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  fill(200,35,255)
  paper.display();
  fill("yellow")
  ground.display();
  fill("white")
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}

