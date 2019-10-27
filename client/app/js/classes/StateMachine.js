// StateMachine.js

export default class StateMachine {
	constructor(states) {
		this.states = states || {};
		this.currentState = null;
	}

	draw() {
		if (this.currentState) {
			this.currentState.draw();
		}
	}

	update() {
		if (this.currentState) {
			this.currentState.update();
		}
	}

	change(stateName, params) {
		console.assert(this.states[stateName], "Attempted changing to an invalid state.");
		if (this.currentState) this.currentState.stop();
		this.currentState = this.states[stateName];
		this.currentState.start(params);
	}
}