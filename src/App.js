import React from 'react';
import Dice from "./Dice";
import './App.css';

export default class App extends React.Component {
	drawDice() {
		return (
			<Dice
				eyes={Math.floor(Math.random() * 6 + 1)} size={100} rotate={Math.floor(Math.random() * 90 - 45)}
			/>
		);
	}

	render() {
		let output = [];
		let i = 0
		const count = 6;

		while (i < count) {
			output.push(this.drawDice());
			i++;
		}

		return (
			<div className="App">{output}</div>
		);
	}
}
