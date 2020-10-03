var bigBox, smallBox

function setup() {
  createCanvas(800,800);
  bigBox = createSprite(400, 200, 100, 100);
  bigBox.shapeColor = "green"

  smallBox = createSprite(400, 400, 90, 90);
  smallBox.shapeColor = rgb(0, 255, 0)

  smallBox.debug = true
  bigBox.debug = true
}

function draw() {
  background(255,255,255);

  smallBox.x = mouseX
  smallBox.y = mouseY

  if(smallBox.x - bigBox.x <= smallBox.width/2 + bigBox.width/2 &&
     bigBox.x - smallBox.x <= smallBox.width/2 + bigBox.width/2 &&
     smallBox.y - bigBox.y <= smallBox.height/2 + bigBox.height/2 &&
     bigBox.y - smallBox.y <= smallBox.height/2 + bigBox.height/2){
    smallBox.shapeColor = "red"
    bigBox.shapeColor = "red"
  } else {
    smallBox.shapeColor = rgb(0, 255, 0)
    bigBox.shapeColor = "green"
  }
  
  drawSprites();
}