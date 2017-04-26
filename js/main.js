console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[1];
cardsInPlay.push(cardOne);
console.log("You flipped" + " " + cardOne);
var cardTwo = cards[3];
cardsInPlay.push(cardTwo);
console.log("You flipped" + " " + cardTwo);
if (cardsInPlay.length === 2); {
if (cardsInPlay[0] === cardsInPlay[1])
alert ("You found match!");
else 
	alert ("Sorry, try again");
}


 

