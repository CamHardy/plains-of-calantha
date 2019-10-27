// globals.js
import StateMachine from './classes/StateMachine';
import TitleState from './classes/TitleState';

export const GAME_WIDTH = 23;
export const GAME_HEIGHT = 23;

export var titleState = new TitleState();
export var stateMachine = new StateMachine({"title": titleState});

export var game_display = new ROT.Display({
	width: GAME_WIDTH, 
	height: GAME_HEIGHT,
	forceSquareRatio: true,
	bg: '#111'
});

export var game_console = new ROT.Display({
	width: 40,
	height: 8,
	bg: '#151515'
});

export var homeSplash = [
	"*******",
	"***     ***",
	"**         **",
	"**           **",
	"*             *",
	"**             **",
	"*   PLAINS      *",
	"*               *",
	"* ---- of ----- *",
	"*               *",
	"*     CALANTHA  *",
	"**             **",
	"*             *",
	"**           **",
	"**         **",
	"***     ***",
	"*******"];