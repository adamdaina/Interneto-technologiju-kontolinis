function Digits() 
{
  var value = document.getElementById("numb").value, divi = 1, rezultat, text;
 
  if (isNaN(value) || value < 10 || value > 100000)
  {
	  text = document.getElementById("demo");
      text.value = "Input not valid";
	
  } 
  else 
  {
     while (value) 
    {
      divi *= value % 10;
      value = Math.floor(value / 10);
    }
	rezultat = document.getElementById("demo");
  rezultat.value = divi;
  }
}

