/*Tehtävä 1*/
function Parilliset()
{
  var arvo = parseInt(document.getElementById('luku').value);
  var jono = " ";
  for(var x = 2; x <= arvo; x= x+2)
  {
    jono+=x;
    jono+=" ";
  }
  jono+=" ";
    document.getElementById('parilliset').innerHTML = jono;
}
/*Tehtävä 2*/
function Salasanaksi()
{
  var sana = document.getElementById('sana').value;
  var salasana = " ";
  for(var x = 0; x < sana.length; x++)
  {
    salasana += sana[x] + 'ö';
  }
  salasana += " ";
  document.getElementById('salasana').innerHTML = salasana;
}
/*Tehtävä 3*/
function Kirjain()
{
  var annettuSana = document.getElementById('ssana').value;
  var vastauss = 'ei ole';
  for(var x = 0; x < annettuSana.length; x++)
  {
    if(annettuSana[x] == 'Ö' || annettuSana[x] == 'ö')
    {
      vastauss = 'on';
    }
  }
  document.getElementById('vastauss').innerHTML = ' ' + vastauss + ' ';
}
/*Tehtävä 4 */
function Kertoma()
{
  var kerLuku = document.getElementById('skertoma').value;
  var laskettu = 1;
  for(var x = 1; x <= kerLuku; x++)
  {
    laskettu*=x;
  }
  document.getElementById('Vastaus').innerHTML = 'Luvun ' + kerLuku + ' kertoma on '+laskettu + ' ';
}
/*Tehtävä 5*/
function Lukutulostus()
{
  var tulosta = '';
  for(var x = 1; x <= 100; x++)
  {
    if(x%3==0 && x%5==0)
    {
      tulosta+='Hip Heijaa ';
    }
    else if(x%5 == 0)
    {
      tulosta+='Heijaa ';
    }
    else if(x%3 == 0)
    {
      tulosta+='Hip ';
    }
    else {
      tulosta+=x+' ';
    }
    document.getElementById('tulostaluvut').innerHTML = tulosta;
  }
}

/*Tehtävä 6 */
function kymmenenNum(){
  var kym = ' ';
 for(var x = 1; x <=10; x++)
 {
    kym += x + ' ';
 }
 {
   kym += ' ';
  document.getElementById('10luvut').innerHTML = kym;
 }
}

/*Tehtävä 7*/
function yhteenlasku()
{
  yhteensa = 0;
  for(var x = 1; x <=10; x++)
  {
    yhteensa += x;
  }
  document.getElementById('lukujenTulostuss').innerHTML = ' '+ yhteensa + ' ';
}

/*Tehtävä 8*/
function potenssilasku()
{
  var korotett = document.getElementById('korotett').value;
  var potens = document.getElementById('potens').value;
  yht = korotett;
  for(var x = 1; x < potens; x++)
  {
    yht *= korotett;
  }
  document.getElementById('lukujenTulostusd').innerHTML = ' ' + yht + ' ';
}


/*Tehtävä 9*/
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


/*Tehtävä 10*/
function muoSalasana()
{
  var pw = '';
  var eka, toka;
  pw = document.getElementById('password').value;

  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
  var temp = [];
  var lop='';
  for(var x = 0; x < pw.length; x++)
  {
    eka = pw[x];
    temp.push(eka);
    var lisa = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisa];
    temp.push(toka);
  }
  lop = temp.join('');
  document.getElementById('lukujenTulostusk').innerHTML = lop;
}



/*Tehtävä 11*/
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
  document.getElementById('lukujenTulostusPari').innerHTML = 'Parilliset numerot: ' + pluvut +' ja niiden summa: ' + psumma + 'Parittomat luvut: ' + rluvut + ' ja niiden summa: '+ rsumma + ' ';
}
