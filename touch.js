$(document).ready(function() {
	$('body').append('<div class="container"></div>')
	scoringPlay()
})

function scoringPlay() {
	$('.container').children().remove()
	$('.container').append('<div id="scoringPlay"></div>')
	createPlayers('defence', 3)
	createPlayers('offence', 3)
}

function createPlayers(type, players) {
	for (var i = 1; i <= players; i++) {
		$('.container').children().append('<div id="'+type+i+'" class="'+type+' player"></div>')
	};
}
