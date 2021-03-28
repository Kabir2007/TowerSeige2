class Rope{
    
constructor(bodyA, pointB){
        
var options = {
           
bodyA: bodyA,
pointB: pointB,
stiffness: 0.3,
length: 70
        
}
       
this.pointB = pointB
this.rope = Constraint.create(options);
World.add(world, this.rope);

}

attach(body){

this.rope.bodyA = body;

}


fly(){

this.rope.bodyA = null;
    
}

display(){
      
if(this.rope.bodyA){
            
var pointA = this.rope.bodyA.position;
var pointB = this.pointB;
            
push();
            
stroke("white")
strokeWeight(3);
line(pointA.x, pointA.y, pointB.x, pointB.y);

pop();
        
}
    
}
    
}