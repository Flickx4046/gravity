const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	rope1=new rope(bob1,roof,-80, 2);
	rope2=new rope(bob2,roof,-20, 20);
	rope3=new rope(bob3,roof,10, 40);
	rope4=new rope(bob4,roof,30, 60);
	rope5=new rope(bob5,roof,50, 80);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope.display()

  
  //create ellipse shape for multiple bobs here
  ellipseMode(RADIUS)
  ellipse(bob1.position.x,bob1.position.y,20,20)
  ellipseMode(RADIUS)
  ellipse(bob2.position.x,bob2.position.y,20,20)
  ellipseMode(RADIUS)
  ellipse(bob3.position.x,bob3.position.y,20,20)
  ellipseMode(RADIUS)
  ellipse(bob4.position.x,bob4.position.y,20,20)
  ellipseMode(RADIUS)
  ellipse(bob5.position.x,bob5.position.y,20,20)
 
  keyPressed();

}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {

if(keyDown(up_arrow)) {
	Matter.Body.applyForce(bob1,position,force)
}

}