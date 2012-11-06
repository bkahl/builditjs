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
		
		lo = "width: "+layout.width+"px; height: "+layout.height+"px; top: "+layout.top+"px; left: "+layout.left+"px; bottom:"+layout.bottom+"px; right:"+layout.right+"px;"; 
					
		$(id).text(string).attr('style',lo).css('background',content.backgroundColor).css('color',content.fontColor);

	}
};