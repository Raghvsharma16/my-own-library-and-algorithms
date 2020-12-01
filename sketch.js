var fixedRect,movingRect;
var rect1,rect2;

var gameObject1;
function setup() {
  createCanvas(800,400);

 fixedRect= createSprite(200,200,50,80);
 fixedRect.shapeColor = "green";

movingRect = createSprite(400,200,80,30);
movingRect.shapeColor = "green";

rect1=createSprite(100,100,50,50);
rect1.shapeColor = "yellow";
rect1.velocityX =  2;

rect2 = createSprite(400,100,50,50);
rect2.shapeColor = "blue";
rect2.velocityX = -2;

gameObject1 = createSprite(600,100,50,50);
gameObject1.shapeColor = "green";
}

function draw() {
  background(0,0,0);
  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if (isTouching(rect1,rect2))
  {
    rect1.shapeColor = "red";
    rect1.shapeColor = "red";
  }
  else
  {
    rect1.shapeColor = "yellow";
    rect2.shapeColor = "blue";
  }

  bounceOff(movingRect,rect2);
  drawSprites();

}

