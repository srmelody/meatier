// Write your package code here!
function Card(rank, suit) {
	this.suit = suit;
	this.rank = rank;
}
Meteor.cards = {
// Creates a poker deck

pokerDeck: function () {
	var suits= ["Hearts", "Clubs", "Spades", "Diamonds"];
	var ranks = ["Ace", "King", "Queen", "Jack", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
	var deck = [];
	_.each(suits , function (suit) {
		_.each( ranks, function( rank) {
			var card = new Card( rank, suit );
			deck.push( card );
		});
	});
	return deck;
},
Card: Card,
shuffle: function( deck ) {
	return _.shuffle( deck );
},
deal: function( deck ) {
	return _.first( deck, 5 ); // need to pull these from the deck
}

 
}
