var bg,bg1,bg2,bg3;
var trophy,trophyImg,player1,player2,player3,player4,player5 ;
var flame, flameImg;
var brokenHeartImg,brokenHeart;
var ob1,ob2,ob3,ob1Img,ob2Img,ob3Img,ob4,ob4Img;
var edges;
var form;
var score=0;
var obstacle;
function preload(){
  //Background Images
  bg = loadImage("background_landscape11.png");
  bg1 = loadImage("background_landscape04.png");
  bg2 = loadImage("background_landscape28.png");
  bg3 = loadImage("bg_landscape06.png");
  //Game Items
  trophyImg = loadImage("award_trophy1.png");
  //Player
  player1Img = loadImage("alienBeige.png");
    //Monsters
  flameImg = loadImage("animated-flame-png.png");
  ob1Img = loadImage("spike_bot.png");
  ob2Img = loadImage("retrocreature_06.png");
  ob3Img = loadImage("fly_bot.png");
  ob4Img = loadImage("spacebattle_06.png");

}


function setup() {
  createCanvas(500,400);
  //createSprite(400, 200, 50, 50);
 /* bgq = createSprite(400,400,1000,1000);
  bgq.addImage("bgq",bg1);*/
  player1 = createSprite(200,200,50,50);
  player1.addImage("player1",player1Img);
 
  
}

function draw() {
  background(bg);  
  image(bg, 500,400);
  bg.velocityY=-1;
  edges = createEdgeSprites();
  //player1
  if(keyDown("UP_ARROW")){
    player1.velocityY = -3;
  }
  if(keyDown("DOWN_ARROW")){
    player1.velocityY = 3;
  }
  if(keyDown("LEFT_ARROW")){
    player1.velocityX = -3;
  }
  if(keyDown("RIGHT_ARROW")){
    player1.velocityX = 3;
  }
  player1.bounceOff(edges)

  spawnObstacles();
  drawSprites();
  textSize(14);
  fill("blue");
  text("Score: ",340,40)
  
}

function spawnObstacles(){
  if (frameCount % 60 === 0){
    var obstacle = createSprite(600,165,10,40);
    obstacle.velocityX = -(6 + score/100);
    
     //generate random obstacles
     //var rand = Math.round(random(1,5));
     var rand
     switch(rand) {
       case 1: obstacle.addImage(ob1Img);
               break;
       case 2: obstacle.addImage(ob2Img);
               break;
       case 3: obstacle.addImage(ob3Img);
               break;
       case 4: obstacle.addImage(ob4Img);
               break;
      case 5 : obstacle.addImage(flameImg);
               break;
       default: break;
     }
    }
  }