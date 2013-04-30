(function() {
	
	!window.console && (window.console = { log: function() {}});
	
	requirejs.config({
		paths: {
			'jquery' : '../libs/jquery/jquery-loader',
			'underscore' : '../libs/underscore/underscore-loader',
			'text' : '../libs/require/require-text-2.0.0'
		}
	});
	
	require(['app'], function(app) {
		app.initialize("UnderscoreJS Example");
	});
	
}).call(this);
