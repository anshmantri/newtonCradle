class Ball {
    constructor(x,y,radius) {
      var options = {
          restitution: 0,
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      fill("red");
      circle(pos.x, pos.y, this.radius);
      //setCollider(pos.x,pos.y,5,5);
    }
};