
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground; 
var mango;
//var stone;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(132,132,132);

    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	Engine.run(engine);

	mango = new  Mango(230,300,233);
	//stone = new Stone(100,460,23);
  
}


function draw() {
  rectMode(CENTER);
  background(230,230,230);
  
  drawSprites();

  mango.display();
 // stone.display();
 
}



