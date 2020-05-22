const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world, object1,object2;

var raindrop;

function setup() {
  createCanvas(400,600);
  engine=Engine.create();
  world=engine.world;

  raindrop1=new Raindrop(random(30,380),0,random(50,60),random(60,70));
 
}

function draw() {

  Engine.update(engine);
  background(0);
  
  raindrop1.display();
  
}

