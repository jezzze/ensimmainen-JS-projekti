function Parilliset()
{
  var arvo = parseInt(document.getElementById('luku').value);
  var jono = "<p>";
  for(var i = 2; i <= arvo; i= i+2)
  {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
    document.getElementById('parilliset').innerHTML = jono;
}

function Salasanaksi()
{
  var sana = document.getElementById('sana').value;
  var salasana = "<p>";
  for(var f = 0; f < sana.length; f++)//
  {
    salasana += sana[f] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}

function Kirjain()
{
  var annettuSana = document.getElementById('ssana').value;
  var vastauss = 'ei ole';
  for(var k = 0; k < annettuSana.length; k++)
  {
    if(annettuSana[k] == 'ö' || annettuSana[k] == 'Ö-')
    {
      vastauss = 'on';
    }
  }
  document.getElementById('vastauss').innerHTML = '<p>' + vastauss + '</p>';
}

function Kertoma()
{
  var kerLuku = document.getElementById('skertoma').value;
  var laskettu = 1;
  for(var z = 1; z <= kerLuku; z++)
  {
    laskettu*=z;
  }
  document.getElementById('Vastaus').innerHTML = '<p>Luvun ' + kerLuku + ' kertoma on '+laskettu + '</p>';
}

function Lukutulostus()
{
  var tulosta = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3==0 && y%5==0)
    {
      tulosta+='Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tulosta+='Heijaa ';
    }
    else if(y%3 == 0)
    {
      tulosta+='Hip ';
    }
    else {
      tulosta+=y+' ';
    }
    document.getElementById('tulostaluvut').innerHTML = tulosta;
  }
}


function kymmenenNum(){
  var kym = '<p>';
 for(var v = 1; v <=10; v++)
 {
    kym += v + ' ';
 }
 {
   kym += '</p>';
  document.getElementById('10luvut').innerHTML = kym;
 }
}


function yhteenlasku()
{
  yhteensa = 0;
  for(var q = 1; q <=10; q++)
  {
    yhteensa += q;
  }
  document.getElementById('lukujenTulostuss').innerHTML = '<p>'+ yhteensa + '</p>';
}


function potenssilasku()
{
  var korotett = document.getElementById('korotett').value;
  var potens = document.getElementById('potens').value;
  yht = korotett;
  for(var p = 1; p < potens; p++)
  {
    yht *= korotett;
  }
  document.getElementById('lukujenTulostusd').innerHTML = '<p>' + yht + '</p>';
}



function etsiSuurin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taul['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('lukujenTulostusj').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: '+ taulu[taulu.length-1];
}



function muoSalasana()
{
  var pw = '';
  var eka, toka;
  pw = document.getElementById('password').value;

  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  var temp = [];
  var lop='';
  for(var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    temp.push(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
  }
  lop = temp.join('');
  document.getElementById('lukujenTulostusk').innerHTML = lop;
}




function lisettomat()
{
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut='', rluvut='';
  nro1 = parseInt(document.getElementById('pienem').value);
  nro2 = document.getElementById('isompi').value;
  if(nro1%2 == 0)
  {
    palku = nro1;
  }
  else {
    palku = nro1+1;
  }
  for(var b = palku; b<=nro2; b+=2)
  {
    pluvut += b + ' ';
    psumma += b;
    //alert(pluvut + ' ' + psumma);
  }
  if(nro1%2 == 0)
  {
    ralku = nro1+1;
  }
  else {
    ralku = nro1;
  }
  for(var r = ralku; r<=nro2; r+=2)
  {
    rluvut += r + ' ';
    rsumma += r;
  }
  document.getElementById('lukujenTulostusPari').innerHTML = '<p>Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + '</p><p>Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + '</p>';
}
