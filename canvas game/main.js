var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');
var background = new Image();
background.src = "images/static 2.jpg";
var s = document.getElementById("start");
var element = document.getElementById("start");
$('#start').animate({
	'margin-left': '35%'
},2000)
$('#start').on('click', function(){
	$('#start').animate({
		'margin-left': '100%'
	},1000)

  setTimeout(function(){
    renderFrame();
  }, 1000)   
})
  setTimeout(function(){
    element.outerHTML = "";
    delete element;
  }, 5000)
var W = canvas.width;
var H = canvas.height;
var vx = 0;
var vy = (Math.random() * -8) - 2;
var gravity = 0.1;
var rightPressed = false;
var leftPressed = false;
var altPressed = false;
var tSeconds, miliSeconds, seconds, minute, time;
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

    miliSeconds = 0;
    seconds = 0;
    tSeconds=0;
    function timeStart(){ 
    tSeconds++;
    minute = Math.floor(tSeconds/3600);
    seconds = Math.floor((tSeconds-minute*3600)/60);
    if (seconds<10) {
    seconds= "0" + seconds;
    }
    document.getElementById("time").innerHTML = minute+":"+seconds;
    }

	function keyDownHandler(e) {
    	if(e.keyCode == 39) {
        	rightPressed = true;
    		}
    	else if(e.keyCode == 37) {
        	leftPressed = true;
   		 	}
		else if(e.keyCode == 18){
			altPressed = true;
		}	
		
	}
  

	function keyUpHandler(e) {
    	if(e.keyCode == 39) {
        	rightPressed = false;
    		}
    	else if(e.keyCode == 37) {
        	leftPressed = false;
    		}
    	else if(e.keyCode == 18){
			altPressed = false;
		}
			}
	function Ball() {
		this.radius = 20;
		this.x = (canvas.width / 2) - 100;
		this.y = 1900;
		
		this.draw = function(ctx) {
			ctx.fillStyle = 'white';
			ctx.beginPath();
			
			ctx.arc(
				this.x,
				this.y,
				this.radius,
				0,
				Math.PI*2,
				false
			);
			
			ctx.closePath();
			ctx.fill();
		}
	}
  
	var Block = function(x, y, width, height, color){
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		this.draw = function(ctx){
			ctx.fillStyle = color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
	var Blockin = function(x, y, width, height, color){
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		var right = true;
		this.draw = function(ctx){
		if (this.x >= 300) {
		right = false;
		} 
		else if (this.x <= 100) {
		right = true;
		}
		if (right == true) {
		this.x +=3;
		} 
		else {
		this.x -=3;
		}
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		}
		}
		var FirstBlock = function(x, y, width, height, color){
		this.width=width;
		this.height=height;
		this.x=x;
		this.y=y;
		var right = true;
		this.draw = function(ctx){
		if (this.x >= 500) {
		right = false;
		} 
		else if (this.x <= 300) {
		right = true;
		}
		if (right == true) {
		this.x +=3;
		} 
		else {
		this.x -=3;
		}
		ctx.fillStyle = color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
		}
		}
	
var ball = new Ball();
var block = new Block(750, 1600, 120, 10, "#66e0ff");
var block2 = new Block(330, 1000, 100, 15, "#66e0ff");
var block3 = new FirstBlock(350, 1800, 100, 10, "#66e0ff");
var block4 = new Block(100, 1500, 100, 10, "#66e0ff");
var block5 = new Block(400, 1300, 120, 12, "#66e0ff");
var block6 = new Block(600, 1150, 150, 20, "#66e0ff");
var block7 = new Blockin(100, 900, 70, 10, "#66e0ff");
var block8 = new Block(700, 800, 100, 10, "#66e0ff");
var block9 = new Block(300, 600, 150, 20, "#66e0ff");
var block10 = new Block(10, 500, 40, 10, "#66e0ff");
var block11 = new Block(300, 400, 50, 10, "#66e0ff");
var block12 = new Block(500, 250, 100, 10, "#66e0ff");
var block13 = new Block(0, 1250, 120, 10, "#66e0ff");
var block14 = new Blockin(80, 150, 100, 10, "#66e0ff");
var block15 = new Block(0, 1930, 1000, 10, "#66e0ff");
var block16 = new Block(560, 150, 300, 10, "#66e0ff");
var bool = true;

	function renderFrame() {
		requestAnimationFrame(renderFrame);
		ctx.clearRect(0, 0, W, H);
		vy += gravity;
		ball.x += vx;
		ball.y += vy;
		timeStart();
    
		if (ball.x < block.x + block.width &&
           ball.x + ball.radius > block.x &&
           ball.y < block.y + block.height &&
           ball.radius + ball.y > block.y) 
           {
           		vy = 0;
           		gravity = 0;
             	
           }
        else if (ball.x < block2.x + block2.width &&
           		ball.x + ball.radius > block2.x &&
           		ball.y < block2.y + block2.height &&
           		ball.radius + ball.y > block2.y) {
        		vy = 0;
           		gravity = 0;
              
        }
        else if (ball.x < block3.x + block3.width &&
           		ball.x + ball.radius > block3.x &&
           		ball.y < block3.y + block3.height &&
           		ball.radius + ball.y > block3.y) {
        		vy = 0;
           		gravity = 0;
              
        }
        else if (ball.x < block4.x + block4.width &&
           		ball.x + ball.radius > block4.x &&
           		ball.y < block4.y + block4.height &&
           		ball.radius + ball.y > block4.y) {
        		vy = 0;
           		gravity = 0;
             
        }
        else if (ball.x < block5.x + block5.width &&
           		ball.x + ball.radius > block5.x &&
           		ball.y < block5.y + block5.height &&
           		ball.radius + ball.y > block5.y) {
        		vy = 0;
           		gravity = 0;
            
        }
        else if (ball.x < block6.x + block6.width &&
           		ball.x + ball.radius > block6.x &&
           		ball.y < block6.y + block6.height &&
           		ball.radius + ball.y > block6.y) {
        		vy = 0;
           		gravity = 0;
             
        }
        else if (ball.x < block7.x + block7.width &&
           		ball.x + ball.radius > block7.x &&
           		ball.y < block7.y + block7.height &&
           		ball.radius + ball.y > block7.y) {
        		vy = 0;
           		gravity = 0;
              
        }
        else if (ball.x < block8.x + block8.width &&
           		ball.x + ball.radius > block8.x &&
           		ball.y < block8.y + block8.height &&
           		ball.radius + ball.y > block8.y) {
        		vy = 0;
           		gravity = 0;
              
        }
        else if (ball.x < block9.x + block9.width &&
           		ball.x + ball.radius > block9.x &&
           		ball.y < block9.y + block9.height &&
           		ball.radius + ball.y > block9.y) {
        		vy = 0;
           		gravity = 0;
             
        }
        else if (ball.x < block10.x + block10.width &&
           		ball.x + ball.radius > block10.x &&
           		ball.y < block10.y + block10.height &&
           		ball.radius + ball.y > block10.y) {
        		vy = 0;
           		gravity = 0;
             
              
        }
        else if (ball.x < block11.x + block11.width &&
           		ball.x + ball.radius > block11.x &&
           		ball.y < block11.y + block11.height &&
           		ball.radius + ball.y > block11.y) {
        		vy = 0;
           		gravity = 0;
             
              
        }
        else if (ball.x < block12.x + block12.width &&
           		ball.x + ball.radius > block12.x &&
           		ball.y < block12.y + block12.height &&
           		ball.radius + ball.y > block12.y) {
        		vy = 0;
           		gravity = 0;
             
        }
        else if (ball.x < block13.x + block13.width &&
           		ball.x + ball.radius > block13.x &&
           		ball.y < block13.y + block13.height &&
           		ball.radius + ball.y > block13.y) {
        		vy = 0;
           		gravity = 0;
              
        }
        else if (ball.x < block14.x + block14.width &&
           		ball.x + ball.radius > block14.x &&
           		ball.y < block14.y + block14.height &&
           		ball.radius + ball.y > block14.y) {
        		vy = 0;
           		gravity = 0;
              
        }
        else if (ball.x < block15.x + block15.width &&
           		ball.x + ball.radius > block15.x &&
           		ball.y < block15.y + block15.height &&
           		ball.radius + ball.y > block15.y) {
        		vy = 0;
           		gravity = 0;
              
        }
         
        else if (ball.x < block16.x + block16.width &&
           		ball.x + ball.radius > block16.x &&
           		ball.y < block16.y + block16.height &&
           		ball.radius + ball.y > block16.y) {
        		vy = 0;
           		gravity = 0;
           		setTimeout(function() {
           			if (bool){
           			alert("Game Over! \n" + "time taken "+minute+":"+seconds+" min ");
           			bool=false;
           		}
           		}, 700)
        }

        else {
        	gravity = .1;
        	vy += gravity;
        	ball.y += vy;
        }   
        if(altPressed){
        	ball.y -= 15.5;
        }
		if(rightPressed && ball.x < canvas.width-ball.radius) {
        	ball.x += 5;
    		}
    	else if(leftPressed && ball.x > 0) {
        	ball.x -= 5;
    		}
    		
    	ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
		ball.draw(ctx);
		block.draw(ctx);
		block2.draw(ctx);
		block3.draw(ctx);
		block4.draw(ctx);
		block5.draw(ctx);
		block6.draw(ctx);
		block7.draw(ctx);
		block8.draw(ctx);
		block9.draw(ctx);
		block10.draw(ctx);
		block11.draw(ctx);
		block12.draw(ctx);
		block13.draw(ctx);
		block14.draw(ctx);
	
		window.scroll(0, ball.y-500);
		};
		