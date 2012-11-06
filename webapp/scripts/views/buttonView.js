// defines buttonView module

define(["./view"],

	function(View){
		
		var ButtonView = {	
			id: "null",
			content: "null",
			target: "null",
			action: "null",
			string: 'Button',
			backgroundColor: 'blue',
			fontColor: 'white',
			color: 'white',
			layout: { height: 25, width: 80, top: 0, left: 0 }
		};
		
		return $.extend( true, View, ButtonView );
});