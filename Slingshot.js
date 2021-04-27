class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.15,
            length: 30
        }
        this.Slingshot1 = loadImage("sling1.png")
        this.Slingshot2 = loadImage("sling2.png")
        this.Slingshot3 = loadImage("sling3.png")
        this.pointB = pointB;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    fly()
    {
        this.Slingshot.bodyA = null;
    }

    display(){
        image(this.Slingshot1, 200, 70, 30, 150);
        image(this.Slingshot2, 180, 70, 30, 90)
        if(this.Slingshot.bodyA)
        {
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        
        push();
        
        if(pointA.x < 220)
        {
            strokeWeight(7)
            line(pointA.x - 25, pointA.y, pointB.x - 10, pointB.y)
            line(pointA.x - 25, pointA.y, pointB.x + 25, pointB.y - 3)

            image(this.Slingshot3, pointA.x - 30, pointA.y - 10, 15, 30) 
        }

        else
        {
            strokeWeight(3)
            line(pointA.x -25, pointA.y, pointB.x - 10, pointB.y)
            line(pointA.x - 25, pointA.y, pointB.x + 25, pointB.y - 3)

            image(this.Slingshot3, pointA.x + 20, pointA.y - 10, 15, 30) 
        }

        pop();

        }
    }
    
}