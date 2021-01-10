class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,15,15,options);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
    };
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        //noStroke();
        fill("white");
        ellipse(0,0,15,15);
        pop();
           }
   
       };
