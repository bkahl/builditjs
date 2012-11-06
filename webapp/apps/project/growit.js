$(function(){
	
	var GI = GI || {};
	
	var GrowIt = GrowIt || GI;
	
	GrowIt.VERSION = '0.0.1';
	
	// ALL CLASSES ************************************************************
	
	var View = GrowIt.View = {
		id: "null",
		content : "null",
		theme: "grow-it",
		layout: "null",
		fontStyle: "null",
		fontSize: "null",
		fontColor: "black",
		render: function(content){
			var id = content.id,
				layout = content.layout,
				string = content.string,
				lo;
				
			// console.log('id : ',id);
			// console.log('layout : ',layout);
			// console.log('string : ',string);
			
			lo = "width: "+layout.width+"px; height: "+layout.height+"px; top: "+layout.top+"px; left: "+layout.left+"px; bottom:"+layout.bottom+"px; right:"+layout.right+"px;"; 
						
			$(id).text(string).attr('style',lo).css('background',content.backgroundColor).css('color',content.fontColor);

		}
	};
	
	var ButtonView = View.ButtonView = $.extend(true, View, {
		id: "null",
		content: "null",
		target: "null",
		action: "null",
		string: 'Button',
		backgroundColor: 'blue',
		fontColor: 'white',
		layout: { height: 25, width: 80, top: 0, left: 0 }
	});
	
	/*************************************************************************/
	
	var Plugins = GrowIt.Plugins = {};
		
	Plugins.button = $.fn.button = function(options){
		var content = $(this), defaults, opts, bound;
		
		defaults = {
			id : content.selector,
			content : content
		};
		
		opts = $.extend(true, defaults, options);
		
		bound = $.extend(true, ButtonView, opts); 
		
		//console.log('bound : ',bound);
		
		View.render(bound);
	};
	
	/*************************************************************************/
	
	//console.log(GrowIt);
	
});





