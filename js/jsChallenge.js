
$(function(){
	var iframe = $('iframe')[0];
	var doc = iframe.contentDocument;

	$('#javascript-run').on('click', function (evt) {
		var js = app.codeMirrors.javascript.getValue();
		try {
			eval(js);
		} catch (e) {
			var errorContainer = $('.errorContainer');
			errorContainer.text(e);
			errorContainer.slideDown();
			setTimeout(function(){
				errorContainer.slideUp();
			}, 3000);
		}
	});

});