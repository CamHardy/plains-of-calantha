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
// TODO: look up socket.io documentation on groups and channels or whatever
io.on('connect', socket => {
	console.log(`New player connected (ID: ${socket.id})`);
	//console.log(socket.handshake);
	
	// new player joins the game
	socket.on('newPlayer', () => {
		// add player to game and notify all other players
		Game.addPlayer(socket.id, randomInt(0, 20), randomInt(0, 20));
		io.broadcast.emit('updatePlayers');
	});

	// player moves
	// player shoots
	// player passes an AP
	// player dies (gets added to jury)
	// jury player votes
	// player disconnects

	socket.on('disconnect', () => {
		console.log(`Player disconnected (ID: ${socket.id})`);
	});
});

server.listen(port, () => {
	console.log('Listening on port %d', port);

	Game.init();
	// schedule updates
});