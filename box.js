class box{
    constructor(x,y,width,height) {
        var options ={
            frictionAir: 1.0,
            friction: 1.0,
            frictionStatic: 1.0,
            inertia: Infinity,
            restitution: 0.5
        }
    }
    display() {
        var pos =this.body.position;
        rectMode(CENTER);
        strokeWeight(5);
        stroke("black");
        fill("grey");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
    };
    