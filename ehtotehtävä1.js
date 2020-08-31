function tarkastaEtumerkki()
{
  var tarkistus = document.getElementById('aloitus').value;
  if(tarkistus >=0)
{
document.getElementById('tulosta').innerHTML = "Luku on positiivinen";
}
else {
  document.getElementById('tulosta').innerHTML = "Luku on negatiivinen";
}
}
