class Stone {

    constructor(x,y,width,height)
    {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;

      var options ={
      'restitution':0.8,
      'friction':0.9,
      'density': 12
      }

      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,options);
      World.add(world, this.body);
    }

    display()
    {
      var stonePos = this.body.position;
      push()
      translate(stonePos.x, stonePos.y);
      rectMode(CENTER);
      strokeWeight(4);
			stroke("black");
			fill("grey");
      rect(0,0,this.width,this.height);
      pop()
    }
}