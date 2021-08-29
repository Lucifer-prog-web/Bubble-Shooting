var score =0;
var gun,bluebubble,redbubble, bullet, backBoard;
var gunImg,bubbleImg, bulletImg, blastImg, backBoardImg,bullet;
var redBubbleGroup, redBubbleGroup, bulletGroup,bubble,bubble2;
var heading,scoreBoard;
var blast;
var life =3;
var score=0;
var gameState=1

function preload(){
  gunImg = loadImage("gun1.png")
  blastImg = loadImage("blast.png")
  bulletImg = loadImage("bullet1.png")
  blueBubbleImg = loadImage("waterBubble.png")
  redBubbleImg = loadImage("redbubble.png")
  backBoardImg= loadImage("back.jpg")
}
function setup() {
  createCanvas(800, 800);

  backBoard= createSprite(50, width/2, 100,height);
  backBoard.addImage(backBoardImg)
  
  gun= createSprite(100, height/2, 50,50);
  gun.addImage(gunImg)
  gun.scale=0.2

  bullet = createSprite(200,400);
  bullet.addImage("bullate",bulletImg);
  bullet.scale=0.1;

  blast = createSprite(400,400);
  blast.addImage(blastImg)
  blast.scale = 0.3;
  
  blast.x = bullet.x;
  blast.y = bullet.y;

  heading= createElement("h1");
  scoreBoard=createElement("h1");
  
  bulletGroup = createGroup();   
  blueBubbleGroup = createGroup();   
  redBubbleGroup = createGroup();   



  
  
}

function draw() {
  background("#BDA297");

  bullet.y = gun.y;

  bulletGroup.add(bullet);
  

  //display Score and number of lifes

  scoreBoard.html("Score: "+score)
  scoreBoard.style("color:red");
  scoreBoard.position(width-200,20)

  if(gameState===1){
    gun.y=mouseY  

    if(frameCount % 80 === 0){
      drawblueBubble();
    }

    if(frameCount % 100 === 0){
      drawredBubble();
    }

    if(keyCode == "space"){
      shotBullet();
    }

   
    
    drawSprites();
  }
     
}

function shotBullet(){


}

function drawblueBubble(){

  bubble = createSprite(780,Math.random(0,800));
  bubble.addImage("bulbul",blueBubbleImg);
  bubble.scale = 0.1
  bubble.velocityX -=8;
  bubble.lifeTime = 400;
  blueBubbleGroup.add(bubble);

}

function drawredBubble(){
  bubble2 = createSprite(780,Math.random(0,800));
  bubble2.addImage(redBubbleImg);
  bubble2.scale = 0.1
  bubble2.velocityX -=8;
  bubble2.lifeTime = 400;
  redBubbleGroup.add(bubble2);
}

function handleBubbleCollision(bubbleGroup){
  if(life > 0){
    score=score+1
  }
}
