
//clock mechanics: 

// This will draw the clock onto the Clock HTML Page as it is directly linked to the page:
    
            var canvas = document.getElementById("canvas");
            var ctx = canvas.getContext("2d");
            var radius = canvas.height / 2;
            ctx.translate(radius, radius);
            radius = radius * 0.90
            setInterval(drawClock, 1000); //THIS IS WHAT WE NEED TO MANIPULATE
    

            function drawClockEast(){
               
                windown.alert("inn this mf");
                // drawFace(ctx, radius);
                // drawNumbers(ctx, radius);
                // drawTimeEast(ctx, radius);
            }

            function drawClock() { //default based on location
                
                drawFace(ctx, radius);
                drawNumbers(ctx, radius);
                drawTime(ctx, radius);
            }


            function drawTimeEast(ctx, radius){ //editing timezones

                var now = new Date();
                //hour
                var changed_TZ = now.getTimezoneOffset()
                if(changed_TZ != 360){// identify timezone
                    now.getTimezoneOffset = 360;
                    windown.alert(now.getHours());
                } 
                
                var hour = now.getHours();
                var minute = now.getMinutes();
                var second = now.getSeconds();

                hour=hour%12;
                hour=(hour*Math.PI/6)+
                (minute*Math.PI/(6*60))+
                (second*Math.PI/(360*60));


                drawHand(ctx, hour, radius*0.5, radius*0.07);
                //minute
                minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
                drawHand(ctx, minute, radius*0.8, radius*0.07);
                // second
                second=(second*Math.PI/30);
                drawHand(ctx, second, radius*0.9, radius*0.02);
            }

            function drawFace(ctx, radius) {
                var grad;
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, 2*Math.PI);
                ctx.fillStyle = 'white';
                ctx.fill();
                grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
                grad.addColorStop(0, '#200');
                grad.addColorStop(0.5, 'black');
                grad.addColorStop(1, 'white');
                ctx.strokeStyle = grad;
                ctx.lineWidth = radius*0.1;
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
                ctx.fillStyle = '#333';
                ctx.fill();
            }

        function drawNumbers(ctx, radius) {
            var ang;
            var num;
            ctx.font = radius*0.15 + "px arial";
            ctx.textBaseline="middle";
            ctx.textAlign="center";

            for(num = 1; num < 13; num++){
                ang = num * Math.PI / 6;
                ctx.rotate(ang);
                ctx.translate(0, -radius*0.85);
                ctx.rotate(-ang);
                ctx.fillText(num.toString(), 0, 0);
                ctx.rotate(ang);
                ctx.translate(0, radius*0.85);
                ctx.rotate(-ang);
            }
        }

        function drawTime(ctx, radius){ //editing timezones
            var now = new Date();
            var hour = now.getHours();
            var minute = now.getMinutes();
            var second = now.getSeconds();
            //hour
            
            hour=hour%12;
            hour=(hour*Math.PI/6)+
            (minute*Math.PI/(6*60))+
            (second*Math.PI/(360*60));
            drawHand(ctx, hour, radius*0.5, radius*0.07);
            //minute
            minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
            drawHand(ctx, minute, radius*0.8, radius*0.07);
            // second
            second=(second*Math.PI/30);
            drawHand(ctx, second, radius*0.9, radius*0.02);
        }

        function drawHand(ctx, pos, length, width) {
            ctx.beginPath();
            ctx.lineWidth = width;
            ctx.lineCap = "round";
            ctx.moveTo(0,0);
            ctx.rotate(pos);
            ctx.lineTo(0, -length);
            ctx.stroke();
            ctx.rotate(-pos);
        }

        // function eraseClock(){
        //   document.getElementById("canvas").hide();
        // //   this.remove();
        // }


        //Dropdown Option Mechanincs:

    function moonFunction(){   
        document.body.style.backgroundColor= "MidnightBlue";
        // eraseClock();
    }
    function sunFunction(){
        document.body.style.backgroundColor= "Goldenrod";
    }
    function pacificFunction(){
        // drawClock();
        // ctx.translate(radius, radius);
        document.body.style.backgroundColor= "SkyBlue";
        document.drawClock();
        // canvas = document.getElementById("canvas");
    
    }

    function easternFunction(){
        // drawClock();
        // ctx.translate(radius, radius);
        document.body.style.backgroundColor= "black";
        //
        
        drawClockEast();
        

        
        // canvas = document.getElementById("canvas");
    }
    function resetColor(){
        document.body.style.backgroundColor= "White"
    }

        //borrowed from GeeksForGeeks__________________________________
       