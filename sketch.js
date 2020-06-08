var bg;
var player;
var player_sadimg;
var player_happyimg
var c02 =[];
var score = 0
var life = 2
var o2=[]
var so2 = [];
//var gases = [];
var s2;


function preload(){
bg = loadImage("images/bg1.png");
player_sadimg = loadAnimation("images/e0.png","images/e1.png","images/e2.png","images/e3.png","images/e4.png");
player_happyimg = loadAnimation("images/he0.png","images/he1.png","images/he2.png");
s2 = loadSound("images/s2.mp3");
}


function setup(){
canvas = createCanvas(displayWidth-20,displayHeight-30);
player = createSprite(500,500,150,160);
player.scale =  2
player.addAnimation("sadimg",player_sadimg);
player.addAnimation("happyimg",player_happyimg);
}

function draw(){
// if(gameState === ) 
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
       c02.splice(j,1)
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

   fill(0);
   textSize(50)
text("Score : "+score,displayWidth/2-625,displayHeight/2-325);
 
fill(0);
textSize(50)
text("Life : "+ life,displayWidth/2+25,displayHeight/2-325);

drawSprites();
}
