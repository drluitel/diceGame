
 function rollTheDice() {
var randomNumber1 = Math.floor (Math.random () * 6) +1; // generate the randon number 1 to 6
//var randomDiceImage= "dice" + randomNumber1 + ".png"; // generate dice1.png to dice6.png
var randomDiceSource= "image/dice" + randomNumber1+".png"; // generate imahe/dice1 to image/dice6

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceSource);

var randomNumber2 = Math.floor( Math.random()* 6) +1;
//var randomDiceImage2= "dice" + randomNumber2 +".png";
 var randomDiceSource2 = "image/dice"+ randomNumber2 +".png";
var image2=  document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceSource2);

 var randomNumber3 = Math.floor( Math.random()* 6) +1;
 var randomDiceSource3= "image/dice"+randomNumber3+".png";
 var image3 = document.querySelectorAll("img")[2];
 image3.setAttribute("src",randomDiceSource3);



// logic
if ((randomNumber1>randomNumber2) && (randomNumber1>randomNumber3 )){
    document.querySelector("h1").innerHTML= "🏆  Player 1 Win!";
}

else if ((randomNumber2>randomNumber1) && (randomNumber2>randomNumber3)){
    document.querySelector("h1").innerHTML= "🏆 Player 2 Win!";
}

else if ((randomNumber3>randomNumber1)  && (randomNumber3>randomNumber2)){
    document.querySelector("h1").innerHTML= "🏆 Player 3 Win!";
}

else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML= "🏆 Draw betwenn 1 and 2, Replay Again";
    

}

else if (randomNumber2 === randomNumber3) {
    document.querySelector("h1").innerHTML= "🏆 Draw betwenn 2 and 3, Replay Again";
   
}

else if (randomNumber3 === randomNumber1) {
    document.querySelector("h1").innerHTML= "🏆 Draw betwenn 1 and 3, Replay Again";
   
}


else {
    document.querySelector("h1").innerHTML= " Draw !";
}



 }