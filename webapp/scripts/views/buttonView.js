// defines buttonView module

define(['./view'],

	function(View){
		
		var ButtonView = {	
			id: 'null',
			content: 'null',
			layout: { height: 25, width: 90, top: 0, left: 0 },
			target: 'null',
			action: 'null',
			string: 'Button',
			borderRadius: 0,
			border: 'none',
			gradient : {
				bool: 'NO',
				className: 'null',
				padding: '5px',
				margin: '0 0 15px 0',
				display: 'block',
				from: '#ffb353',
				to: '#fe762b',
				textAlign: 'center',
				border: '1px solid #fe762b',
				borderRadius: 0,
				backgroundColor: '#fe762b',
				fontColor: '#fff',
				textShadow: 'NO',
				boxShadow: 'NO'
			},
			backgroundColor: 'blue',
			fontColor: '#fff',	
			render: function(content){
				
				var id = content.id || null,
					layout = content.layout,
					string = content.string || null,
					gradient = content.gradient,
					browser = navigator.appCodeName;
				
				$(id).text(string)
					.css({
						'top': layout.top+'px',
						'right': layout.right+'px',
						'bottom': layout.bottom+'px',
						'left': layout.left+'px'
					});
						
				if(content.gradient.bool === 'YES'){
					
					$(id).css({
							'width':layout.width+'px',
							'padding':gradient.padding,
							'margin':gradient.margin,
							'text-align':gradient.textAlign,
							'display':gradient.display,
							'border':gradient.border,
							'color':gradient.fontColor,
							'border-radius':gradient.borderRadius,
							'background':gradient.backgroundColor
						})
						.hover(function(){
							$(this).css('text-decoration','underline');
						}, function(){
							$(this).css('text-decoration','none');
						});
					
					if(browser === 'Mozilla'){
						$(id).css({
							'background':'-moz-linear-gradient(-90deg,'+gradient.from+','+gradient.to+')'
						});
					} else if(browser === "Mac" || browser === "Safari"){
						$(id).css({
							'background':'-webkit-gradient(linear, left top, left bottom, from('+gradient.from+'), to('+gradient.to+'))',
							'background':'filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+gradient.from+', endColorstr='+gradient.to+')'
						});
					} else if (browser === "IE"){
						$(id).css({
							'background':'filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,startColorstr='+gradient.from+', endColorstr='+gradient.to+')'
						});
					}

				}else{

				}
				
				if(gradient.boxShadow === 'YES'){
					// box shadow
					// -moz-box-shadow: 2px 2px 3px #333333;
					// -webkit-box-shadow: 2px 2px 3px #333333;
					$(id).css({
						'box-shadow':'2px 2px 3px #333333'
					});
				}
				
				if(gradient.textShadow === 'YES'){
					// box shadow
					// -moz-text-shadow: 2px 2px 3px #333333;
					// -webkit-text-shadow: 2px 2px 3px #333333;
					$(id).css({
						'text-shadow':'0px 1px 1px #333'
					});
				}
				
			}
		},
		boundButtonViewClass = $.extend( true, View, ButtonView );
		
		//console.log('ButtonView Class : ',boundButtonViewClass);
		
		return boundButtonViewClass;
});