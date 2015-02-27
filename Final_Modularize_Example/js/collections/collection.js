define([
	'underscore',
	'backbone',
	'models/model'
],function(_,Backbone,Model){
	var Users = Backbone.Collection.extend({
						model:Model,
						url:'http://backbonejs-beginner.herokuapp.com/users',
						initialize:function(){
        			
        		}	
  });
  return Users;
});  	