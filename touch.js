$(document).ready(function() {

	playSpeed = 1500

	defenceColor = '#FF9900'
	offenceColor = '#389944'
	ballCarrier = '#384D99'
	dumpBall = '#202020'
	positionsArray = []

	$('body').append('<div class="container"></div>')
	
	scoringPlay()

})

function scoringPlay() {
	$('.container').children().remove()
	$('.container').append('<div id="scoringPlay"></div>')
	createPlayers('defence', 3)
	createPlayers('offence', 3)
	createBall()

	$('#offence1').addClass('ballCarrier')

	$('#scoringPlay').append('<div id="startButton" class="button">Start play!</div><div id="resetButton" class="button">Reset play</div>')
	
	$('#startButton').on('click', runScoringPlay)

	$('#resetButton').on('click', resetScoringPlay)

}

function runScoringPlay() {
	$(this).siblings().each(function(i) {
		var tempObj = {
			'id' : $(this).attr('id'),
			'top' : $(this).css('top'),
			'left' : $(this).css('left'),
			'color' : $(this).css('background-color')
		}
		positionsArray.push(tempObj)
	})

	$('#startButton').hide()

	$('#offence1').stop().animate({'top': 250, 'left': 50}, playSpeed/2)
	$('.ball').stop().animate({'top': 253, 'left': 55}, playSpeed/2)

	setTimeout(function() {
		$('#offence1').stop().animate({backgroundColor: offenceColor}, playSpeed/2)
		$('#offence2').stop().animate({backgroundColor: ballCarrier}, playSpeed/2)
		$('.ball').stop().animate({'top': 303, 'left': 235}, playSpeed/2)
	}, playSpeed/2)

	setTimeout(function() {
		$('#offence1').stop().animate({'top': 175, 'left': 150}, playSpeed*2)
		$('#offence2').stop().animate({'top': 100, 'left': 325}, playSpeed)
		$('.ball').stop().animate({'top': 103, 'left': 330}, playSpeed)
		$('#offence3').stop().animate({'top': 140, 'left': 325}, playSpeed)
		$('#defence2').stop().animate({'top': 80, 'left': 290}, playSpeed)
		$('#defence3').stop().animate({'top': 80, 'left': 360}, playSpeed)
	}, playSpeed)

	setTimeout(function() {
		$('#offence2').css('background-color', dumpBall)
		$('#offence3').stop().animate({backgroundColor: ballCarrier}, playSpeed/2)
		$('.ball').stop().animate({'top': 143, 'left': 330}, playSpeed/2)
	}, playSpeed*2)

	setTimeout(function() {
		$('#offence3').stop().animate({backgroundColor: offenceColor}, playSpeed/2)
		$('#offence1').stop().animate({backgroundColor: ballCarrier}, playSpeed/2)
		$('.ball').stop().animate({'top': 188, 'left': 140}, playSpeed/2)
	}, playSpeed*2.5)

	setTimeout(function() {
		$('#offence1').stop().animate({'top': 0, 'left': 175 }, playSpeed)
		$('.ball').stop().animate({'top': 3, 'left': 180}, playSpeed)
	}, playSpeed*3)

	setTimeout(function() {
		$('#resetButton').show()
	}, playSpeed*4)
}

function resetScoringPlay() {
	for (var i = positionsArray.length - 1; i >= 0; i--) {
		$('#'+positionsArray[i].id).animate({'top': positionsArray[i].top, 'left': positionsArray[i].left, backgroundColor: positionsArray[i].color}, playSpeed)
	};
	$('#resetButton').hide()
	setTimeout(function() {
		$('#startButton').show()
	}, playSpeed)
}

function createPlayers(type, players) {
	for (var i = 1; i <= players; i++) {
		$('.container').children().append('<div id="'+type+i+'" class="'+type+' player"></div>')
	};
}

function createBall() {
	$('.container').children().append('<img id="ball" class="ball" src="ball.png"></img>')
}
