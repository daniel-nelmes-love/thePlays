play32cPlay = [{'id':'defence1','positions':[{'top':'50px','left':'30px','speed':0,'color':'#FF9900'},{'top':'50px','left':'30px','speed':750,'color':'#FF9900'},{'top':'50px','left':'30px','speed':750,'color':'#FF9900'},{'top':'120px','left':'0px','speed':750,'color':'#FF9900'},{'top':'135px','left':'120px','speed':750,'color':'#FF9900'},{'top':'135px','left':'120px','speed':750,'color':'#FF9900'}]},{'id':'defence2','positions':[{'top':'50px','left':'110px','speed':0,'color':'#FF9900'},{'top':'50px','left':'110px','speed':750,'color':'#FF9900'},{'top':'50px','left':'110px','speed':750,'color':'#FF9900'},{'top':'120px','left':'60px','speed':750,'color':'#FF9900'},{'top':'135px','left':'180px','speed':750,'color':'#FF9900'},{'top':'135px','left':'180px','speed':750,'color':'#FF9900'}]},{'id':'defence3','positions':[{'top':'50px','left':'190px','speed':0,'color':'#FF9900'},{'top':'50px','left':'190px','speed':750,'color':'#FF9900'},{'top':'50px','left':'190px','speed':750,'color':'#FF9900'},{'top':'120px','left':'230px','speed':750,'color':'#FF9900'},{'top':'135px','left':'240px','speed':750,'color':'#FF9900'},{'top':'135px','left':'240px','speed':750,'color':'#FF9900'}]},{'id':'defence4','positions':[{'top':'50px','left':'270px','speed':0,'color':'#FF9900'},{'top':'160px','left':'310px','speed':750,'color':'#FF9900'},{'top':'160px','left':'310px','speed':750,'color':'#FF9900'},{'top':'160px','left':'310px','speed':750,'color':'#FF9900'},{'top':'160px','left':'310px','speed':750,'color':'#FF9900'},{'top':'160px','left':'310px','speed':750,'color':'#FF9900'}]},{'id':'defence5','positions':[{'top':'50px','left':'350px','speed':0,'color':'#FF9900'},{'top':'50px','left':'350px','speed':750,'color':'#FF9900'},{'top':'50px','left':'350px','speed':750,'color':'#FF9900'},{'top':'50px','left':'350px','speed':750,'color':'#FF9900'},{'top':'50px','left':'350px','speed':750,'color':'#FF9900'},{'top':'50px','left':'350px','speed':750,'color':'#FF9900'}]},{'id':'defence6','positions':[{'top':'50px','left':'430px','speed':0,'color':'#FF9900'},{'top':'50px','left':'430px','speed':750,'color':'#FF9900'},{'top':'50px','left':'430px','speed':750,'color':'#FF9900'},{'top':'50px','left':'430px','speed':750,'color':'#FF9900'},{'top':'50px','left':'430px','speed':750,'color':'#FF9900'},{'top':'50px','left':'430px','speed':750,'color':'#FF9900'}]},{'id':'offence1','positions':[{'top':'300px','left':'30px','speed':0,'color':'#389944'},{'top':'300px','left':'30px','speed':750,'color':'#389944'},{'top':'300px','left':'30px','speed':750,'color':'#389944'},{'top':'240px','left':'0px','speed':750,'color':'#389944'},{'top':'200px','left':'0px','speed':750,'color':'#384D99'},{'top':'0px','left':'0px','speed':750,'color':'#384D99'}]},{'id':'offence2','positions':[{'top':'300px','left':'110px','speed':0,'color':'#389944'},{'top':'300px','left':'110px','speed':750,'color':'#389944'},{'top':'300px','left':'110px','speed':750,'color':'#389944'},{'top':'240px','left':'60px','speed':750,'color':'#389944'},{'top':'160px','left':'150px','speed':750,'color':'#389944'},{'top':'160px','left':'150px','speed':750,'color':'#389944'}]},{'id':'offence3','positions':[{'top':'300px','left':'190px','speed':0,'color':'#389944'},{'top':'300px','left':'190px','speed':750,'color':'#389944'},{'top':'300px','left':'190px','speed':750,'color':'#389944'},{'top':'240px','left':'150px','speed':750,'color':'#389944'},{'top':'160px','left':'210px','speed':750,'color':'#389944'},{'top':'160px','left':'210px','speed':750,'color':'#389944'}]},{'id':'offence4','positions':[{'top':'300px','left':'270px','speed':0,'color':'#384D99'},{'top':'200px','left':'310px','speed':750,'color':'#384D99'},{'top':'200px','left':'310px','speed':750,'color':'#202020'},{'top':'200px','left':'310px','speed':750,'color':'#202020'},{'top':'200px','left':'310px','speed':750,'color':'#202020'},{'top':'200px','left':'310px','speed':750,'color':'#202020'}]},{'id':'offence5','positions':[{'top':'300px','left':'350px','speed':0,'color':'#389944'},{'top':'240px','left':'310px','speed':750,'color':'#389944'},{'top':'240px','left':'310px','speed':750,'color':'#384D99'},{'top':'200px','left':'270px','speed':750,'color':'#384D99'},{'top':'160px','left':'270px','speed':750,'color':'#389944'},{'top':'160px','left':'270px','speed':750,'color':'#389944'}]},{'id':'offence6','positions':[{'top':'300px','left':'430px','speed':0,'color':'#389944'},{'top':'300px','left':'430px','speed':750,'color':'#389944'},{'top':'300px','left':'430px','speed':750,'color':'#389944'},{'top':'300px','left':'430px','speed':750,'color':'#389944'},{'top':'300px','left':'430px','speed':750,'color':'#389944'},{'top':'300px','left':'430px','speed':750,'color':'#389944'}]},{'id':'ball','positions':[{'top':'303px','left':'275px','speed':0,'color':'rgba(255,255,255,0)'},{'top':'203px','left':'315px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'243px','left':'315px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'203px','left':'275px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'203px','left':'5px','speed':750,'color':'rgba(255,255,255,0)'},{'top':'3px','left':'5px','speed':750,'color':'rgba(255,255,255,0)'}]}]
play32cPlayers = 6
play32cPositions = ['W', 'L', 'M', 'M', 'L', 'W']

$(document).ready(function() {
	$('#play32cButton').on('click', function() {
		setUpplay32c()
		setTimeout(play32c, 50)
	})
})

function setUpplay32c() {
	resetViewerWindow()
	$('.viewerWindow').append('<div id="play32c"></div>')
	createPlayers('defence', play32cPlayers, 'play32c', play32cPositions)
	createPlayers('offence', play32cPlayers, 'play32c', play32cPositions)
	createBall('play32c')
	setPositions(play32cPlay)
	
	$('#startButton').attr('class', 'button play32cInit')
	$('#resetButton').attr('class', 'button play32cReset')
}

function play32c() {
	$('.play32cInit').on('click', function() {
		$('#startButton').hide()
		runplay32c()
	})

	$('.play32cReset').on('click', function() {
		resetViewerWindow()
		setUpplay32c()
		setPositions(play32cPlay)
	})
}

function runplay32c() {

	console.log('32b')
	var playThis = true
	$('.selector').on('click', function() {
		playThis = false
	})

	setTimeout(function() {
		if (playThis) {$('#play32c').children().each(function(i) {animateThisThis(play32cPlay, i, 1)})};
	}, 0)
	setTimeout(function() {
		if (playThis) {$('#play32c').children().each(function(i) {animateThisThis(play32cPlay, i, 2)})};
	}, 750)
	setTimeout(function() {
		if (playThis) {$('#play32c').children().each(function(i) {animateThisThis(play32cPlay, i, 3)})};
	}, 1500)
	setTimeout(function() {
		if (playThis) {$('#play32c').children().each(function(i) {animateThisThis(play32cPlay, i, 4)})};
	}, 2250)
	setTimeout(function() {
		if (playThis) {$('#play32c').children().each(function(i) {animateThisThis(play32cPlay, i, 5)})};
	}, 3000)
	setTimeout(function() {
		if (playThis) {$('#resetButton').show()};
	}, 3750)
}



