require.config({
	baseURL: 'apps/project',
    paths: {
		'vender': 'scripts/vender',
		'PLUGINS': 'scripts/globals/PLUGINS',
		'VIEWS': 'scripts/globals/VIEWS'
    }
});

require([
	
	"jquery", 
	"PLUGINS/button", 
	"base/core", 
	"VIEWS/view",
	"VIEWS/buttonView"

	], 
	
	function($) {
		
	    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
	    $(function() {
			// $('body #1').button({
			// 	color: 'red',
			// 	layout: { top: 50, left: 50 },
			// 	string: 'Big Button'
			// });
			
			//$('body').view();
	    });
	}

);
