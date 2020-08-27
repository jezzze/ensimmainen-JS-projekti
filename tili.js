function Tili(tilinro, sukunimi, etunimi, saldo);
{
  this.nro = tilinro;
  this.sukunimi = sukunimi;
  this.etunimi = etunimi;
  this.saldo = saldo;
  this.tiedot = NaytaTiedot;

}
var hannes = new tili('123456-2222', 'Häyrynen', 'Hannes', 53);
var päivi = new tili('123456-3333', 'kuukka', 'päivi', 12)
function NaytaTiedot()
{
  var tilinro = this.nro;
  var etunimi = this.etunimi;
  var sukunimi = this.sukunimi;
  var ika = this.saldo;


  document.write("henkilön tilinumero on:" + tilinro + "ja nimi on" + etunimi + " " + sukunimi);
}
hannes.tiedot();--> Henkilön tilinumero on 123456-2222 ja nimi on Hannes Häyrynen ja saldo on 53 euroa
päivi.tiedot();--> Henkilön tilinumero on 123456-3333 ja nimi on Päivi Kuukka ja saldo on 12 euroa

function talleta(summa)
{
  var saldo = this.saldo;
  var summa = summa;
  saldo+= summa;
  document.write("Uusi saldo on: " + saldo);
}
function otaRahaa(summa)
{
  var saldo = this.saldo;
  var summa = summa;
  if(summa <= saldo)
  {
    saldo-= summa;
  }
  else{
    document.write("sinulla ei ole riittävästi rahaa tilillä");
  }
  document.write("Uusi saldo on: " + saldo);
}
