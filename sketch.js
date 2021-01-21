const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, player, playerImg, enemy, computerImg;
var bottomEdge, topEdge, snowball;
var balls=5, lives=3;
var PLAY = 1;
var END = 0;
var gameState = PLAY;

function preload(){
    backgroundImg = loadImage("images/Background.jpg")
    playerImg = loadImage("images/Player.png")
    computerImg = loadImage("images/Enemy.png")
}

function setup(){
    canvas=createCanvas(1300,650)
    engine = Engine.create();
    world = engine.world;
    
    snowball = new Ball(100,300,50,50);
    
    slingshot = new SlingShot(snowball.body,{x:150, y:290});

    enemy = new Enemy(1100,100,50,50);

    player=createSprite(200,300,50,50)
    player.addImage(playerImg)
    player.scale=0.6;

    //enemy.velocityY=5;

    edges=createEdgeSprites();
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    //enemy.bounceOff(edges);

    /*if(snowball.isTouching(enemy)){
        lives=lives-1;
        World.remove(world,this.body)
        text("Press space to reset",200,50);
    }*/

    /*if(lives===0){
        gameState=
    }*/

    if(mouseReleased()){
        snowball=snowball-1;
    }

    if(snowball===0){
        gameState=END;
    }

    slingshot.display();
    snowball.display();
    enemy.display();

    drawSprites();

    textSize(20);
    fill("black");
    text("Snowballs left: "+balls,100,70);
    text("Lives left: "+lives,1000,70);
}

function mouseDragged(){
    Matter.Body.setPosition(snowball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly();
}