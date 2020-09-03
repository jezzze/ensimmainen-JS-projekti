function viikonpaiva()
{
  var luku = document.getElementById('luku').value;
 if(luku == 1)
}

{
 document.getElementById('tulosta2').innerHTML = "Maanantai";
}
{
  document.getElementById('tulosta2').innerHTML = "Tiistai";
  }
  else if(luku == 3)
  {
    document.getElementById('tulosta2').innerHTML = "Keskiviikko";
  }
  else if(luku == 4)
  {
    document.getElementById('tulosta2').innerHTML = "Torstai";
  }
  else if(luku == 5)
  {
    document.getElementById('tulosta2').innerHTML = "Perjantai";
  }
  else if(luku == 6)
  {
    document.getElementById('tulosta2').innerHTML = "Lauantai";
  }
  else if(luku == 7)
  {
    document.getElementById('tulosta2').innerHTML = "Sunnuntai";
 }
 else {
     document.getElementById('tulosta2').innerHTML = "Luku ei kuulu viikonpäivälle";
 }
}
