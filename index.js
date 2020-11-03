var randomnumber1 = Math.random() * 6;
if( randomnumber1 <1)
{
document.querySelector(" .img1").setAttribute("src","dice2.png");
document.querySelector(" .img2").setAttribute("src","dice1.png");
document.querySelector(" h1").textContent= "Draw ☹";
}
else if (randomnumber1 >1 && randomnumber1 <2)
{
document.querySelector(" .img1").setAttribute("src","dice5.png");
document.querySelector(" .img2").setAttribute("src","dice1.png");
document.querySelector(" h1").textContent= "Draw ☹";
}
else if (randomnumber1 >2 && randomnumber1 <3)
{
document.querySelector(" .img1").setAttribute("src","dice5.png");
document.querySelector(" .img2").setAttribute("src","dice6.png");
document.querySelector(" h1").textContent= "Player 2 Wins";
}
else if (randomnumber1 >3 && randomnumber1 <4)
{
document.querySelector(" .img1").setAttribute("src","dice6.png");
document.querySelector(" .img2").setAttribute("src","dice3.png");
document.querySelector(" h1").textContent= "Player 1 Wins";
}
else if (randomnumber1 >4 && randomnumber1 <5)
{
document.querySelector(" .img1").setAttribute("src","dice2.png");
document.querySelector(" .img2").setAttribute("src","dice4.png");
document.querySelector(" h1").textContent= "Draw ☹";
}
else if (randomnumber1 >5 && randomnumber1 <6)
{
document.querySelector(" .img1").setAttribute("src","dice1.png");
document.querySelector(" .img2").setAttribute("src","dice4.png");
document.querySelector(" h1").textContent= "Draw ☹";
}
