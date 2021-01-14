const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	block1=new Block("200,300,30,30")
	block2=new Block("250,300,30,30")
	block3=new Block("300,300,30,30")
	block4=new Block("350,300,30,30")
	block5=new Block("400,300,30,30")
	block6=new Block("450,300,30,30")
	block7=new Block("500,300,30,30")
	block8=new Block("550,300,30,30")
	block9=new Block("600,300,30,30")
	block10=new Block("650,300,30,30")
	block11=new Block("700,300,30,30")
	block12=new Block("750,300,30,30")
	ball=new Polygon("100,50,30,30")


  
}


function draw() {
  rectMode(CENTER);
  background(0);
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  ball.display()
  drawSprites();
 
}
