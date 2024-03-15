function sayidurum()
{
    var sayi=Math.floor(Math.random()*100);
            document.getElementById("s").value=sayi;

            if(sayi%2==0)
            {
                document.getElementById("snc").value="Çift";
            }
            else
            {
                document.getElementById("snc").value="Tek";
            }
}