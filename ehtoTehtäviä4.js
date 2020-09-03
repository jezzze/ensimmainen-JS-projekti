function summaKeskiarvo()
{
  var lu1, lu2, lu3, lu4, lu5, summa, keskiarvo;
  lu1 = parseInt(document.getElementById('lukuk').value);
  lu2 = parseInt(document.getElementById('lukuk2').value);
  lu3 = parseInt(document.getElementById('lukuk3').value);
  lu4 = parseInt(document.getElementById('lukuk4').value);
  lu5 = parseInt(document.getElementById('lukuk5').value);
  summa = lu1 + lu2 + lu3 + lu4 + lu5;
  keskiarvo = summa / 5;
  document.getElementById('tulosta4').innerHTML = "Lukujen summa on " + summa + " ja keskiarvo on " + keskiarvo;
}
