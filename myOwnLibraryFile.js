if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage= 0.5* weight * speed * speed/(thickness * thickness * thickness)
    if(damage>10){
      wall.shapeColor = color(230,0,0)
    }
    
    if(damage<10){
      wall.shapeColor = color(0,230,0)
    }
    
      }
    