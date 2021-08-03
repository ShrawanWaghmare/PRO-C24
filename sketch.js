const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, bouncyBall,iron,rubber,hammer;
var sand1, sand2, sand3, sand4, sand5, sand6, sand7;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    iron = new Iron(300,350);
    stone = new Stone(700,320,100,100);
  
    bouncyBall=new BouncyBall(900,450,70);
    // bouncyBall=BouncyBall(900,450,70);
    // bouncyBall=new (900,450,70);
    // bouncyBall=new BouncyBall();

    hammer = new Hammer(10,100);

    sand1 = new BouncyBall(505,450,10);
    sand2 = new BouncyBall(510,450,10);
    sand3 = new BouncyBall(515,450,10);
    sand4 = new BouncyBall(520,450,10);
    sand5 = new BouncyBall(525,450,10);
    sand6 = new BouncyBall(515,445,10);
    sand7 = new BouncyBall(520,445,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    plane.display();
    bouncyBall.display();
    iron.display()  
    hammer.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();
    sand7.display();

 
}
