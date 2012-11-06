$.fn.button = function(View, ButtonView, options){
	var content = $(this), defaults, opts, extendClass;

	defaults = {
		id : content.selector,
		content : content
	};

	opts = $.extend(true, defaults, options);

	extendClass = $.extend(true, ButtonView, opts); 

	View.render(extendClass);
};