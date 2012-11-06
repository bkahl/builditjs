// defines view module

define(['../core'], 

	function(Core){
	
		var View = {
			id: "null",
			content : "null",
			theme: "null",
			namespace: "null",
			layout: { width: 0, height: 0, top: 0, right: 0, bottom: 0, left: 0 },
			fontStyle: "null",
			fontSize: "null",
			fontColor: "black",
			color: 'black',
	
			render: function(content){
				var id = content.id,
					layout = content.layout,
					string = content.string,
					lo;

				lo = "width: "+layout.width+"px; height: "+layout.height+"px; top: "+layout.top+"px; left: "+layout.left+"px; bottom:"+layout.bottom+"px; right:"+layout.right+"px;"; 

				$(id).text(string).attr('style',lo).css('background',content.backgroundColor).css('color',content.fontColor);

			}
		},
		boundViewClass = $.extend( true, View, Core );
		
		//console.log('View Class : ',boundViewClass);
		
		return boundViewClass;

});