
$(function(){
	var iframe = $('iframe')[0];
	var doc = iframe.contentDocument;

	$('#html-run').on('click', function (evt) {
		var cm = $(evt.target).parent().find(".editor")[0].codeMirror;
		var page = cm.getValue();
		doc.open();
		doc.write(page);
		doc.close();
	});

});