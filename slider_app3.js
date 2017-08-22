
var number = Math.floor(Math.random()*5)+1;

var timer1 = 0;
var timer2 = 0;

function setPicture(pictureNr) //after clicking the timer shoould clear to avoid quick change of the picture (annoying)
{
	clearTimeout(timer1);
	clearTimeout(timer2);
	
	number = pictureNr-1; 
	hide();
	setTimeout("changePicture()", 500);
}

function hide()
{
	$("#slider").fadeOut(500);
}


function changePicture()
{
	number++;
	if (number>5) numer=1;
	
	var file = "<img src=\"pictures/picture" + number + ".jpg\"/>";
	document.getElementById("slider").innerHTML = file;
	
	$("#slider").fadeIn(500);
	
	
	timer1 = setTimeout("changePicture()", 5000);
	timer2 = setTimeout("hide()", 4500); 
}
