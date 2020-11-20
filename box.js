class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.x=x;
    this.y=y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, width, height, options);
    World.add(world, this.body);
  }
  display(){

    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
    
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
    
      rect(0, 0, this.width, this.height);
      pop();
    }
    else{
      //do nothig
      //remove the box
      World.remove(world, this.body);
      push();// save the cavas images
      this.visiblity = this.visiblity-5;
      pop();// brigs back the cavans images
      
  }
  }
}
