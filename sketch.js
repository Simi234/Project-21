
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{

}

function setup() {
	createCanvas(800, 700);
        var balls_option={ 
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,690,800,20);
  right = new Ground(790,400,20,800);
  left = new Ground(10,400,20,800);
  top_wall = new Ground(400,10,800,20);
  bin_1 = new Ground(630,628,12,100);
	bin_2 = new Ground(700,653,12,50);
ball = Bodies.circle(100, 600, 10, balls_option);

  World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  right.display();
  left.display();
  top_wall.display();
  bin_1.display();
  bin_2.display();
  ellipse(ball.position.x,ball.position.y, 20)
  drawSprites();
 
}
function keyPressed(){
  if(keyIsDown === UP_ARROW){


    Matter.Body.applyForce(ball.position,{
      x: (24)
    })
  }
