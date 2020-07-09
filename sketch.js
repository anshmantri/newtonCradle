const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var hangar;
var ball1;

function preload() {
	
}

function setup() {
	createCanvas(600, 600);

	engine = Engine.create();
	world = engine.world;
	
	hangar1 = new Hangar(280,30,50,20);
	World.add(world,hangar1);
	hangar2 = new Hangar(330,30,50,20);
	World.add(world,hangar2);
	hangar3 = new Hangar(380,30,50,20);
	World.add(world,hangar3);
	hangar4 = new Hangar(230,30,50,20);
	World.add(world,hangar4);
	hangar5 = new Hangar(180,30,50,20);
	World.add(world,hangar5);

	ball1 = new Ball(280,500,50);
	World.add(world,ball1);
	ball2 = new Ball(330,500,50);
	World.add(world,ball2);
	ball3 = new Ball(380,500,50);
	World.add(world,ball3);
	ball4 = new Ball(230,500,50);
	World.add(world,ball4);
	ball5 = new Ball(180,500,50);
	World.add(world,ball5);

	chain1 = new Chain(hangar1.body,ball1.body);
	chain2 = new Chain(hangar2.body,ball2.body);
	chain3 = new Chain(hangar3.body,ball3.body);
	chain4 = new Chain(hangar4.body,ball4.body);
	chain5 = new Chain(hangar5.body,ball5.body);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(0,225,115);
	
	hangar1.display();
	hangar2.display();
	hangar3.display();
	hangar4.display();
	hangar5.display();

	ball1.display();
	ball2.display();
	ball3.display();
	ball4.display();
	ball5.display();

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();
}