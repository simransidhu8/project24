class Paper{
     constructor(){
        var options={
            isStatic:false,
            restitution:0.6,
            friction:0.5,
        }
       this.body=Bodies.circle(100, 200, 20, 20, options);
       World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        angleMode(RADIAS);
        rotate(this.body.angle);
        ellipseMode(RADIAS);
        fill("blue");
        ellipse(0,0,17,17);
        pop();
    }
}