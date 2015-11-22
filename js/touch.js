function resetViewerWindow() {
	$('.viewerWindow').children().each(function() {
		if (!$(this).hasClass('button')) {
			$(this).remove()
		};
	})
}

function setPositions(array) {
	for (var i = array.length - 1; i >= 0; i--) {
		$('#'+array[i].id).css({
			'top': array[i].positions[0].top,
			'left': array[i].positions[0].left,
			'background-color': array[i].positions[0].color,
		})
	};
	$('#resetButton').hide()
	$('#startButton').show()
}

function animateThisThis(array, i, set) {
	$('#'+array[i].id).stop().animate({
		'top': array[i].positions[set].top,
		'left': array[i].positions[set].left,
		'background-color': array[i].positions[set].color,
	}, array[i].positions[set].speed)
}

function createPlayers(type, players, play, position) {
	for (var i = 1; i <= players; i++) {
		$('.viewerWindow').children('#' + play).append('<div id="'+type+i+'" class="player"><p>'+position[i-1]+'</p></div>')
	};
}

function createBall(play) {
	$('.viewerWindow').children('#' + play).append('<img id="ball" src="ball.png"></img>')
}
