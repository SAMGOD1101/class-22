var helicopter ;
var package;

function setup() {

createCanvas(400,400);


package.createSprite(10,10,30,30);
helicopter.createSprite(10,10,30,30);


}

function draw() {
  background("white");
  
   
  package.velocity.x=5;
  helicopter.velocity.x=5;

  if (keyDown(LEFT_ARROW)) {
    package.velocityX=0;
    package.velocityY=5;
  }

   if (package.position.x>400) {
    Text("YOU CANT BE A GOOD PILOT",100,100);
     
   }
         
  drawSprites();
  }




  





