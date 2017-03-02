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
});//growing circle		
		
var dvd = document.getElementById("dvd");
dvd.addEventListener('click', function(){
	window.cancelAnimationFrame(rid);
	var velX=1;
	var velY=1;
	var maxX=500-128;
	var maxY=500-128+26;
	var x=Math.random()*maxX;
	var y=Math.random()*maxY;

	var d=function(){
		var dImage=document.createElementNS("http://www.w3.org/2000/svg", 
"image");
		
		dImage.setAttribute("http://www.w3.org/1999/xlink", "dvd.png");
		while(svg.lastChild){
			svg.removeChild(lastChild);
		}//while
		


