class BLOCK{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.5,
            density:1,
            friction:0.3
        }
        this.body=Bodies.circle(x,y,width,height)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(world,this.body)
    }

    display(){
        push()
        rectMode(CENTER)
        rect(this.position.x,this.body.position.y,50,50)
        pop()
    }
}