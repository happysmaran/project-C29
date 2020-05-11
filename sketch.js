const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Box(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Box(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    box6=new Box(130, 200, 50, 50);
    box7=new Box(130, 150, 50, 50);
    box8=new Box(130, 100, 50, 50);

    log9=new Log(130, 50, 50, PI/10);

    box10=new Box(270, 200, 50, 50);
    box11=new Box(270, 150, 50, 50);
    box12=new Box(270, 100, 50, 50);

    box13=new Box(400, 200, 50, 50);
    box14=new Box(400, 150, 50, 50);
    box16=new Box(400, 100, 50, 50);

    ground2 = new Ground(600,100,300,20);

    box15=new Box(600, 60, 70, 70);

    bird = new Bird(200,50);

    slingShot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(255,255,255);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box6.display();
    box7.display();
    box8.display();

    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();

    log9.display();

    bird.display();
    platform.display();
    slingShot.display(); 
    
    ground2.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingShot.fly();
}
