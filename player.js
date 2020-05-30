class Player{
    constructor(x,y,width,height){
this.x = x;
this.y = y;
this.width = width;
this.height = height; 

this.image = loadImage("images/kk.png");
    }

  display(){
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.height)

  }
  
  move(x,y){
this.x = this.x + x;
this.y = this.y + y; 
  }
}