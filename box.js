class Box{

    constructor(x,y,width,height){
        this.Visibility=255;

        var options={

            
        }

        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        if(this.body.speed<3){
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            fill("lightpink");
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
    }
    else{
        
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
           
            pop();
          
    }
    }
}