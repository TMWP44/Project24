const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubber,stone1,stone2,stone3,stone4,stone5,stone6,stone7,stone8,stone9,stone10,iron;


function setup(){
    var canvas = createCanvas(1200,600);
 
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20);
    hammer = new Hammer(10,100);
    rubber = new Rubber(500,250,100,25);
    stone1 = new Stone(200,200,15,5);
    stone2 = new Stone(225,200,15,5);
    stone3 = new Stone(250,200,15,5);
    stone4 = new Stone(275,200,15,5);
    stone5 = new Stone(300,200,15,5);
    stone6 = new Stone(325,200,15,5);
    stone7 = new Stone(350,200,15,5);
    stone8 = new Stone(375,200,15,5);
    stone9 = new Stone(400,200,15,5);
    stone10 = new Stone(425,200,15,5);
    iron = new Iron(700,200)

}

function draw(){
    background("lightBlue");
  
    Engine.update(engine);

    plane.display();
    hammer.display();
    rubber.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
    stone7.display();
    stone8.display();
    stone9.display();
    stone10.display();
    iron.display();
 
}