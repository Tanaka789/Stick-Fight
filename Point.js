class Point extends Vector2{
    constructor(x,y,mass){
        super(x,y)
        this.mass = mass
    }

    update(){
        this.render()
    }
    render(){
        fill(255)
        ellipse(x,y,5,5)

    }




}