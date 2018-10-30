
var fire1	=	document.getElementById("fire1");
var fire2	=	document.getElementById("fire2");
var fire3	=	document.getElementById("fire3");
var fire4	=	document.getElementById("fire4");
var fire5	=	document.getElementById("fire5");
var fire6	=	document.getElementById("fire6");
var fire7	=	document.getElementById("fire7");
var fire8	=	document.getElementById("fire8");
var enemy1	= 	document.getElementById("enemy1");
var enemy2	= 	document.getElementById("enemy2");
var enemy3	= 	document.getElementById("enemy3");
var enemy4	= 	document.getElementById("enemy4");
var enemy5	= 	document.getElementById("enemy5");
var enemy6	= 	document.getElementById("enemy6");
var enemy7	= 	document.getElementById("enemy7");
var enemy8	= 	document.getElementById("enemy8");
setInterval(enemyMovement1,50);
setInterval(enemyMovement2,50);
setInterval(enemyMovement3,50);
setInterval(enemyMovement4,50);
setInterval(enemyMovement5,50);
setInterval(enemyMovement6,50);
setInterval(enemyMovement7,50);
setInterval(enemyMovement8,50);
	
var pos		= 	8;
	
		
	function enemyMovement1(){
			
		if(pos==359){
		pos=0;
			
		enemy1.style.display="block";
			
           
		}else{
			enemy1.style.top = pos + 'px'; 
			enemy1.style.top  = pos + 'px'; 
			pos++; 
			
				
			
		}
	}
	function enemyMovement2(){
		
		if(pos==359){
		pos=0;
			
			enemy2.style.display="block";
			
           
		}else{
			enemy2.style.top = pos + 'px'; 
			enemy2.style.top  = pos + 'px'; 
			
			pos++; 
				
			
		}
	}
	function enemyMovement3(){
		
		if(pos==359){
		pos=0;
			
			enemy3.style.display="block";
			
           
		}else{
			enemy3.style.top = pos + 'px'; 
			enemy3.style.top  = pos + 'px'; 
			
			pos++; 
				
			
		}
	}
	function enemyMovement4(){
		
		if(pos==359){
		pos=0;
			
			enemy4.style.display="block";
			
           
		}else{
			enemy4.style.top = pos + 'px'; 
			enemy4.style.top  = pos + 'px'; 
			
			pos++; 
				
			
		}
	}
	function enemyMovement5(){
		
		if(pos==359){
		pos=0;
			
			enemy5.style.display="block";
			
           
		}else{
			enemy5.style.top = pos + 'px'; 
			enemy5.style.top  = pos + 'px'; 
			
			pos++; 
				
			
		}
	}
	function enemyMovement6(){
		
		if(pos==359){
		pos=0;
			
			enemy6.style.display="block";
			
           
		}else{
			enemy6.style.top = pos + 'px'; 
			enemy6.style.top  = pos + 'px'; 
			
			pos++; 
				
			
		}
	}
	function enemyMovement7(){
		
		if(pos==359){
		pos=0;
			
			enemy7.style.display="block";
			
           
		}else{
			enemy7.style.top = pos + 'px'; 
			enemy7.style.top  = pos + 'px'; 
			
			pos++; 
				
			
		}
	}
	function enemyMovement8(){
		
		if(pos==359){
		pos=0;
			
			enemy8.style.display="block";
			
           
		}else{
			enemy8.style.top = pos + 'px'; 
			enemy8.style.top  = pos + 'px'; 
			
			pos++; 
				
			
		}
	}

	
	function MouseOver(start, end, except, mouseover) {
		
		for(start; start <= end; start++) {
			if(start === except) {
				mouseover.style.backgroundImage = "url('images/BALL.png')";
				continue;
			}
			
			document.getElementById("controller" + start).style.backgroundImage = "none";
		}
	}
		
	//MOUSEOVER
	function character1(x){
		MouseOver(1, 8, 1, x);
		
		
 	}
	function character2(x){
		MouseOver(1, 8, 2, x);
			
	
	}
	function character3(x){
		MouseOver(1, 8, 3, x);
		
	}
	function character4(x){
		MouseOver(1, 8, 4, x);
		
	}
	function character5(x){
		MouseOver(1, 8, 5, x);
		
	}
	function character6(x){
		MouseOver(1, 8, 6, x);
			
	}
	function character7(x){
		MouseOver(1, 8, 7, x);
		
	}
	function character8(x){
		MouseOver(1, 8, 8, x);
		
	}
	
	//FIRING
	function firing1(){
		fire1.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire1.style.display="none";
						enemy1.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire1.style.display="none";
						enemy1.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire1.style.display="none";
						enemy1.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire1.style.display="none";
						enemy1.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire1.style.display="none";
						enemy1.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire1.style.display="none";
						enemy1.style.display="none";
						
					}else{
						alert('YOUR DEAD');
					}
				
				}else {

						fire1.style.bottom = poss + 'px'; 
						fire1.style.bottom = poss + 'px'; 
					 poss++;
					}
				}	

	}
	function firing2(){
		fire2.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire2.style.display="none";
						enemy2.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire2.style.display="none";
						enemy2.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire2.style.display="none";
						enemy2.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire2.style.display="none";
						enemy2.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire2.style.display="none";
						enemy2.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire2.style.display="none";
						enemy2.style.display="none";
						
					}else{
						alert("YOU'RE DEAD");
					}
				
				}else {

						fire2.style.bottom = poss + 'px'; 
						fire2.style.bottom = poss + 'px'; 
					 poss++;
					}
				}	
		}
	function firing3(){
		fire3.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire3.style.display="none";
						enemy3.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire3.style.display="none";
						enemy3.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire3.style.display="none";
						enemy3.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire3.style.display="none";
						enemy3.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire3.style.display="none";
						enemy3.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire3.style.display="none";
						enemy3.style.display="none";
						
					}else{
						alert('YOUR DEAD');
					}
				
				}else {

						fire3.style.bottom = poss + 'px'; 
						fire3.style.bottom = poss + 'px'; 
					 poss++;
					}
				}	
	}
	function firing4(){
		fire4.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire4.style.display="none";
						enemy4.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire4.style.display="none";
						enemy4.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire4.style.display="none";
						enemy4.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire4.style.display="none";
						enemy4.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire4.style.display="none";
						enemy4.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire3.style.display="none";
						enemy4.style.display="none";
						
					}else{
						alert('YOUR DEAD');
					}
				
				}else {

						fire4.style.bottom = poss + 'px'; 
						fire4.style.bottom = poss + 'px'; 
					 poss++;
					}
				}	
	}
	function firing5(){
		fire5.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire5.style.display="none";
						enemy5.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire5.style.display="none";
						enemy5.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire5.style.display="none";
						enemy5.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire5.style.display="none";
						enemy5.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire5.style.display="none";
						enemy5.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire5.style.display="none";
						enemy5.style.display="none";
						
					}else{
						alert('YOUR DEAD');
					}
				
				}else {

						fire5.style.bottom = poss + 'px'; 
						fire5.style.bottom = poss + 'px'; 
					 poss++;
					}
				}	
		
	}
	function firing6(){
		fire6.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire6.style.display="none";
						enemy6.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire6.style.display="none";
						enemy6.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire6.style.display="none";
						enemy6.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire6.style.display="none";
						enemy6.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire6.style.display="none";
						enemy6.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire6.style.display="none";
						enemy6.style.display="none";
						
					}else{
						alert('YOUR DEAD');
					}
				
				}else {

						fire6.style.bottom = poss + 'px'; 
						fire6.style.bottom = poss + 'px'; 
					 poss++;
					}
				}		
		
	}
	function firing7(){
		fire7.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire7.style.display="none";
						enemy7.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire7.style.display="none";
						enemy7.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire7.style.display="none";
						enemy7.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire7.style.display="none";
						enemy7.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire7.style.display="none";
						enemy7.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire7.style.display="none";
						enemy7.style.display="none";
						
					}else{
						alert('YOUR DEAD');
					}
				
				}else {

						fire7.style.bottom = poss + 'px'; 
						fire7.style.bottom = poss + 'px'; 
					 poss++;
					}
				}	
		
	}
	function firing8(){
		fire8.style.display="block";
		var poss	= 	60;
		var id		=	setInterval(frame,1);
		
			function frame() {

				if (poss==85) {
				   clearInterval(id);
					

					if(pos>=280 && pos<=310){
						fire8.style.display="none";
						enemy8.style.display="none";
						
						
					}
					else if(pos>=210 && pos<=279){
						fire8.style.display="none";
						enemy8.style.display="none";
						
					}
					else if(pos>=160 && pos<=209){
						fire8.style.display="none";
						enemy8.style.display="none";
						
						
					}
					else if(pos>=110 && pos<=159){
						fire8.style.display="none";
						enemy8.style.display="none";
						

					}else if(pos>=65 && pos<=109){
						fire8.style.display="none";
						enemy8.style.display="none";
						

					}else if(pos>=0 && pos<=64){
						fire8.style.display="none";
						enemy8.style.display="none";
						
					}else{
						alert('YOUR DEAD');
					}
				
				}else {

						fire8.style.bottom = poss + 'px'; 
						fire8.style.bottom = poss + 'px'; 
					 poss++;
					}
				}		
	}
	
