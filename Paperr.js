class Paperr {
    constructor(x,y,r){
        var options = {
            friction:0,
            isStatic:false,
            restitution:0.3,
            density:1.2

        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("paper.png");
        
        this.body = Bodies.circle(x,y,r,options);
        World.add(world, this.body);    
    }
    display(){
        push()
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER)
        image(this.image,0,0,90,90)
        pop();
    }
}