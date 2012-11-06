$.fn.button = function(ButtonView, options){
	
	var content = $(this), defaults, opts, boundButtonPlugin;

	defaults = {
		id : content.selector,
		content : content
	};

	opts = $.extend(true, defaults, options);

	boundButtonPlugin = $.extend(true, ButtonView, opts); 
	
	ButtonView.render(boundButtonPlugin);
	
	//console.log('boundButtonPlugin : ',boundButtonPlugin);
};