$(function(){
	$('#css-run').on('click', function (evt) {
		$('style#css-style-tag').empty().text(app.codeMirrors.css.getValue());
	});
});
