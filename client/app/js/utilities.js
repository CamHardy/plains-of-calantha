// utilities.js
import * as _G from './globals';

export function clearScreen() {
	for (let j = 0; j < _G.GAME_HEIGHT; j++) {
		for (let i = 0; i < _G.GAME_WIDTH; i++) {
			_G.game_display.draw(i, j, '', '', bgColorAt(i, j));
		}
	}
}

export function drawSplash() {
	for (let i  = 0; i < _G.homeSplash.length; i++) {
		for (let j = 0; j < _G.homeSplash[i].length; j++) {
			let x = Math.floor((_G.GAME_WIDTH - _G.homeSplash[i].length) / 2) + j;
			let y = i + 3;
			let char = _G.homeSplash[i][j];
			let fg;
			if (char == '*') {
				fg = '#073';
			}
			else if (char == '-') {
				fg = '#777';
			}
			else fg = '#ddd';

			_G.game_display.draw(x, y, char, fg, bgColorAt(x, y));
		}
	}
	_G.game_console.drawText(3, 2, 'I saw the truth on the plains of Calantha...')
}

export function clamp(num, min, max) {
	return num <= min ? min : num >= max ? max : num;
}

export function HSVtoRGB(h, s, v) {
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

export function RGBtoHSV(r, g, b) {
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

export function bgColorAt(x, y) {
	return ((y * _G.GAME_WIDTH) + x) % 2 ? '#272728' : '#202021';
}

export function drawMenu(arr) {
	// display the given list of items as a console menu
	// highlight the currently selected item
	// update the currently selected item when the user presses up or down 
	// will arrow keys always control the console or sometimes the display as well?
}