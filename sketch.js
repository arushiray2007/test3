const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;
var polygon;
var engine, world,ground1,ground2,ground3;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,img1,polygon;
var slingshot;
function preload(){
    img1=loadImage("polygon.png");
}

function setup(){

    createCanvas(800,800);
    engine=Engine.create();
    world=engine.world;
    ground1=new Ground(400,500,150,20);
    ground2=new Ground(700,350,150,20);
    ground3=new Ground(400,700,800,20);
    block1=new Box(400,470,30,40);
    block2=new Box(430,470,30,40);
    block3=new Box(370,470,30,40);
    block4=new Box(385,430,30,40);
    block5=new Box(415,430,30,40);
    block6=new Box(398,390,30,40);
    block7=new Box(660,322,30,40);
    block8=new Box(690,322,30,40);
    block9=new Box(720,322,30,40);
    block10=new Box(706,282,30,40);
    block11=new Box(676,282,30,40);
    block12=new Box(691,242,30,40);
    polygon=new Polygon(50,200,15);

   /* polygon=Bodies.circle(50,200,20);
    polygon.width=width;
    polygon.height=height;
    World.add(world,polygon);
     imageMode(CENTER);
    image(img1,polygon.position.x,polygon.position.y,0.1,0.1);

    //console.log(polygon.position.x,polygon.position.y);*/

    

    slingshot=new Slingshot(polygon.body,{x:150,y:350});

   

}

function draw(){

    background("black");
    Engine.update(engine);

   ground1.display();
   ground2.display();
   ground3.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();
   polygon.display();
 /* var pos=polygon.position;
        var angle=polygon.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("lightpink");
        rectMode(CENTER);
        rect(0,0,polygon.width,polygon.height);
        pop();*/
   slingshot.display();
    drawSprites();
}

function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){

    slingshot.fly();
}

function keyPressed(){
    if(keyCode===32){
        slingshot.attach(polygon);
    }
}