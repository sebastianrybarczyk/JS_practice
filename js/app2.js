
function showScope()
{
	var value1 = document.getElementById("field1").value
	var value2 = document.getElementById("field2").value
	
	var line = "";
	
	 for (i=value1; i<=value2; i++)
	 {
		line = line + i + " ";
		
	 }
	 
	document.getElementById("result").innerHTML = line;
}	 
