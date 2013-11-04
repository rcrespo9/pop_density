var app = app || {};

$(function() {

  // create the app's router from the Router construct
  app.router = new app.Router();

  // start our backbone history
  Backbone.history.start();

  // Shows how you can capture the event when a URL change occurs
  Backbone.history.on('route', function() {
    // This is how to retrieve the request URI / fragment
    var fragment = Backbone.history.getFragment();
    console.log(fragment);
  })
});