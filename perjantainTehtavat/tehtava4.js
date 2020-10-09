function Kortit()
{
  var pakka = [''];
  var maat = ['&#9828;', '&#9827;', '&#9826;', '&#9825;'];
  //var maat = ['pa','ri','ru', 'he']
  var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
  laskuri = 0;
  for(x = 0; x < maat.length; x++)
  {
    for(z = 0; z < numerot.length; z++)
    {
      if(x == maat.length-1 && z == numerot.length-1)
      {
        pakka[laskuri] = maat[x] + numerot[z];
      }
      else {
        pakka[laskuri] = maat[x]+numerot[z];
        laskuri++;
      }

    }
  }
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
      temp = pakka[Math.floor(Math.random()*52)];
      kortit[l] = temp;
  }
  document.getElementById('korttipakka').innerHTML = ' '+kortit+' ';
}
