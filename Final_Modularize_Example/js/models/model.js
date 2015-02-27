define([
	'underscore',
  'backbone'
],function(_,Backbone){
	var User = Backbone.Model.extend({
		urlRoot:'http://backbonejs-beginner.herokuapp.com/users',
		initialize:function(){
    }    		
  });  
  return User;
});  