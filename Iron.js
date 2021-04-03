class Iron{
	constructor(x,y){
	var options={
		'restitution':0.5,
		'friction':1,
		'density':6
	}
		this.body = Bodies.rectangle(x,y,100,150,options);
		this.width = 150;
        this.height = 100;
        World.add(world, this.body);
	}
	display()
	{
		var Ironpos = this.body.position;	

		push();
		translate(Ironpos.x, Ironpos.y);
		rectMode(CENTER);
		strokeWeight(4);
		stroke("black");
		fill("black");
        rect(0, 0, this.width, this.height);
		pop();
	}
}