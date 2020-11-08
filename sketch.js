var Runner;
var ground;
var Obstacles;
var BgImage, bg;
var score = 0;

function setup() {
  createCanvas(800,400);
  BgImage = loadImage("background.jpg");

  //Runner_running = loadAnimation("Runner1.png", "Runner2.png", "Runner3.png");

  //Obstacle_img = loadImage("Music-notes.png");
   
 // Crow_img = loadImage("crow.png");
  // bg= createSprite();
   
 // bg.addImage(BgImage);

  // bg.velocityX = -4;

   bg=createSprite(0,0,800,400);

  
   bg.scale=1.5;
   bg.x=bg.width/2;
   bg.velocityX=-4;
   image(BgImage,200,200,50,50)
  Runner = createSprite(100,340,20,50);
  Runner.shapeColor = "red";
 // Runner.addAnimation("Running", Runner_running);
 
 ground = createSprite(400,350,800,10);
 ground.velocityX=-4;
 ground.x=ground.width/2;
 
 

  obstaclesGroup = new Group();
 
}

function draw() {
  background(0,0,0);  
  drawSprites();
  
  if(ground.x<0){
    ground.x = ground.width/2

  }
  if(ground.x>100){
    ground.x = ground.width/2

  }
  if(frameCount%1==0){
    score = score+1;

  }

  if(keyDown("space")) {
    Runner.velocityY = -6;        

  }
 // if(obstaclesGroup.isTouching(Runner)) {
   // Runner.destroySprite();

 // }
  Runner.velocityY+= 0.8;
  
  Runner.collide(ground);
  spawnObstacles();
  stroke(0);
  textSize(20);
  fill(0);
  text("Score:" + score, 500,50);
  
}



function spawnObstacles() {
  if(frameCount%320 == 0) {
  var obstacle = createSprite(800,350,10,40);
        obstacle.velocityX = -7;
    //  obstacle.addImage(Obstacle_img);


    obstacle.lifetime = 320;
  
    obstaclesGroup.add(obstacle);

  if(frameCount%160 == 0){
    var obstacle2 = createSprite(800,350,10,40);

    obstacle2.velocityX = -7;

   // obstacle2.addImage(Crow_img);

    obstacle2.lifetime = 160;

    obstaclesGroup.add(obstacle2);

  }
  }

}