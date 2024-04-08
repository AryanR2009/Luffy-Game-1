var splashScreen;
var play_btn, info_btn;
var bg_img;
var playerImg, player;
var enemy1, enemy2, enemy3, enemy4, enemy5;
var enemyGroup1, enemyGroup2;
var enemylvl1;
var health = 200
var maxHealth = 200;
var score = 0;
var gameState= "wait"

function preload(){
    splashScreen=loadImage("assets/splashScreen.gif")
    bg_img=loadImage("assets/bgImage.png")
    enemy1 = loadImage("assets/draculeMihawk.png")
    enemy2 = loadImage("assets/doFlamingo.png")
    enemy3 = loadImage("assets/charlotteKatakuri.png")
    enemy4 = loadImage("assets/geckoMoria.png")
    enemy5 = loadImage("assets/kaidouDragon.png")
    playerImg = loadImage("assets/luffy.gif")
}

function setup(){
    createCanvas(windowWidth,windowHeight)

    play_btn = createImg("assets/play.png");
    play_btn.position(windowWidth/2,windowHeight/2);
    play_btn.size(200,80);
    play_btn.hide();

    info_btn = createImg("assets/info.png");
    info_btn.position(windowWidth/3,windowHeight/2);
    info_btn.size(200,80);
    info_btn.hide();

   
    player = createSprite(windowWidth/15,windowHeight-150);
    player.addImage(playerImg);
    player.scale = 1
    player.visible = false;

    enemyGroup1 = new Group()
    enemyGroup2 = new Group()

    

}
function draw(){
    if(gameState=="wait"){
        background(splashScreen);
        play_btn.show()
        info_btn.show()
    }
   
    play_btn.mousePressed(() => {
        play_btn.hide()
        info_btn.hide()
        gameState="level1"
    })
    info_btn.mousePressed(()=>{
        play_btn.hide()
        info_btn.hide()
        gameState="info"
    })

    if(gameState=="info"){
        aboutGame();
    }
    

    if(gameState=="level1"){
        background(bg_img);
        player.visible = true;

        spawnEnemies1();
        healthLevel();

    }

    drawSprites();
    if(gameState == "level1"){
        fill("red");
        textSize(30)
        text("SCORE : "+score, windowWidth-200, windowHeight/12)
    }
}
function aboutGame(){
   swal({
     title: "About Game",
     text: "Use the arrows keys to move around, and defeat as many enemies as you possible. Have Fun & Good Luck!         Created by: Aryan Raja",
     imageUrl: "assets/splashScreen.gif",
     imageSize: "200x200",
     confirmButtonText: "Back To Main Screen",
     confirmButtonColor: "Green"

   },
   function(){
    gameState = "wait"
  }
   ) 
}

function spawnEnemies1(){
    console.log("spawnEnemies")
    enemylvl1 = createSprite(windowWidth+200,windowHeight-150)
    var random = Math.round(Math.random()*1+1); // 0 - 1, 1 - 2, 0.5 - 1.5 - 2 , 0.2 - 1.2 - 1
// 1,2 // A,B case A: case B /// Rohit, Aryan case Rohit: case Aryan
// / - division  % - reminder 50%2 (0) 51%2 (1)
    if(frameCount % 200 == 0){ 
        //checking if remainder is equal to zero - divisible by 100
    switch(random){
        case 1:
            enemylvl1.addImage(enemy1);
            enemylvl1.scale = 0.3;
            enemylvl1.velocityX = -10
            break;
        case 2:
            enemylvl1.addImage(enemy2);
            enemylvl1.scale = 0.3;
            enemylvl1.velocityX = -10
            break;
        default:
            break;
    }
    enemyGroup1.add(enemylvl1)
    }
}

function healthLevel(){
    stroke("darkgreen");
    strokeWeight(5);
    noFill()
    rect(windowWidth/12, windowHeight/12, maxHealth, 20);

    noStroke();
    fill('#22FD4E');
    rect(windowWidth/12, windowHeight/12, health, 20);
}
