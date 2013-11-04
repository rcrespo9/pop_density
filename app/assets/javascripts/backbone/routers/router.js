var app = app || {};

// This is our router/controller for our app
app.Router = Backbone.Router.extend({
  // This is a simple object of routes.  The key is the route, and the value is the action
  routes: {
    '': 'index', // root path (/)
    'countries/:slug': 'getCountry'
  },

  // Index action: renders the AppView with the collection of test posts
  index: function() {
    // Create our main index view and give it our seed/test collection
    var posts = new app.Country();

    // posts.fetch().done(function() {
    //   app.app_view = new app.AppView({collection: posts});
    //   // Render the view
    //   app.app_view.render();
    // });

    countries.fetch();
    app.app_view = new app.AppView({collection: countries});
    // Render the view
    app.app_view.render();
  },

  // GetPost action: renders an individual post view
  getCountry: function(slug) {
    // Get our post by slug (the "id")
    var country = new app.Country({slug: slug});

    // post.fetch().done(function() {
    //   // Create the view and set the model.
    //   var post_view = new app.PostView({model: post});
    //   // Render the view!
    //   post_view.render();
    // });

    post.fetch();
    // Create the view and set the model.
    var country_view = new app.CountryView({model: country});
    // Render the view!
    post_view.render();
  }
});
