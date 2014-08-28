$(function(){

	// Global application code
	window.app = {
		starterCode: {
				html: 	'<!DOCTYPE html>\n' +
						'<html>\n' +
						'    <head></head>\n' +
						'    <body>\n\n' +
						'        <!-- Write your code here! -->\n\n' +
						'    </body>\n' +
						'</html>\n',
				css: 	'.square {\n\n' +
						'}\n',
				js: ''
			},

		codeMirrors: {
			html: null,
			css: null,
			js: null
		}
	}


	// Setup editors
	$('.editor').each(function(index, editor){
		var challenge = $(editor).attr('data-challenge');
		var myCodeMirror = CodeMirror(editor, {
		  value: app.starterCode[challenge],
		  mode:  "javascript",
		  lineNumbers: true
		});
		app.codeMirrors[challenge] = myCodeMirror;
	});

	// Setup sliders
	$('.challenges h1, .intro h1').on('click', function (evt) {
		if($(evt.target).parent().hasClass('active')){
			$(evt.target).parent().removeClass('active');
			return;
		}
		$('.challenges div, .intro').removeClass('active');
		$(evt.target).parent().addClass('active');
	});	

});