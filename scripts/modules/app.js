define(['underscore', 'jquery', 'text!body.html'], function(_, $, Template) {
	return {
		initialize: function(heading) {
			var _template = _.template(Template, {heading: heading});
			$('body').append(_template);
		}
	}
});