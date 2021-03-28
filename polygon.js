class Polygon{

constructor(x,y){

this.body = Bodies.rectangle(x,y,80,80);
this.image = loadImage("polygon.png");
World.add(world,this.body);

}

display(){

push();
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
imageMode(CENTER);
image(this.image,0,0,80,80);
pop();

}

}
