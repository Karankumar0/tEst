var chosen,chooseRock,chooseScissors,choosePaper,chosenItem,computer,choice,player,start,pressed,winner;


function preload(){
chooseRock = loadImage("images/Rock.png");
choosePaper = loadImage("images/Paper.png");
chooseScissors = loadImage("images/Scissors.png");
chosenItem=loadImage("images/Mystery.png");
start=loadImage("images/Start.png");

}
// -----

//buttons
function setup(){
 chooseRock = createSprite(70,100);
chooseRock.addImage(chooseRock);
 choosePaper = createSprite(200,100);
choosePaper.addImage(choosePaper);
 chooseScissors = createSprite(330,100);
chooseScissors.addImage(chooseScissors);

//chosen item
 chosen = "none";
 chosenItem = createSprite(250, 172.5);
chosenItem.addImage(chosenItem);
chosenItem.scale = 0.5;

//computer item
 computer = createSprite(80,300);
 choice = 0;
computer.addImage(chosenItem);

//player item
 player = createSprite(320,300);
player.addImage(chosenItem);

//start button
var start = createSprite(200,375);
var pressed = false;
start.addImage(start);
start.scale = 0.3;

//winner selected
 winner = "not selected";
}
function draw() {
  //draw background
  background(200,200,200);
  
  //choosing text
  textSize(30);
  fill("black");
  text("Choose One:", 115,40);
  
  //what you chose
  textSize(25);
  text("You Chose:", 90, 180);
  
  //computer text
  text("Computer:",20,240);
  
  //player text
  text("You:",295,240);
  
  //dividing line
  fill(50,50,50);
  rect(0,200,400,10);
  
  //button function
  if(mousePressedOver(chooseRock)){
    chosen = chooseRock;
    chosenItem.addImage(chooseRock);
    chosenItem.scale = 0.5;
  }
  if(mousePressedOver(choosePaper)){
    chosen = choosePaper;
    chosenItem.addImage(choosePaper);
    chosenItem.scale = 0.5;
  }
  if(mousePressedOver(chooseScissors)){
    chosen = chooseScissors;
    chosenItem.setAnimation(chooseScissors);
    chosenItem.scale = 0.5;
  }
  
  //start the duel
  if(mousePressedOver(start) && chosen !== "none" && pressed === false){
    player.addImage(chosen);
    choice = round(random(1,3));

    if(choice === 1){
      computer.addImage(chooseRock);
    }else if(choice === 2){
      computer.addImage(choosePaper);
    }else if(choice === 3){
      computer.addImage(chooseScissors);
    }
    pressed = true;
    
    if((chosen === chooseRock && choice === 1) || (chosen === choosePaper && choice === 2) || (chosen === chooseScissors && choice === 3)){
      winner = "none";
    }else if((chosen === chooseRock && choice === 2) || (chosen === choosePaper && choice === 3) || (chosen === chooseScissors && choice === 1)){
      winner = "computer";
    }else{
      winner = "player";
    }
    console.log(winner);
  }
  
  if(winner === "none"){
    textSize(50);
    text("Draw", 140,310);
  }else if(winner === "computer"){
    textSize(30);
    text("Computer\n   Wins!", 135,300);
  }else if(winner === "player"){
    textSize(30);
    text("You Win!", 140,310);
  }
  
  //end the press
  if(mouseWentUp()){
    pressed = false;
  }
  //draw sprites
  drawSprites();
}


