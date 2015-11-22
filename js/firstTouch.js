firstTouchPlay = [{'id':'defence1','positions':[{'top':'50px','left':'50px','speed':0,'color':'#FF9900'},{'top':'50px','left':'50px','speed':750,'color':'#FF9900'},{'top':'50px','left':'50px','speed':750,'color':'#FF9900'},{'top':'50px','left':'50px','speed':1500,'color':'#FF9900'},{'top':'50px','left':'50px','speed':750,'color':'#FF9900'},{'top':'50px','left':'50px','speed':750,'color':'#FF9900'},{'top':'50px','left':'50px','speed':1500,'color':'#FF9900'}]},{'id':'defence2','positions':[{'top':'50px','left':'230px','speed':0,'color':'#FF9900'},{'top':'50px','left':'230px','speed':750,'color':'#FF9900'},{'top':'50px','left':'230px','speed':750,'color':'#FF9900'},{'top':'80px','left':'290px','speed':1500,'color':'#FF9900'},{'top':'80px','left':'290px','speed':750,'color':'#FF9900'},{'top':'80px','left':'290px','speed':750,'color':'#FF9900'},{'top':'80px','left':'290px','speed':1500,'color':'#FF9900'}]},{'id':'defence3','positions':[{'top':'50px','left':'400px','speed':0,'color':'#FF9900'},{'top':'50px','left':'400px','speed':750,'color':'#FF9900'},{'top':'50px','left':'400px','speed':750,'color':'#FF9900'},{'top':'80px','left':'360px','speed':1500,'color':'#FF9900'},{'top':'80px','left':'360px','speed':750,'color':'#FF9900'},{'top':'80px','left':'360px','speed':750,'color':'#FF9900'},{'top':'80px','left':'360px','speed':1500,'color':'#FF9900'}]},{'id':'offence1','positions':[{'top':'300px','left':'50px','speed':0,'color':'#384D99'},{'top':'250px','left':'50px','speed':750,'color':'#384D99'},{'top':'250px','left':'50px','speed':750,'color':'#389944'},{'top':'250px','left':'50px','speed':1500,'color':'#389944'},{'top':'250px','left':'50px','speed':750,'color':'#389944'},{'top':'175px','left':'150px','speed':750,'color':'#384D99'},{'top':'0px','left':'175px','speed':1500,'color':'#384D99'}]},{'id':'offence2','positions':[{'top':'300px','left':'230px','speed':0,'color':'#389944'},{'top':'300px','left':'230px','speed':750,'color':'#389944'},{'top':'300px','left':'230px','speed':750,'color':'#384D99'},{'top':'100px','left':'325px','speed':1500,'color':'#384D99'},{'top':'100px','left':'325px','speed':750,'color':'#202020'},{'top':'100px','left':'325px','speed':750,'color':'#202020'},{'top':'100px','left':'325px','speed':1500,'color':'#202020'}]},{'id':'offence3','positions':[{'top':'300px','left':'400px','speed':0,'color':'#389944'},{'top':'300px','left':'400px','speed':750,'color':'#389944'},{'top':'300px','left':'400px','speed':750,'color':'#389944'},{'top':'140px','left':'325px','speed':1500,'color':'#389944'},{'top':'140px','left':'325px','speed':750,'color':'#384D99'},{'top':'140px','left':'325px','speed':750,'color':'#389944'},{'top':'140px','left':'325px','speed':1500,'color':'#389944'}]},{'id':'ball','positions':[{'top':'303px','left':'55px','speed':0,'color':'rgba(255,255,255,0)'},{'top':'253px','left':'55px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'303px','left':'235px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'103px','left':'330px','speed':1500,'color':'rgba(255,255,255,0)'},{'top':'143px','left':'330px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'178px','left':'155px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'3px','left':'180px','speed':1500,'color':'rgba(255,255,255,0)'}]}]
firstTouchPlayers = 3
firstTouchPositions = ['M', 'L', 'W']

$(document).ready(function() {
	$('#firstTouchButton').on('click', function() {
		setUpFirstTouch()
		setTimeout(firstTouch, 50)
	})
})

function setUpFirstTouch() {
	resetViewerWindow()
	$('.viewerWindow').append('<div id="firstTouch"></div>')
	createPlayers('defence', firstTouchPlayers, 'firstTouch', firstTouchPositions)
	createPlayers('offence', firstTouchPlayers, 'firstTouch', firstTouchPositions)
	createBall('firstTouch')
	setPositions(firstTouchPlay)
	buttonStats('firstTouch')
}

function firstTouch() {
	$(document.body).on('click', '.firstTouchInit', function() {
		$('#startButton').hide()
		runfirstTouch()
	})
	$(document.body).on('click', '.firstTouchReset', function() {
		resetViewerWindow()
		setUpFirstTouch()
		setPositions(firstTouchPlay)
		buttonStats('firstTouch')
	})
}

function runfirstTouch() {
	var playThis = true
	$('.selector').on('click', function() {
		playThis = false
	})
	setTimeout(function() {
		if (playThis) {$('#firstTouch').children().each(function(i) {animateThisThis(firstTouchPlay, i, 1)})};
	}, 0)
	setTimeout(function() {
		if (playThis) {$('#firstTouch').children().each(function(i) {animateThisThis(firstTouchPlay, i, 2)})};
	}, 750)
	setTimeout(function() {
		if (playThis) {$('#firstTouch').children().each(function(i) {animateThisThis(firstTouchPlay, i, 3)})};
	}, 1500)
	setTimeout(function() {
		if (playThis) {$('#firstTouch').children().each(function(i) {animateThisThis(firstTouchPlay, i, 4)})};
	}, 3000)
	setTimeout(function() {
		if (playThis) {$('#firstTouch').children().each(function(i) {animateThisThis(firstTouchPlay, i, 5)})};
	}, 3750)
	setTimeout(function() {
		if (playThis) {$('#firstTouch').children().each(function(i) {animateThisThis(firstTouchPlay, i, 6)})};
	}, 4500)
	setTimeout(function() {
		if (playThis) {$('#resetButton').show()};
	}, 6000)
}



