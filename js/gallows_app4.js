
var pass_array = new Array(5);
pass_array[0] = "Kocham Taleczke";
pass_array[1] = "Trening czyni mistrza";
pass_array[2] = "Bez pracy nie ma kołaczy";
pass_array[3] = "Czym skorupka za młodu nasiąknie na starość trąci";
pass_array[4] = "Fiki Riki";

function draw()
{
    var draw_nr = Math.round(Math.random()* pass_array.length)
    drawed_pass = pass_array[draw_nr];
    
}

draw();


var pass = drawed_pass;
pass = pass.toUpperCase();

var length = pass.length;
var mishit = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var pass1 = "";

for (var i=0; i<length; i++)
{
	if(pass.charAt(i)===" ")pass1 = pass1 + " "; // used .charAt(i) becouse [i] syntax in JS is not recognized by IE7 -> using [] correct but not funcitons in every browser, also possible to use split() built in function i JS in that case [] works fine
	else pass1 = pass1 + "-";
}

function show_pass()
{
  document.getElementById("board").innerHTML = pass1;
  	
}

window.onload = start;

var letters = new Array(35);

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

function start()
{
    var div_content = "";

    for (var i=0; i<=34; i++)
    {
        var element = "lit" + i;

        // language=HTML
        div_content = div_content + '<div class = "letter" onclick="check('+i+')" id ="'+element+'">'+letters[i]+'</div>';
        if((i+1) % 7 === 0)div_content = div_content + '<div style="clear:both;"></div>';
    }

    document.getElementById("alphabet").innerHTML = div_content;



    show_pass();

}

String.prototype.setSign = function (position, sign)
{
    if (position > this.length -1) return this.toString();
    else return this.substr(0, position) + sign + this.substr(position +1);

}

function check(nr)
{
    var hit  = false;

    for (i=0; i<length; i++)
    {
        if (pass.charAt(i) === letters[nr])
        {
            pass1 = pass1.setSign(i, letters[nr]);
            hit = true;
        }
    }

    if(hit == true)
    {
        yes.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#003300";
        document.getElementById(element).style.color = "#00C000";
        document.getElementById(element).style.border = "3px solid #00C000";
        document.getElementById(element).style.cursor = "default";

        show_pass();

    }
    else
    {
        no.play();
        var element = "lit" + nr;
        document.getElementById(element).style.background = "#330000";
        document.getElementById(element).style.color = "#C0000";
        document.getElementById(element).style.border = "3px solid #C0000";
        document.getElementById(element).style.cursor = "default";
        document.getElementById(element).setAttribute("onclick",";");

        //mishit!
        mishit++;
        var picture = "pictures/s" + mishit + ".jpg";
        document.getElementById("gallows").innerHTML = '<img src ="'+picture+'" alt=""/>';
    }

    //win
    if(pass == pass1)
    document.getElementById("alphabet").innerHTML = "Tak jest podano prawidłowe hasło: " +pass+
        '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?<span/>';

    //lose
    if (mishit >= 9)
        document.getElementById("alphabet").innerHTML = "Przegrana! prawidłowe hasło: " +pass+
            '<br /><br /><span class="reset" onclick="location.reload()">JESZCZE RAZ?<span/>';
}
