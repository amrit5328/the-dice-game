var lrand= Math.floor((Math.random() * 6)+1);
var rrand= Math.floor((Math.random() * 6)+1);

var randomDiceImage1="dice"+lrand+".png";
var randomImageSource1="images/"+randomDiceImage1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);


var randomDiceImage2="dice"+rrand+".png";

var randomImageSource2="images/"+randomDiceImage2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


if(lrand > rrand)
{
  document.querySelector("h1").innerHTML = "PLAYER 1 WINS.....";
}
else if (lrand < rrand) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WINS.....";
}
else{
  document.querySelector("h1").innerHTML = "IT'S A TIE.....";
}
