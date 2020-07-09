class Chain {
    constructor(body1, body2) {
        this.A = body1;
        this.B = body2;
        var options = {
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.50,
            length: 500
        };
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        strokeWeight(3);
        line(this.A.position.x, this.A.position.y,
            this.B.position.x, this.B.position.y);
    }
}