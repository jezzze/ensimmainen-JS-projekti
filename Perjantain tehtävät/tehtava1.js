function Pisteet()
{
  var pisteet = 0;
  var annettuSana = document.getElementById('sana').value;
  for(var i = 0; i < annettuSana.length; i++)
  {
    switch (annettuSana[i]) {
      case 'a':
      case 'i':
      case 'n':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
        pisteet++;
        break;
      case 'V':
      case 'i':
      case 'l':
      case 'M':
        pisteet+=-5;
        break;
      case 'y':
      case 'h':
      case 'j':
      case 'p':
      case 'r':
      case 'v':
      case 'Y':
      case 'H':
      case 'P':
      case 'R':
        pisteet+=6;
        break;
      case 'Ä':
      case 'd':
      case 'Ö':
      case 'D':
        pisteet+=7;
        break;
      case 'J':
      case 'e':
      case 's':
        pisteet+=10;
        break;
      default:
        pisteet+=12;
    }
    document.getElementById('ON').innerHTML = "<p>Sanan " + annettuSana + " pisteet ovat: " + pisteet + "</p>";
  }
}
