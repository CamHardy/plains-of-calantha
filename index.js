// index.js
'use strict';

var Game = require('./server/server.js');

var path = require('path');
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = process.env.PORT || 8080;

app.use('/client', express.static(__dirname + '/client'));
app.use('/lib', express.static(__dirname + '/lib'));
app.use('/style', express.static(__dirname + '/style'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

// maybe have a 'players' group and a 'jury' group
io.on('connection', socket => {
	console.log('Oh hey look a new player');
	// new player joins the game
	socket.on('newPlayer', () => {
		// add player to game and notify all other players
		Game.addPlayer(randomInt(0, 20));
	});

	// player moves
	// player shoots
	// player passes an AP
	// player dies (gets added to jury)
	// jury player votes
	// player disconnects


});

server.listen(port, () => {
	console.log('Listening on port %d', port);

	Game.init();
	// schedule updates
});