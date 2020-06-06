class Player{
    constructor(x,y,width,height){
this.x = x;
this.y = y;
this.width = width;
this.height = height; 
this.visible = true;
this.image = loadImage("images/er.png");
this.image2 = loadImage("images/iki.png");

    }

  display(){
    this.visible= true;
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.height)

  }

  happyDisplay(){
    imageMode(CENTER);
    image(this.image2,this.x,this.y,this.width,this.height)

  }
  
  move(x,y){
this.x = this.x + x;
this.y = this.y + y; 
  }
}