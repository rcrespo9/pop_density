var app = app || {}

app.AppView = Backbone.View.extend({
  // Base the view on a specific existing element
  el: $('#country_info'),

  // Let's initialize this view by populating the template and caching a selector
  initialize: function() {
    // Populate the main container with our appView template
    this.$el.html($('#app-view-template').html());
    //Cache commonly used selectors
    this.$info = $('#country');

    this.collection.on('add', this.renderItem, this);
  },

  renderItem: function(country) {
    // generate the backbone view object and set the model
    var view = new app.CountryInfoView({model: country});
    // using our cached object from the initialize function, append the new view to the list for display
    this.$info.append(view.render().el);
  },

  // let's render the sub tempaltes for our main app
  render: function() {
    // Create views for each post in the Posts collection and append them to the list (underscore style)
    this.collection.each(function(country) {
      this.renderItem(country);
    }, this); // "this" is the context in the callback

    // Returning the object is a good practice so we can do chaining
    return this;
  }

});

