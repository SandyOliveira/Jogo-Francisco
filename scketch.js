//crie as variaveis dos seus personagens aqui
var bob;


function preload(){
  //carregue as imagens dos personagens aqui
}

function setup() {
  createCanvas(800,400);
  //crie os sprites aqui
  bob = createSprite(200,200,45,45);
  bob.shapeColor = "red";

  Patrick = createSprite(340,200,45,45);
  Patrick.shapeColor = "yellow";

  
  

}

function draw() {
  background(7,255,255); 
  
 
  guiarBob();
  guiarPatrick();

  drawSprites();
}

function guiarBob(){
  if(keyDown("w") || keyDown("w")){
    bob.y = bob.y + 3  
  }
  if(keyDown("d") || keyDown("D")){
    bob.x = bob.x + 3  
  }
  if(keyDown("a") || keyDown("A")){
    bob.x = bob.x - 3  
  }
  if(keyDown("s") || keyDown("S")){
    bob.y = bob.y - 3  
  }
  
}
function guiarPatrick(){
  if(keyDown(DOWN_ARROW) || keyDown(DOWN_ARROW)){
    Patrick.y = Patrick.y + 3  
  }
  if(keyDown(RIGHT_ARROW) || keyDown(RIGHT_ARROW)){
    Patrick.x = Patrick.x + 3  
  }
  if(keyDown(LEFT_ARROW) || keyDown(LEFT_ARROW)){
    Patrick.x = Patrick.x - 3  
  }
  if(keyDown(UP_ARROW) || keyDown(UP_ARROW)){
    Patrick.y = Patrick.y - 3  
  }
  
}
