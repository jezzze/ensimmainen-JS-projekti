function onkoKarkaus()
{
  jluku = document.getElementById('jluku').value;
  if(jluku%4 == 0 && jluku%100 != 0)
{
   document.getElementById('tulosta3').innerHTML = "Luku on karkausvuosi";
}
else if(jluku%400 ==0) {
    document.getElementById('tulosta3').innerHTML = "Luku on karkausvuosi";
}
  else {
    document.getElementById('tulosta3').innerHTML = "Luku ei ole karkausvuosi";
}
}
