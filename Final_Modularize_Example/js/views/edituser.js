define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/edituser.html',
	'models/model'
],function($,_,Backbone,editusertemplate,User){
	$.fn.serializeObject=function(){
        		var o={};
        		var a=this.serializeArray();
        		$.each(a,function(){
        			if(o[this.name]!== undefined){
        				if(!o[this.name].push){
        					o[this.name]=this.value||'';
        				}
        			  o[this.name].push(this.value||'');
        			}	
        			else{
        				o[this.name]=this.value||'';
        			}
        		});
        		return o;
  };		
	var EditUser=Backbone.View.extend({
        		el:	$('.page'),
        		render: function(options){
        			var that=this;
        			if(options.router){
        				this.app_router=options.router;
        			}
        			if(options.id){
        				that.user = new User({id: options.id});
        				that.user.fetch({
        					success: function(user){
        					var template=_.template(editusertemplate,{user: user});
        			    that.$el.html(template);
        			   }
        			  }) 	
        		  }	
        		  else{
 								var template=_.template(editusertemplate,{user: null});
        				this.$el.html(template);        		  	
        		  }	
        		},
        		events:{
        			'submit .edit-user-form' : 'saveUser',
        			'click .delete': 'deleteUser'
        		},
        		saveUser: function(ev){
        			var userDetails=$(ev.currentTarget).serializeObject();
        			var user = new User();
        			user.save(userDetails,{
        				success: function(user){
        					Backbone.history.navigate('',{trigger: true});
        				}
        			})	
        			return false; //by default form submission refresh the page to pretend it i have returning false so that it will stay in the same page.
        		},
        		deleteUser: function(ev){
        			this.user.destroy({
        				success: function(){
        					Backbone.history.navigate('',{trigger: true});
        				}
        			})
        			return false;
        		}				
   });	
   return EditUser;
}); 