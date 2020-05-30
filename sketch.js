var bg;
var player;
var gases = [];

function preload(){
bg = loadImage("images/bg1.png");
}


function setup(){
canvas = createCanvas(displayWidth-20,displayHeight-30);
player = new Player(displayWidth/2-400,displayHeight/2+150,400,400);
}

function draw(){
background(bg);
player.display();

if(keyDown(LEFT_ARROW)){
player.move(-6,0)    
}

if(keyDown(RIGHT_ARROW)){
    player.move(7,0)    
    }
if(frameCount % 50 === 0){
    gas = new Gas(random(width),-10,100,150);
    gases.push(gas)
}
   for(var i= 0;i<gases.length;i++){
       gases[i].display();
       gases[i].moveGas(0,8)
   }
}




