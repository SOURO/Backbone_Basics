define([
	'jquery',
	'underscore',
	'backbone',
	'views/userlist',
	'views/edituser'
],function($,_,Backbone,UserList,EditUser){
	  var AppRouter = Backbone.Router.extend({
        	routes:{
        		'':'home',
        		'new': 'editUser',
        		'edit/:id': 'editUser'
        	}
    });	
    var initialize=function(){
    	 var app_router = new AppRouter();
        app_router.on('route:home',function(){
        	var userList=new UserList();
        	userList.render();
        });
        var that=this;
        app_router.on('route:editUser',function(id){
        	var editUser=new EditUser();
        	editUser.render({id: id});
        });
        Backbone.history.start();	
    };
    return{
    	initialize: initialize
    };
});    	  