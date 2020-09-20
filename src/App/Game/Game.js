import React from 'react';
import Dice from "./Dice/Dice";
import Score from "./Score/Score";
import Shelf from "./Shelf/Shelf";
import './Game.css';

export default class Game extends React.Component {
	drawDice(eyes, size) {
		return (
			<Dice
				eyes={eyes} size={size} rotate={Math.floor(Math.random() * 90 - 45)}
			/>
		);
	}

	render() {
		let output = [];
		let i = 0
		const count = 6;

		while (i < count) {
			output.push(this.drawDice(Math.floor(Math.random() * 6 + 1), 80));
			i++;
		}

		return (
			<div>
				<Score />
				<Shelf />
				{output}
			</div>
		);
	}
}
