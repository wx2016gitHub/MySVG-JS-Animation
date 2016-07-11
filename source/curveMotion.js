 
        var myAudio = document.createElement("AUDIO");
        if (myAudio.canPlayType("audio/mp3")) {
            myAudio.src = "./source/music.mp3";
        }
        myAudio.controls = false;
        myAudio.loop = true;
        myAudio.autopaly = true;
        document.body.appendChild(myAudio);
        myAudio.play();
 
        document.getElementsByTagName("div")[0].style.position = "absolute";
        document.getElementsByTagName("div")[0].style.width = "240px";
        document.getElementsByTagName("div")[0].style.height = "264px";

        var temp = document.getElementsByTagName("div")[0].style.height;
        if (Number(temp.slice(0, temp.length - 2)) >= window.innerHeight)
             document.getElementsByTagName("div")[0].style.top = 0 + "px";
        else
             document.getElementsByTagName("div")[0].style.top = (window.innerHeight - Number(temp.slice(0, temp.length - 2)) )/ 2 + 5 + "px";
        temp = document.getElementsByTagName("div")[0].style.width;
        if ( Number(temp.slice(0, temp.length - 2)) >= window.innerWidth)
            document.getElementsByTagName("div")[0].style.left = 0 + "px";
        else
            document.getElementsByTagName("div")[0].style.left = (window.innerWidth - Number(temp.slice(0, temp.length - 2))) / 2 + 5 + "px";


        document.getElementsByTagName("div")[1].style.position = "absolute";
        document.getElementsByTagName("div")[1].style.top = "58px";
        document.getElementsByTagName("div")[1].style.left = "8px";
        document.getElementsByTagName("div")[1].style.width = "20px";
        document.getElementsByTagName("div")[1].style.height = "20px";
        document.getElementsByTagName("div")[1].style.backgroundColor = "deepskyblue";
        document.getElementsByTagName("div")[1].style.borderRadius = "50%";
        document.getElementsByTagName("div")[1].style.border = "2px solid gold";

       
        var direction=1;
        var X=0;
        var Y=0;
        var CX = -100;
        var left=0;
       
        var setRun = setInterval(ballRunning, 30 );
        function ballRunning() {
            if ( direction==1 ){   
                 X = X + 0.5;
                 CX = CX + 0.5;
                 Y= Math.sqrt(150*150*(1- CX* CX/10000)); 
                 left = X + 8;
                 Y += 58;
                 document.getElementsByTagName("div")[1].style.top = Y+"px";
                 document.getElementsByTagName("div")[1].style.left = left+"px";
                 if ( X > 200 ){
                      direction=2;
                      X=50;
                      Y=0;
                      CX = 200;
                      left=0;
                 }
            }
            if ( direction==2 ){  
                 CX--; 
                 X--;
                 if ( CX <= 0 ){
                      direction=1;
                      X=0;
                      Y=0;
                      CX = -100;
                      left=0;
                 }

                 if ( CX == 100 )   
                      X=50;

                 Y= Math.sqrt(  50*50- X*X  );
                 left = CX + 8;
                 Y  = 58 - Y;  
                 document.getElementsByTagName("div")[1].style.top = Y+"px";
                 document.getElementsByTagName("div")[1].style.left = left+"px";
            }
        }

        var setImg=true;
        var setHeart = setInterval(heartJump, 1000 );
        function heartJump() {
            if ( setImg == true ) {
                 document.getElementById("hflower").height="66";
                 document.getElementById("hflower").width="66";
                 setImg = false;
            }
            else{
                 document.getElementById("hflower").height="60";
                 document.getElementById("hflower").width="60";
                 setImg = true;

            }
        }

        window.addEventListener("resize", function () {
            var H = document.getElementsByTagName("div")[0].style.height;
            var W = document.getElementsByTagName("div")[0].style.width;

            if ( Number(H.slice(0, H.length - 2)) >= window.innerHeight)
                document.getElementsByTagName("div")[0].style.top = 0 + "px";
            else
                document.getElementsByTagName("div")[0].style.top = (window.innerHeight - Number(H.slice(0, H.length - 2))) / 2 + 5 + "px";

            if ( Number(W.slice(0, W.length - 2)) >= window.innerWidth)
                document.getElementsByTagName("div")[0].style.left = 0 + "px";
            else
                document.getElementsByTagName("div")[0].style.left = (window.innerWidth - Number(W.slice(0, W.length - 2))) / 2 + 5 + "px";
        });

        window.onbeforeunload = function (e) {
                      clearInterval(setHeart );
                      clearInterval(setRun);
                      
        }

 
// @copyright Wendy Xiao javascritp test code JULY, 2016>