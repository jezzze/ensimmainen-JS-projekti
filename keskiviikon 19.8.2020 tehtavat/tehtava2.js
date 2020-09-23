function Suurin()
  {
    var l2, l3, l4, l5, l6, suurin;
      l2 = parseInt(document.getElementById('ekaluku').value);
      l3 = parseInt(document.getElementById('tokaluku').value);
      l4 = parseInt(document.getElementById('kolmasluku').value);
      l5 = parseInt(document.getElementById('neljäsluku').value);
      l6 = parseInt(document.getElementById('viidesluku').value);
      if(l2 < l3 && l4 < l3 && l5 < l3 && l6 < l3)
      {
        suurin = l3;
      }
      else if(l2 < l4 && l5 < l4 && l6 < l4)
      {
        suurin = l4;
      }
      else if(l2 < l5 && l6 < l5)
      {
        suurin = l5;
      }
      else if(l2 < l6)
      {
        suurin = l6;
      }
      else {
        suurin = l2;
      }
      document.write("Annetut luvut: " + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5 + ' ' + l6);
      document.write("<br>Luvuista suurin luku on: " + suurin);
    }
