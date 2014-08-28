$(function(){
	$('#css-run').on('click', function (evt) {
		var cm = $(evt.target).parent().find(".editor")[0].codeMirror;
		var css = cm.getValue();
		$('style#css-style-tag').empty().text(css)
		console.log(cm);
	});
});
