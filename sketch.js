
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
   rectMode(CENTRE);

   gameState = "start";



	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = new Dustbin(700,380,100,10);
	paper = new Paper(100,300,10);
	ground = Bodies.rectangle(width / 2, 400, width, 10
	{
		isStatic: true
	});	
	world.add(world, ground);
	



  
}


function draw() {
  rectMode(CENTER);
  background(0);
  function draw() {
	if (gameState === "start") {
	  background("black");
	  textSize(20);
	  fill("red");
	  text("Have Fun!, 50, 200)
	  if (keyCode === UP_ARROW) {
		gameState = "play"
	  }
	}
	if (gameState === "play") {
	  rectMode(CENTER);
	  background(0);
	  dustbin.display();
	  paper.display();
  
	}
  }
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW && gameState === "play") {
	  Matter.Body.applyForce(paper.body, paper.body.position, {
		x: 12,
		y: -13
	  });
	}
  }
  






