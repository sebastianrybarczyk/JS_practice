
function check() //function attached for 'onclick' event in submit input
{ 
	var digit = document.getElementById("field").value; //grip + value from inserted field in html form
	
	if(digit>0)document.getElementById("result").innerHTML="positive number";         // instruction for checking inserted value in form
	else if (digit<0) document.getElementById("result").innerHTML="negative number"; // div with id result in HTML
	else if (digit==0)document.getElementById("result").innerHTML="zero";           // innerHTML changes the <div> content
	else document.getElementById("result").innerHTML="it is not a number";
	
}
