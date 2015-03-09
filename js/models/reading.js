// Global backbone app
var App = App || {};

(function(){
  'use strict';

  App.ReadingModel = Backbone.Model.extend({
    defaults: {
    	title: '',
    	url: '#'
    },
    idAttribute: 'id'
  });

})();