import * as _G from './globals';

//TODO: socket.io integration
//var socket = io();

	// *** Program Start *** //
window.addEventListener('load', function () {
	document.getElementById('game_display').appendChild(_G.game_display.getContainer());
	document.getElementById('game_console').appendChild(_G.game_console.getContainer());

	_G.stateMachine.change('title');
	console.log('Game initialized');
});

// update interface on keydown/keypress
window.addEventListener("keydown", function(e) {
	_G.stateMachine.update(e.keyCode);
});

//TODO: update game on socket message from server