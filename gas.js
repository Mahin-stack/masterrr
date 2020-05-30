class Gas{
    constructor(x,y,width,height){

        this.x =x;
        this.y =y     
        this.width =width
        this.height=height
        this.image = loadImage("images/ckl.png")
    }
   
    display(){
        imageMode(CENTER);
        image(this.image,this.x,this.y,this.width,this.height);
    }
    moveGas(x,y){
        this.x = this.x + x;
        this.y = this.y +y;
       
    }
}
