var box,rect,rect1

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,20,20);
  rect= createSprite(380,200,10,50);
  rect1= createSprite(20,200,10,50);
  rect1Score=0;
  Score=0;
}

function draw() 
{
  background("black");
  drawSprites();

  rect.y = World.mouseY;
  rect1.y= box.y;

  text(rect1Score, 170,20);
  text(Score, 230,20);
 
  box.velocityX=4;
  box.velocityY=4;
}



