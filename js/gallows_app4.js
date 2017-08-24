var pass = "Trening czyni mistrza";
pass = pass.toUpperCase();

var length = pass.length;

var pass1 = "";

for (i=0; i<length; i++) 
{
	if(pass.charAt(i)==" ")pass1 = pass1 + " "; /* used .charAt(i) becouse [i] syntax in JS is not recognized by IE7 -> using [] correct but not funcitons in every browser, also possible to use split() built in function i JS in that case [] works fine */
	else pass1 = pass1 + "-";
}

function show_pass()
{
  document.getElementById("board").innerHTML = pass1;
  	
}

window.onload = start;

function start()
{
    var div_content = "";
    
    
    
    document.getElementById("alphabet").innerHTML = div_content;
    
    
    
    show_pass();
    
}
