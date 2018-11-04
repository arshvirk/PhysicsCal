  function calculate() {
    var velocity = document.getElementById('velocity').value;
    var angle = document.getElementById('angle').value;
    var time = document.getElementById('time').value;
    var distance = document.getElementById('distance').value;
    var height = document.getElementById('height').value;
    var variables = [velocity,angle,time,distance,height];
       
  var vy; 
  var vx; 

       if(time){
        vy = time*4.9;
        height=(vy*vy)/(2*9.8);
       document.getElementById('result').innerHTML = "yyy"+vy;
       document.getElementById('height').value = height;
        if(velocity){
          angle = Math.asin((vy/velocity))*(180/Math.PI);
           vx = velocity*Math.cos(angle*(Math.PI / 180));
           distance = 2*vx*vy/9.8;
           print(velocity,angle,time,distance,height); 

        }else if(angle){
          velocity = vy/Math.sin(angle*Math.PI / 180);
            vx = velocity*Math.cos(angle*(Math.PI / 180));
            distance = (2*vx*vy)/9.8;
            print(velocity,angle,time,distance,height);
        }else{
           if(distance){
              vx = distance/time;
              angle = Math.atan(vy/vx)*(180/Math.PI);
              velocity = (time*4.9)/Math.sin(angle*Math.PI / 180);
               print(velocity,angle,time,distance,height); 
           }

        }
        

        }else{
        if(velocity){
          if(angle){
            vy = velocity*Math.sin(angle*(Math.PI / 180));
            vx = velocity*Math.cos(angle*(Math.PI / 180));
            time =  2*vy/9.8;
            height = (vy*vy)/(2*9.8);
            distance = (2*vx*vy)/9.8;
            print(velocity,angle,time,distance,height);
          
            
           }else if(distance){
                angle = (0.5)*Math.asin((distance*9.8)/(velocity*velocity))*(180/Math.PI);
                 vy = velocity*Math.sin(angle*(Math.PI / 180));
                 vx = velocity*Math.cos(angle*(Math.PI / 180));
                 time = 2*vy/9.8;
                 height = (vy*vy)/(2*9.8);
                 print(velocity,angle,time,distance,height);
           
            
           }else{ 
            if(height){
               angle = Math.asin(Math.pow((height*2*9.8),0.5)/velocity)*(180/Math.PI);  
               vy = velocity*Math.abs(Math.sin(angle*(Math.PI / 180)));
               vx = velocity*Math.cos(angle*(Math.PI / 180));
               time =  2*vy/9.8;
               distance = 2*vx*vy/9.8;
               print(velocity,angle,time,distance,height);
           }
         }
      }else{
        if(angle){
         document.getElementById('result').innerHTML = "ppoooooooooooooooop"+velocity;
         if(height){
           velocity =  Math.pow((height*2*9.8),0.5)/Math.sin(angle*(Math.PI / 180));
              vy = velocity*Math.sin(angle*(Math.PI / 180));
                 vx = velocity*Math.cos(angle*(Math.PI / 180));
           time = 2*vy/9.8;
           distance =   (2*vx*vy)/9.8;
           print(velocity,angle,time,distance,height);

         }
         if(distance){
          velocity = Math.pow((9.8*distance)/Math.sin(2*angle*(Math.PI / 180)),0.5);
           vy = velocity*Math.sin(angle*(Math.PI / 180));
                 vx = velocity*Math.cos(angle*(Math.PI / 180));
           time = 2*vy/9.8;
           height =  height = (vy*vy)/(2*9.8);
           print(velocity,angle,time,distance,height);

         }



        }else{
          if(height && distance){
           angle = Math.atan((4*height)/distance)*(180/Math.PI);
           velocity =  Math.pow((height*2*9.8),0.5)/Math.sin(angle*(Math.PI / 180));
              vy = velocity*Math.sin(angle*(Math.PI / 180));
                 vx = velocity*Math.cos(angle*(Math.PI / 180));
           time = 2*vy/9.8;
           print(velocity,angle,time,distance,height);

         }

          
        }
      }
}
    }



 


 

 function angle_a(){

 }
 function time_t(){

 }
 function velocity_v(){

 }
 function height_h(){

 }
function distance_d(){

}


 function print(a,b,c,d,e){
 	          document.getElementById('velocity').value = a;
            document.getElementById('angle').value = b;
            document.getElementById('time').value = c;
            document.getElementById('distance').value = d;
            document.getElementById('height').value = e;
    
 }

  

