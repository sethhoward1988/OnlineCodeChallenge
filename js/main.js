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
				css: 	'\n\n\n',
				javascript: 'function fruitCount (fruits) {\n\n' +
						'    // Write code here\n\n' +
						'} \n\n' + 
						"fruitCount(['apple', 'banana', 'apple', 'orange', 'banana'])\n\n" +
						"fruitCount(['kiwi', 'kiwi', 'berry', 'berry', 'berry'])\n\n"
			},

		codeMirrors: {
			html: null,
			css: null,
			javascript: null
		}
	}


	// Setup editors
	$('.editor').each(function(index, editor){
		var challenge = $(editor).attr('data-challenge');
		var mode = (challenge == 'html' ? 'htmlmixed' : challenge);
		var myCodeMirror = CodeMirror(editor, {
		  value: app.starterCode[challenge],
		  mode:  mode,
		  theme: "mdn-like",
		  lineNumbers: true
		});
		app.codeMirrors[challenge] = myCodeMirror;
	});

	CodeMirror($('.square-code-snippet')[0], {
		value:'<div id="mySquare" class="square">\n' +
				'    This is a square\n' +
				'</div>\n',
		mode: 'htmlmixed',
		theme: "mdn-like"
	});

	// Setup sliders
	$('.challenges h1, .intro h1').on('click', function (evt) {
		if($(evt.target).parent().hasClass('active')){
			$(evt.target).parent().removeClass('active');
			return;
		}
		activateChallenge($(evt.target).parent());
	});	

	$('.back').on('click', function (evt) {
		goInitialState();
	});

	function activateChallenge(challenge) {
		$('.challenges div, .intro').removeClass('active');
		$(challenge).addClass('active');
		$('.challenges').addClass('inactive');
		$('.back').fadeIn();
	}

	function goInitialState() {
		$('.back').fadeOut();
		$('.challenges div').removeClass('active');
		$('.challenges').removeClass('inactive');
		$('.intro').addClass('active');
	}

});