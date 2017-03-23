var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardThree){
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
};

var board = document.getElementById("game-board");
function createCard(){
	for (var x = 0; x < 4; x += 1){
		var div = document.createElement("div");
		div.className = "card";
		board.appendChild(div);
	}
}
createCard();


