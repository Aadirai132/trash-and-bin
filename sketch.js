
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var trash;
var bin1,bin2,bin3;
var body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 30);
	bin1 = new Bin(740,630,5,50);
	bin2 = new Bin(645,630,6,50);
	bin3 = new Bin(690,650,90,20);
	trash = new Paper(100, 670);
	
	Engine.run(engine);
  
}

function draw() 
{
	background("lightBlue");
	rectMode(CENTER);
	ground.display();
	
	trash.display();
	bin1.display();
	bin2.display();
	bin3.display();
	
	keyPressed();

	
  drawSprites();
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(trash.body,trash.body.position,{x:1,y:-1});
	} 
	console.log(bin3.body.position.x);
	if(trash.body.position.x > 410){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:0,y:2.5});
		
	} 
}





