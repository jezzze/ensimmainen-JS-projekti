function Kertotaulu()
{
  var kerluku = document.getElementById('kerrottava').value;
 var taulu = kerluku + ' x 0 = '+ kerluku*0 + '<br/>';
 taulu += kerluku + ' x 1 = '+ kerluku*1 + '<br/>';
 taulu += kerluku + ' x 2 = '+ kerluku*2 + '<br/>';
 taulu += kerluku + ' x 3 = '+ kerluku*3 + '<br/>';
 taulu += kerluku + ' x 4 = '+ kerluku*4 + '<br/>';
 taulu += kerluku + ' x 5 = '+ kerluku*5 + '<br/>';
 taulu += kerluku + ' x 6 = '+ kerluku*6 + '<br/>';
 taulu += kerluku + ' x 7 = '+ kerluku*7 + '<br/>';
 taulu += kerluku + ' x 8 = '+ kerluku*8 + '<br/>';
 taulu += kerluku + ' x 9 = '+ kerluku*9 + '<br/>';
 taulu += kerluku + ' x 10 = '+ kerluku*10 + '<br/>';
 document.getElementById('tulosta5').innerHTML = taulu;
}
