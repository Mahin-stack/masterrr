class Gas2{
    constructor(x,y,width,height){

        this.x =x;
        this.y =y     
        this.width =width
        this.height=height
        this.image = loadImage("images/cf.png");
        this.isCollide = false

    }
   
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
    moveGas2(x,y){
        this.x = this.x + x;
        this.y = this.y +y;
       
    }

    hit2(player){
    if(player.x-this.x < player.width/2 + this.width/2
        && this.x-player.x < player.width/2+ this.width/2
        && player.y-this.y < player.height/2 + this.height/2
        && this.y - player.y<player.height/2+this.height/2){
     return true;
        }
    }
    
}
