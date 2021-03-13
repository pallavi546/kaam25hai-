
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3;
var ground;
var ball;
var call;
var dust;
function preload()
{
	
	
}

function setup() {
	createCanvas(800,700);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

   
	engine = Engine.create();
	world = engine.world;
    // createSprite();
	//Create the Bodies Here.
	
	ball=new Paper(20,20,40);
	dust=new Wall(600,575,200,180)
	
   
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  background("pink");
drawSprites();

  ball.display();
  dust.display();
  
  
  
}
function keyPressed(){
  if (keyCode===32){
Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-100})
	
  }

}



