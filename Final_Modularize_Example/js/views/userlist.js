define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/userlist.html',
	'collections/collection'
],function($,_,Backbone,userlisttemplate, Users){
	var UserList=Backbone.View.extend({
        		el: $('.page'),
        		render: function(){
        			var that=this;
        			var users=new Users();
        			
        			users.fetch({
        				success:function(users){
        					var template=_.template(userlisttemplate,{users: users.models});
        					that.$el.html(template);	
        				},
        				error: function(){
   									 console.log('error');
  							}
        			})
        		}	
  });
  return UserList;
});  