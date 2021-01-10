
var fixed, moving;




function setup() {
  createCanvas(800,400);
  

 fixed = createSprite(100, 200, 50, 80);
 moving = createSprite(400, 200, 80, 50);
 fixed.shapeColor = "red";
 moving.shapeColor = "yellow";
}

function draw() {
  background(255,255,255); 
  moving.y = World.mouseY;
  moving.x = World.mouseX;

  if (moving.x - fixed.x < moving.width/2 + fixed.width/2 && fixed.x - moving.x < moving.width/2 +  fixed.width/2  && fixed.y - moving.y < moving.height/2 + fixed.height/2 && moving.y - fixed.y < moving.height/2 + fixed.height/2){
   moving.shapeColor = "blue";
   fixed.shapeColor = "blue";
  } else{
  moving.shapeColor = "yellow";
  fixed.shapeColor = "red";
  }
  
  
  drawSprites();
}