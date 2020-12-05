class Paper{
    constructor(x,y){
        var options={
            isStatic:false,
            resitution:0.3,
            friction:0.5,
            density:1.2
        }
        
        this.body = Bodies.circle(x, y, 25 ,options)
        this.radius = 25
        World.add(world,this.body)
    } 
    display(){
        var pos = this.body.position
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,25)
    }
}