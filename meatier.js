
if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });

  Template.playerHand.helpers({
    playerHand: function () {
      var hand = Session.get("playerHand");
      console.log("Trying to render hand: ", hand );
      var handString = _.map( hand, function( card) {
        return card.rank + " of " + card.suit;
      });
      return handString;
    }
  });

  Template.deal.events({
    'click button': function () {
      // Deal a new hand.  My kingdom for coffeescript
      var deck = Meteor.cards.pokerDeck();
      var shuffled = Meteor.cards.shuffle( deck );
      var hand = Meteor.cards.deal( shuffled );
      Session.set('playerHand', hand);
      console.log("Setting player hand", Session.get('playerHand'));
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Welcome to meatier!");
    var deck = Meteor.cards.pokerDeck();
    var as = new Meteor.cards.Card( "Ace", "Spades");
    console.log("Pokwer deck", deck);
    console.log("as", as);
  });
}
