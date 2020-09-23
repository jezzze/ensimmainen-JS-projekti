function onkoparillinen()
{
  var arvo;
   arvo = parseInt(document.getElementById('luku1').value);
   document.write("Antamasi luku on: " + arvo);
  if(arvo%2 == 0)
  {
    document.write("<br>Antamasi luku on parillinen");
  }
  else {
    document.write("<br>Antamasi luku on pariton");
  }
}
