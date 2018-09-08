const GAME_WIDTH = 21;
const GAME_HEIGHT = 21;

var game_display = new ROT.Display({
	width: GAME_WIDTH, 
	height: GAME_HEIGHT,
	forceSquareRatio: true,
	bg: '#111'
});

var game_console = new ROT.Display({
	width: 40,
	height: 8,
	bg: '#151515'
});

var socket = io();

window.addEventListener('load', function () {
	document.getElementById('game_display').appendChild(game_display.getContainer());
	document.getElementById('game_console').appendChild(game_console.getContainer());
});

function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}

function HSVtoRGB(h, s, v) {
	// bounds check
	if (h < 0) h += 360;
	else if (h >= 360) h -= 360;
	clamp(s, 0, 1);
	clamp(v, 0, 1);

	let C = v * s;
	let X = C * (1 - Math.abs((h / 60) % 2 - 1));
	let m = v - C;

	let rgb = h < 60 ? [C, X, 0] :
			h < 120 ? [X, C, 0] :
			h < 180 ? [0, C, X] :
			h < 240 ? [0, X, C] :
			h < 300 ? [X, 0, C] :
			[C, 0, X];

	return [(rgb[0] + m) * 255, (rgb[1] + m) * 255, (rgb[2] + m) * 255];
}

function RGBtoHSV(r, g, b) {
	// bounds check
	clamp(r, 0, 255);
	clamp(g, 0, 255);
	clamp(b, 0, 255);

	let R = r / 255;
	let G = g / 255;
	let B = b / 255;

	let cMax = Math.max(R, G, B);
	let cMin = Math.min(R, G, B);
	let delta = cMax - cMin;

	let h = delta == 0 ? 0 :
			cMax == R ? 60 * (((((G - B) / delta) % 6) + 6) % 6) :
			cMax == G ? 60 * (((B - R) / delta) + 2) :
			60 * (((R - G) / delta) + 4);
	let s = cMax == 0 ? 0 :	delta / cMax;
	let v = cMax;

	return [h, s, v];
}

function bgColorAt(x, y) {
	return ((y * GAME_WIDTH) + x) % 2 ? '#272728' : '#202021';
}

function clearScreen() {
	for (let j = 0; j < GAME_HEIGHT; j++) {
		for (let i = 0; i < GAME_WIDTH; i++) {
			game_display.draw(i, j, '', '', bgColorAt(i, j));
		}
	}
}

game_display.draw(20, 0, ['$', '#'], '#f00', bgColorAt(20, 0));
game_display.draw(20, 0, ['#', '.'], '#fff', 'transparent');
game_display.draw(1, 1, '#', '#f00', bgColorAt(1, 1));
// game_display.draw(50, 30, '@');
// game_display.draw(25, 15, '@');
// game_console.drawText(3, 2, 'Hello world')
clearScreen();
game_display.draw(16, 15, '@', '#f00', '#500');

console.log(HSVtoRGB(300, 1, 0.5));