
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king"; 

var cards = ["queen", "queen", "king", "king"];

var gameBoard = document.getElementById("game-board");

function createCard(){

for (var i = 0; i < cards.length; i++){
	var cardOne = document.createElement("div");
	cardOne.className = "card";
	gameBoard.appendChild(cardOne)
	cardOne.setAttribute("data-card", cards[i]);
	cardOne.addEventListener("click", isTwoCards)
}
}
var cardsInPlay = [];

function isTwoCards() {
	if (this.getAttribute("data-card") === "queen") {
		this.innerHTML = '<img src="queen.png" alt="Queen of Hearts" />';
	}   if (this.getAttribute("data-card") === "king"){
		this.innerHTML = '<img src="king.png" alt="King of Diamonds" />';
	}

	cardsInPlay.push(this.getAttribute("data-card"));
	if (cardsInPlay.length === 2) {
		isMatch();
		cardsInPlay = [];
} 
}

function isMatch(cards) {

if (cardsInPlay[0] === cardsInPlay[1]) {

	alert("You found a match!");

} else {

	alert("Sorry, try again.");
	}
}
createCard();


