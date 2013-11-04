var app = app || {};

app.Country = Backbone.Model.extend({
  // Let's look up our blog post by slug instead of id
  idAttribute: 'slug',

   defaults: {
    title: 'New post'
  },
 
  urlRoot: '/country'

});
