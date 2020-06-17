var bg;
var player;
var player_sadimg;
var player_happyimg
var c02 =[];
var score = 0
var life = 5
var o2=[]
var so2 = [];
//var gases = [];
var s2;
var s3;
var mode;
var heart;
var heart_img;
var h1;
var h2;
var h3;
var h4;
var h5;
var bg2

var gameState = "END"


function preload(){
bg = loadImage("images/bg1.png");
bg1 = loadImage("images/fu.jpg");
bg2 = loadImage("images/bgm.jpg");
player_sadimg = loadAnimation("images/e0.png","images/e1.png","images/e2.png","images/e3.png","images/e4.png");
player_happyimg = loadAnimation("images/he0.png","images/he1.png","images/he2.png");
s2 = loadSound("images/f4.mp3");
s3 = loadSound("images/f1.mp3");

heart_img = loadImage("images/h1.png");
}


function setup(){
mode =0
canvas = createCanvas(displayWidth-20,displayHeight-30);
player = createSprite(500,500,150,160);
player.scale =  2
player.addAnimation("sadimg",player_sadimg);
player.addAnimation("happyimg",player_happyimg);

h1 = createSprite(865,50,50,50);
h1.scale = 0.2
h1.addImage("he",heart_img);

h2 = createSprite(950,50,50,50);
h2.scale = 0.2
h2.addImage("hea",heart_img);

h3 = createSprite(1050,50,50,50);
h3.scale = 0.2
h3.addImage("h",heart_img);

h4 = createSprite(1150,50,50,50);
h4.scale = 0.2
h4.addImage("he",heart_img);

}

function draw(){
clear()
if(mode === 0){
  background(bg1) ;
textSize(25)  ;
fill(0)
  text("Save Earth !! Save Future",500,100);
  text("Press ENTER to Start",100,100);
}
if(mode === 1){
background(bg);

player.x =mouseX;
player.y = mouseY;

    //so2 is starting ;;
if(frameCount % 50 === 0){
    gas = new Gas3(random(width),-10,110,120);
    //gases.push(gas)
   so2.push(gas)
}


    for(var i= 0;i<so2.length;i++){
      so2[i].display();
       so2[i].moveGas3(0,10);

     if(so2[i].hit3(player)){
      // console.log("player")
      so2.splice(i,1)
      life = life-1
      s3.play();
    }
   }
   //co2 is starting;;;
   if(frameCount % 40 === 0){
    gas2 = new Gas2(random(width),-10,110,120);
    c02.push(gas2)
}


   for(var j= 0;j<c02.length;j++){
       c02[j].display();
       c02[j].moveGas2(0,10)

       if(c02[j].hit2(player)){
       // console.log("player")
       c02.splice(j,1);
       life = life-1
s3.play();
    }
   }
   //o2 is starting;;;;
   if(frameCount % 30 === 0){
    gas3 = new Gas(random(width),-10,110,120);
    o2.push(gas3)
}


   for(var k= 0;k<o2.length;k++){
      o2[k].display();
    o2[k].moveGas(0,10)

       if(o2[k].hit(player)){
       // console.log("player")
       o2.splice(k,1);
       score = score + 1
       s2.play();
    }
   }
   if(score === 3){
   player.changeAnimation("happyimg",player_happyimg);
   player.scale = 2
   }
     
   if(score===5|| score ===10 || score===15 || score ===20){
      player.changeAnimation("playerhappy",player_happyimg)
   }

   if(life === 10 || life===5){
      player.changeAnimation("playersad", player_sadimg)
   }


   fill(0);
   textSize(50)
text("Score : "+score,displayWidth/2-625,displayHeight/2-325);
 
fill(0);
textSize(50)
text("Life : ",displayWidth/2+25,displayHeight/2-325);

if(life === 4){
h1.visible = false
}

if(life ===3){
   h2.visible = false
   }
   if(life ===2){
      h3.visible = false
      }
    
      if(life ===1){
         h4.visible = false
      }
  
drawSprites();
}
if(life === 0){
   mode = 5
     clear()
     background(bg2)
    
  
   // mode = 2
    
  }
}
function keyPressed(){
if(keyCode === ENTER){
   mode = 1
}

}
