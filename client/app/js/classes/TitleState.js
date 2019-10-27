// TitleState
import BaseState from './BaseState';
import * as util from '../utilities';

export default class TitleState extends BaseState {
	constructor() {
		super();
	}
	start() {
		util.clearScreen();
		util.drawSplash();
		util.drawMenu(['Start', "Don't start"]);
	}
}