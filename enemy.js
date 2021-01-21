class Enemy {
    constructor(x, y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':false,
            velocity:{x:5,y:5}
        }
        this.image = loadImage("Images/Enemy.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
  
   display(){
     //console.log(this.body.speed);
     if(this.body.speed > 3){
       World.remove(world, this.body);
       image(this.image, this.body.position.x, this.body.position.y, 170, 170);
     }
    }
};