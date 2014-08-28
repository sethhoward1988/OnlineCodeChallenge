
$(function(){
	var iframe = $('iframe')[0];
	var doc = iframe.contentDocument;

	$('#html-run').on('click', function (evt) {
		doc.open();
		doc.write(app.codeMirrors.html.getValue());
		doc.close();
	});

});