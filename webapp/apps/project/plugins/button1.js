require.config({
	baseURL: 'scripts/',
    paths: {
		'jquery': 'lib/jquery-1.8.2',
		'plugins': 'plugins',
		'views': 'views',
		'templates': 'templates',
		'text': 'text'
    }
});

$.fn.button = function(options){
	var content = $(this), defaults, opts, bound;
	
	defaults = {
		id : content.selector,
		content : content
	};
	
	opts = $.extend(true, defaults, options);
	
	bound = $.extend(true, ButtonView, opts); 
	
	console.log('bound : ',bound);
	
	View.render(bound);
};