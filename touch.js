$(document).ready(function() {
	defenceColor = '#FF9900'
	offenceColor = '#389944'
	ballCarrier = '#384D99'

	initialDelay = 50
	$('body').append('<div class="container"></div>')
	
	scoringPlay()

})

function scoringPlay() {
	$('.container').children().remove()
	$('.container').append('<div id="scoringPlay"></div>')
	createPlayers('defence', 3)
	createPlayers('offence', 3)

	$('#offence1').addClass('ballCarrier')

	$('#scoringPlay').append('<div id="startScoringPlay" class="startButton">Start play!</div>')
	$('#startScoringPlay').on('click', function() {
		$(this).remove()
		setTimeout(function() {
			var playSpeed = 1200
			setTimeout(function() {
				$('#offence1').animate({'top': 250, 'left': 50, backgroundColor:offenceColor}, playSpeed/2)
			}, initialDelay)

			setTimeout(function() {
				$('#offence1').animate({'top': 175, 'left': 150}, playSpeed)
				$('#offence2').animate({'top': 100, 'left': 325}, playSpeed)
				$('#offence3').animate({'top': 150, 'left': 325}, playSpeed)
				$('#defence2').animate({'top': 78, 'left': 280}, playSpeed)
				$('#defence3').animate({'top': 78, 'left': 370}, playSpeed)
			}, playSpeed/2)

			setTimeout(function() {
				$('#offence1').animate({'top': 0, 'left': 175 }, playSpeed)
			}, playSpeed*1.5)
		}, initialDelay)
	})
}

function createPlayers(type, players) {
	for (var i = 1; i <= players; i++) {
		$('.container').children().append('<div id="'+type+i+'" class="'+type+' player"></div>')
	};
}
