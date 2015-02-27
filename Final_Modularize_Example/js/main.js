require.config({
	shim: {
      'underscore': {
        deps: ['jquery'], //dependencies
        exports: '_' //the exported symbol
      },
      'backbone': {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
  },
	paths:{
		jquery: 'libs/jquery/jquery-min',
		underscore: 'libs/underscore/underscore-min',
		backbone: 'libs/backbone/backbone-min',
		templates: '../templates',
		text: 'text'
	}
});
require([
					'app'
				],function(App){
					
					App.initialize();
					
});					