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
      return hand;
    }
  });

  Template.deal.events({
    'click button': function () {
      // Deal a new hand
      Session.set('playerHand', [{suit: "H", val: 10}]);
      console.log("Setting player hand", Session.get('playerHand'));
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    console.log("Welcome to meatier!");
  });
}
