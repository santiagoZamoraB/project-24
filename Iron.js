class Iron{
    constructor(x,y,width,height){
    
     this.x = x;
     this.y = y;
     this.width = width;
     this. height = height;

        var options= 
        {
         'restitution':0.8,
         'friction':3,
         'density':30
        } 
     this.body = Bodies.rectangle(this.x, this.y, this.width, this.height,options);
       World.add(world, this.body);
    }
    display()
    {
      var ironPos = this.body.position;
      push()
      translate(ironPos.x, ironPos.y);
      rectMode(CENTER);
      strokeWeight(4);
	  stroke("black");
	  fill("white");
      rect(0,0,this.width,this.height);
      pop()
      

    }
}