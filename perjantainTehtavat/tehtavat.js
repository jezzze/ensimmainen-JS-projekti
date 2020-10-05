function Pisteet()
{
  var pisteet = 0;
  var annettuSana = document.getElementById('sana').value;
  for(var i = 0; i < annettuSana.length; i++)
  {
    switch (annettuSana[i]) {
      case 'a':
      case 'n':
      case 't':
      case 'A':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
        break;
        break;
      case 'V':
      case 'i':
      case 'l':
        pisteet+=-10;
        break;
      case 'b':
      case 'f':
      case 'u':
      case 'B':
      case 'm':
      case 'n':
        pisteet+=8;
        break;
      case 'J':
      case 'e':
      case 's':
        pisteet+=100;
        break;
      default:
        pisteet+=12;
    }
    document.getElementById('scrabble').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
  }
}
