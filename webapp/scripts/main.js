require.config({
	baseURL: 'scripts',
    paths: {
		'jquery': 'lib/jquery-1.8.2',
		'plugins': 'plugins',
		'views': 'views',
		'templates': 'templates',
		'text': 'text'
    }
});

require(["jquery", "views/view", "views/buttonView", "plugins/button"], 

	function($, ButtonView) {
			
		$('body #1').button(ButtonView, {
			string: 'Big Button',
			layout: { top: 100, left: 100 },
			gradient: {
				bool: 'YES',
				boxShadow: 'YES'
			}
		});

	}

);