var svg = document.getElementById("vimage");
var rid;

//dvd img
var image=new Image();
image.src="dvd.png";

//stopbutton
var stop = document.getElementById("stop");
stop.addEventListener("click", function(){
	window.cancelAnimationFrame(rid);
});

var grow = document.getElementById("grow");
grow.addEventListener("click", function(){
	window.cancelAnimationFrame(rid);
	var grow;
	var x=0;
	
	var dot=function(){
		var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
		while(svg.lastChild){
			svg.removeChild(svg.lastChild);
		}//while
		circle.setAttribute("cx",250);
		circle.setAttribute("cy",250);
		if(x>=250){
			grow=false;
		}
		if(x<=0){
			grow=true;
		}
		if(grow){
			x++;
		}
		else{
			x--;
		}
		circle.setAttribute("r", x);
		circle.setAttribute("fill","black");
		svg.appendChild(circle);
		rid=window.requestAnimationFrame(dot);
	}//dot fn
	dot();
});
		
		
var dvd = document.getElementById("dvd");

