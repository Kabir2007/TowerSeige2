class Tower{

constructor(x,y){
this.image = loadImage("1block.png");
this.body = Bodies.rectangle(x,y,30,30);
World.add(world,this.body);
this.Visibility = 255;

}

display(){

if(this.body.speed < 5){
var angle = this.body.angle;

push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
imageMode(CENTER);
fill("red");
image(this.image,0,0,40,40);
pop();;
       
}
       
else{
 
World.remove(world, this.body);

push();
this.Visiblity -= 0.1;
tint(255,this.Visiblity);
fill("red");
image(this.image,0,0, 40, 40);
pop();

}
       
}

}
