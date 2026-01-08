class Point extends Vector2{
    constructor(x,y,mass){
        super(x,y);
        this.forces = new Vector2(0,3)
        this.vel = new Vector2(0,0)
        this.mass = mass
    }

    update(dt){
        this.render();
        this.updatePhysics(dt);
    }
    render(){
        fill(255)
        ellipse(this.x,this.y,5,5);
    }

    updatePhysics(dt){
        let acc = new Vector2(0,0);
        acc.x = this.forces.x/this.mass;
        acc.y = this.forces.y/this.mass;

        this.x = //this.vel.x * dt;
        this.y = //this.vel.y * dt;

    }
}