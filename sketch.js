
function preload(){
  ship_running = loadAnimation("ship1.png","ship2.png","ship3.png","ship4.png");
  groundImage = loadImage("sea.png")
}


function setup(){
  createCanvas(400,400);
 ship = createSprite(50,160,20,50);
  ship.addAnimation("running", ship_running);
  edges = createEdgeSprites();

  ship.scale = 0.5;
  ship.x = 50

    
  createCanvas(400,400);
  sea = createSprite(200,160,20,50);
   ship.addAnimation("sea",seaImage);
   edges = createEdgeSprites();
   ground.x = ground.width/2
  
}

function draw() {
  background("blue");
  ground.velocityX = -2

  console.log(ground.x)
  if(ground.x <0)
  {
    ground.x = ground.width/2
  }

  //jump when space key is pressed
 
  
  trex.velocityY = trex.velocityY + 0.5;
  drawSprites();
}





 
