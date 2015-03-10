// Global backbone app
var App = App || {};

// Reading Model
(function(){
  'use strict';

  App.Reading = Backbone.Model.extend({
    defaults: {
    	title: '',
    	url: '#'
    },
    idAttribute: 'id'
  });

})();