var fixedRect, movingRect;
function setup() {
  createCanvas(8000,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="white";

  movingRect=createSprite(600, 200, 50, 50);
  movingRect.shapeColor="white";
}

function draw() {
  background(0,800,800);
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if (movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 &&
    fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2 &&
    movingRect.y-fixedRect.y<=fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="yellow"
    fixedRect.shapeColor="red";
  }  
  else{
    movingRect.shapeColor="white"
    fixedRect.shapeColor="white"
  }
  drawSprites();
}