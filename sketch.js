const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1,ground2,ground3;
var T1,T2,T3,T4,T5,T6,T7,T8,T9,T10;
var T11,T12,T13,T14,T15,T16,T17,T18,T19,T20;
var polygon1;
var rope1;

function setup(){

var canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;

ground1 = new ground(600,380,1200,40);
ground2 = new ground(450,300,300,15);
ground3 = new ground(900,280,300,15);

T1 = new Tower(470,270);
T2 = new Tower(430,270);
T3 = new Tower(510,270);
T4 = new Tower(390,270);
T5 = new Tower(450,230);
T6 = new Tower(410,230);
T7 = new Tower(490,230);
T8 = new Tower(430,190);
T9 = new Tower(470,190);
T10 = new Tower(450,150);

T11 = new Tower(880,240);
T12 = new Tower(840,240);
T13 = new Tower(920,240);
T14 = new Tower(960,240);
T15 = new Tower(900,200);
T16 = new Tower(940,200);
T17 = new Tower(860,200);
T18 = new Tower(880,160);
T19 = new Tower(920,160);
T20 = new Tower(900,120);

polygon1 = new Polygon(150,220);

rope1 = new Rope(polygon1.body, { x : 150 , y: 120} );

}

function draw(){

background("black");
Engine.update(engine);

ground1.display();
ground2.display();
ground3.display();

T1.display();
T2.display();
T3.display();
T4.display();
T5.display();
T6.display();
T7.display();
T8.display();
T9.display();
T10.display();

T11.display();
T12.display();
T13.display();
T14.display();
T15.display();
T16.display();
T17.display();
T18.display();
T19.display();
T20.display();

polygon1.display();

rope1.display();

stroke("white");
textSize(20);
text("Drag the polygon and release it towards the pyramid to make the blocks fall",250,50);

}

function mouseDragged(){

    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});

}

function mouseReleased(){

    rope1.fly();
    
}


function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(polygon1.body, {x: 150 , y: 200});  
       rope1.attach(polygon1.body);
      console.log(2)
    }


}
