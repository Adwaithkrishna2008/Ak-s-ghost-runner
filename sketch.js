var tower,towerImg;
var door,doorImg,doorG;
var ghost,ghostImg;
var climber,climberImg,climberG;
var Ivblock,IvblockG;
var gameState="play"
var spookyS;

function preload(){
  
  towerImg=loadImage("tower.png");
  doorImg=loadImage("door.png");
  ghostImg=loadImage("ghost-standing.png");
  climberImg=loadImage("climber.png");
   spookyS=loadSound("spooky.wav")
}

function setup(){
  
  createCanvas(600,600);
  
  tower=createSprite(300,300)
  tower.addImage(towerImg);
  tower.velocityY=1;
  
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImg);
  ghost.scale=0.3;
  
  spookyS.loop();
  
 doorG = new Group();
 climberG = new Group();
IvblockG = new Group();
}

function draw(){
  
 if(gameState==="play"){
   
   
  if(tower.y>400){
    tower.y=300;
   }
  spawnDoor();
  
  
  if(keyDown("left_Arrow")){
    
    ghost.x=ghost.x-3;
    
  }
  
   if(keyDown("right_Arrow")){
    
    ghost.x=ghost.x+3;
    
  }
  
  if(keyDown("space")){
    
    ghost.velocityY=-5;
    
  }
  
  ghost.velocityY=ghost.velocityY+5;
  
   if(climberG.isTouching(ghost)){
     ghost.velocityY=0;
     }
   if(IvblockG.isTouching(ghost)||ghost.y>600){
     ghost.destroy();
   gameState="end"
   }
  drawSprites();
  }
  
 if(gameState==="end"){
   
   stroke("blue");
   fill("red");
   textSize(60);
   text("GAMEOVER",130,250)
   
 }
  
  
 
}


function spawnDoor(){
  
  if(frameCount%240===0){
    
  door=createSprite(200,-50)
  door.addImage(doorImg);
  door.velocityY=1;
  door.lifetime=800;
  doorG.add(door);
  
    
  Ivblock=createSprite(200,15)
  Ivblock.width=climber.width;
  Ivblock.height=2;
  Ivblock.x=door.x; 
  Ivblock.velocityY=1;
  Ivblock.lifetime=800;
  IvblockG.add(Ivblock);
    
  climber=createSprite(200,10)
  climber.addImage(climberImg);
  climber.velocityY=1;
  climber.lifetime=800;
  climberG.add(climber);
  climber.x=door.x;
    
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    
 
    
door.x=Math.round(random(120,400))
   
    
  }
  
  
  
  
  
  
  
  
  
}










