play32aPlay = [{'id':'defence1','positions':[{'top':'50px','left':'30px','speed':0,'color':'#FF9900'},{'top':'50px','left':'30px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'30px','speed':1200,'color':'#FF9900'},{'top':'120px','left':'0px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'0px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'0px','speed':1200,'color':'#FF9900'}]},{'id':'defence2','positions':[{'top':'50px','left':'110px','speed':0,'color':'#FF9900'},{'top':'50px','left':'110px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'110px','speed':1200,'color':'#FF9900'},{'top':'120px','left':'60px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'60px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'60px','speed':1200,'color':'#FF9900'}]},{'id':'defence3','positions':[{'top':'50px','left':'190px','speed':0,'color':'#FF9900'},{'top':'50px','left':'190px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'190px','speed':1200,'color':'#FF9900'},{'top':'120px','left':'230px','speed':1200,'color':'#FF9900'},{'top':'135px','left':'240px','speed':1200,'color':'#FF9900'},{'top':'135px','left':'240px','speed':1200,'color':'#FF9900'}]},{'id':'defence4','positions':[{'top':'50px','left':'270px','speed':0,'color':'#FF9900'},{'top':'160px','left':'310px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'310px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'310px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'310px','speed':1200,'color':'#FF9900'},{'top':'160px','left':'310px','speed':1200,'color':'#FF9900'}]},{'id':'defence5','positions':[{'top':'50px','left':'350px','speed':0,'color':'#FF9900'},{'top':'50px','left':'350px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'350px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'350px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'350px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'350px','speed':1200,'color':'#FF9900'}]},{'id':'defence6','positions':[{'top':'50px','left':'430px','speed':0,'color':'#FF9900'},{'top':'50px','left':'430px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'430px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'430px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'430px','speed':1200,'color':'#FF9900'},{'top':'50px','left':'430px','speed':1200,'color':'#FF9900'}]},{'id':'offence1','positions':[{'top':'300px','left':'30px','speed':0,'color':'#389944'},{'top':'300px','left':'30px','speed':1200,'color':'#389944'},{'top':'300px','left':'30px','speed':1200,'color':'#389944'},{'top':'240px','left':'0px','speed':1200,'color':'#389944'},{'top':'200px','left':'0px','speed':1200,'color':'#389944'},{'top':'200px','left':'0px','speed':1200,'color':'#389944'}]},{'id':'offence2','positions':[{'top':'300px','left':'110px','speed':0,'color':'#389944'},{'top':'300px','left':'110px','speed':1200,'color':'#389944'},{'top':'300px','left':'110px','speed':1200,'color':'#389944'},{'top':'240px','left':'60px','speed':1200,'color':'#389944'},{'top':'200px','left':'60px','speed':1200,'color':'#389944'},{'top':'200px','left':'60px','speed':1200,'color':'#389944'}]},{'id':'offence3','positions':[{'top':'300px','left':'190px','speed':0,'color':'#389944'},{'top':'300px','left':'190px','speed':1200,'color':'#389944'},{'top':'300px','left':'190px','speed':1200,'color':'#389944'},{'top':'240px','left':'190px','speed':1200,'color':'#389944'},{'top':'200px','left':'150px','speed':1200,'color':'#384D99'},{'top':'0px','left':'150px','speed':1200,'color':'#384D99'}]},{'id':'offence4','positions':[{'top':'300px','left':'270px','speed':0,'color':'#384D99'},{'top':'200px','left':'310px','speed':1200,'color':'#384D99'},{'top':'200px','left':'310px','speed':1200,'color':'#202020'},{'top':'200px','left':'310px','speed':1200,'color':'#202020'},{'top':'200px','left':'310px','speed':1200,'color':'#202020'},{'top':'200px','left':'310px','speed':1200,'color':'#202020'}]},{'id':'offence5','positions':[{'top':'300px','left':'350px','speed':0,'color':'#389944'},{'top':'240px','left':'310px','speed':1200,'color':'#389944'},{'top':'240px','left':'310px','speed':1200,'color':'#384D99'},{'top':'200px','left':'270px','speed':1200,'color':'#384D99'},{'top':'160px','left':'270px','speed':1200,'color':'#389944'},{'top':'160px','left':'270px','speed':1200,'color':'#389944'}]},{'id':'offence6','positions':[{'top':'300px','left':'430px','speed':0,'color':'#389944'},{'top':'300px','left':'430px','speed':1200,'color':'#389944'},{'top':'300px','left':'430px','speed':1200,'color':'#389944'},{'top':'300px','left':'430px','speed':1200,'color':'#389944'},{'top':'300px','left':'430px','speed':1200,'color':'#389944'},{'top':'300px','left':'430px','speed':1200,'color':'#389944'}]},{'id':'ball','positions':[{'top':'303px','left':'275px','speed':0,'color':'rgba(255,255,255,0)'},{'top':'203px','left':'315px','speed':1200,'color':'rgba(255,255,255,0)'},{'top':'243px','left':'315px','speed':1200,'color':'rgba(255,255,255,0)'},{'top':'203px','left':'275px','speed':1200,'color':'rgba(255,255,255,0)'},{'top':'203px','left':'155px','speed':1200,'color':'rgba(255,255,255,0)'},{'top':'3px','left':'155px','speed':1200,'color':'rgba(255,255,255,0)'}]}]
play32aPlayers = 6
play32aPositions = ['W', 'L', 'M', 'M', 'L', 'W']

$(document).ready(function() {
	$('#play32aButton').on('click', function() {
		setUpplay32a()
		setTimeout(play32a, 50)
	})
})

function setUpplay32a() {
	resetViewerWindow()
	$('.viewerWindow').append('<div id="play32a"></div>')
	createPlayers('defence', play32aPlayers, 'play32a', play32aPositions)
	createPlayers('offence', play32aPlayers, 'play32a', play32aPositions)
	createBall('play32a')
	setPositions(play32aPlay)
	
	$('#startButton').attr('class', 'button play32aInit')
	$('#resetButton').attr('class', 'button play32aReset')
}

function play32a() {
	$('.play32aInit').on('click', function() {
		$('#startButton').hide()
		runplay32a()
	})
	$('.play32aReset').on('click', function() {
		resetViewerWindow()
		setUpplay32a()
		setPositions(play32aPlay)
	})
}

function runplay32a() {
	var playThis = true
	$('.selector').on('click', function() {
		playThis = false
	})
	setTimeout(function() {
		if (playThis) {$('#play32a').children().each(function(i) {animateThisThis(play32aPlay, i, 1)})};
	}, 0)
	setTimeout(function() {
		if (playThis) {$('#play32a').children().each(function(i) {animateThisThis(play32aPlay, i, 2)})};
	}, 1200)
	setTimeout(function() {
		if (playThis) {$('#play32a').children().each(function(i) {animateThisThis(play32aPlay, i, 3)})};
	}, 2400)
	setTimeout(function() {
		if (playThis) {$('#play32a').children().each(function(i) {animateThisThis(play32aPlay, i, 4)})};
	}, 3600)
	setTimeout(function() {
		if (playThis) {$('#play32a').children().each(function(i) {animateThisThis(play32aPlay, i, 5)})};
	}, 4800)
	setTimeout(function() {
		if (playThis) {$('#resetButton').show()};
	}, 6000)
}



