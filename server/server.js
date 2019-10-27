// server.js

// server-side game script
'use strict';

const SCREEN_WIDTH = 20;
const SCREEN_HEIGHT = 20;

const STATE = '';
exports.STATE = STATE;
exports.players = [];

exports.init = () => {
	// initialize the game
	exports.STATE = 'INIT';

	exports.players = [];
	console.log('Game initialized');
};

exports.addPlayer = (id, x, y) => {
	// add player to game
	exports.players.append(new Player(id, x, y));
	console.log(`Player ${id} joined`);
};