function ajoneuvoika()
{
    var ika = parseInt(document.getElementById('ika').value);
    if(ika < 15)
    {
      document.write("Voit ajaa polkupyörää");
    }
    else if(ika < 18)
    {
      document.write("Voit ajaa mopoa");
    }
    else {
      document.write("Voit ajaa autoa");
    }
  }
