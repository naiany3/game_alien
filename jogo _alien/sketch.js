var bg,bgImg;
var player;
var playerImg , playershoot , playershootImg;
var alien1,alien2,nave,alien1Img,alien2Img,naveImg;
var heart_1,heart_2,heart_3,heart_1Img,heart_2Img,heart_3Img;
var life = 3;
var gameState = "fight"
var balas = 30;
var bala;
var grupoBala;
var grupoalien1;
var grupoalien2;
var gruponave;


function preload(){
  bgImg = loadImage("assets/background_soloLunar.webp")
  playerImg = loadAnimation("assets/p5.png")
  playershootImg = loadAnimation("assets/p1.png","assets/p2.png","assets/p3.png","assets/p4.png")
  //playershootImg = loadAnimation("assets/p1.png")
  alien1Img = loadImage("assets/alien1.gif")
  alien2Img = loadImage("assets/alien2.gif")
  naveImg = loadImage("assets/nave.gif")
  heart_1Img = loadImage("assets/heart_1.png")
  heart_2Img = loadImage("assets/heart_2.png")
  heart_3Img = loadImage("assets/heart_3.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight );
  //adicionar a imagem de fundo
  bg = createSprite(displayWidth/2,displayHeight/2 + 130,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
 
  heart_1 = createSprite(width-150,160,10,10)
  heart_1.addImage(heart_1Img)
  heart_1.scale = 0.2

  heart_2 = createSprite(width-90,160,10,10)
  heart_2.addImage(heart_2Img)
  heart_2.scale = 0.2

  heart_3 = createSprite(width-150,160,10,10)
  heart_3.addImage(heart_3Img)
  heart_3.scale = 0.2

  heart_1.visible = false;
  heart_2.visible = false;

  player = createSprite(displayWidth-1150,displayHeight-300,50,50)
  player.addAnimation("playerImg",playerImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,100,100)
  player.addAnimation("shooting",playershootImg)
   
  grupoBala = new Group()

  grupoalien1 = new Group()
  grupoalien2 = new Group()
  gruponave = new Group()


}

function draw() {
  background(0); 
  if(life === 3){
    heart_3.visible = true
    heart_2.visible = false
    heart_1.visible = false

  }
  if(life === 2){
    heart_2.visible = true
    heart_3.visible = false
    heart_1.visible = false
  }
  if(life === 1){
    heart_1.visible = true
    heart_2.visible = false
    heart_3.visible = false
  }
  if(life === 0){
    heart_3.visible = false
    heart_2.visible = false
    heart_1.visible = false
    player.destroy()
    gameState = "lost"
  }
  if(gameState === "fight"){
    inimigo1()
    inimigo2()
    inimigo3()
    if(keyDown("left")){
      player.x = player.x - 5
    }
    if(keyDown("right")){
      player.x = player.x + 5
    }
    if(keyDown("up")){
      player.y = player.y - 5
    }
    if(keyDown("down")){
      player.y = player.y + 5
    }
    if(keyWentDown("space")){
      player.changeAnimation("shooting")
      bala = createSprite(player.x, player.y ,10,3)
      bala.velocityX = 4
      grupoBala.add(bala)
      grupoBala.setColorEach("red")
      player.depth = bala.depth
      player.depth += 2
      balas -=1
      }else if(keyWentUp("space")){
        player.changeAnimation("playerImg")
      }
      if(balas == 0 ){
        gameState = "bala"
      }


  }
  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando touches (toques)

  //libere as balas e mude a imagem do personagem para a posição de tiro quando a tecla espaço for pressionada

  drawSprites();
}
 function inimigo1(){
  if(frameCount%150===0){
    alien1 = createSprite(random(1450,1500),random(190,300),15,15)
    alien1.addImage(alien1Img)
    alien1.scale = 0.5
    alien1.velocityX = -5
    
    alien1.setCollider("rectangle",0,0,150,100)

    alien1.lifetime = 350
    grupoalien1.add(alien1)
  }
 }
  function inimigo2(){
    if(frameCount%210===0){
      alien2 = createSprite(random(1450,1500),random(550,600),15,15)
      alien2.addImage(alien2Img)
      alien2.scale = 0.7
      alien2.velocityX = -5
      
      alien2.setCollider("rectangle",0,0,150,100)
  
      alien2.lifetime = 350
      grupoalien2.add(alien1)
    }
   }
   
   function inimigo3(){
    if(frameCount%230===0){
      nave = createSprite(random(1450,1500),random(400,400),15,15)
      nave.addImage(naveImg)
      nave.scale = 0.4
      nave.velocityX = -5
     
      nave.setCollider("rectangle",0,0,150,100)
  
      nave.lifetime = 350
      gruponave.add(nave)
    }
   }
   