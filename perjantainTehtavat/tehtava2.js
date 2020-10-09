function Lotto()
{
  var lnumerot = [];
  var temp;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    temp = Math.floor(Math.random()*40)+1;
    lnumerot[lotto] = temp;
  }
  lnumerot.sort(/*function(a, b){return a-b}*/);

  document.getElementById('taulu').innerHTML = ' '+lnumerot+' ';
}

function taulukko()
{
  var jono = [];
  jono = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  var taulu = '<table border="1">';
  for(var x = 0; x < jono.length; x++)
  {
    taulu += ' ';
    for(var z = 0; k < jono[x].length; z++)
    {
      taulu += ' ' + jono[x][z] + ' ';
    }
    taulu += ' ';
  }
  taulu += '</table>';
  document.getElementById('taulu2').innerHTML = taulu;
}
