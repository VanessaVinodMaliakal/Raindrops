class Raindrop{
    constructor(x,y,width,height){
      
        this.raindrop=Bodies.rectangle(x,y,width,height);
        this.width=width;
        this.height=height;
        this.image=loadImage("raindrop.jpg")

         World.add(world,this.raindrop);
       
}

    display(){
      
        imageMode(CENTER);
        image(this.image,this.raindrop.position.x,this.raindrop.position.y,this.width,this.height);

    }
}