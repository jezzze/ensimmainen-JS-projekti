function Pisteet()
{
  var pisteet = 0;
  var annettuSana = document.getElementById('sana').value;
  for(var i = 0; i < annettuSana.length; i++)
  {
    switch (annettuSana[i]) {
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
        break;
      case 'O':
      case 'Ä':
      case 'K':
      case 'L':
        pisteet+=2;
        break;
      case 'U':
      case 'M':
        pisteet+=3;
        break;
      case 'Y':
      case 'H':
      case 'J':
      case 'P':
      case 'R':
      case 'V':
      pisteet+=4;
      break;
      case 'Ö':
      case 'D':
      pisteet+=7;
      break;
      case 'B':
      case 'F':
      case 'G':
      pisteet+=8;
      break;
      case 'C':
      pisteet+=10;
      break;
      default:
      pisteet+=12;
    }
    document.getElementById('scrabble').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
  }
}
