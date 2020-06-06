var bg;
var player;
var c02 =[];
var score = 0
var o2=[]
var so2 = [];
//var gases = [];


function preload(){
bg = loadImage("images/bg1.png");
}


function setup(){
canvas = createCanvas(displayWidth-20,displayHeight-30);
player = new Player(displayWidth/2-400,displayHeight/2+150,250,280);
}

function draw(){
// if(gameState === ) 
background(bg);
player.display();

if(keyDown(LEFT_ARROW)){
player.move(-6,0)    
}

if(keyDown(RIGHT_ARROW)){
    player.move(8,0)    
    }
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
    }
   }
   if(score === 1){
    player.visible = false
    player.happyDisplay();
  
   }

   fill(0);
   textSize(50)
text("Score : "+score,displayWidth/2-625,displayHeight/2-325);
 
}
