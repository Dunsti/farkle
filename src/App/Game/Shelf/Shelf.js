import React from 'react';
import './Shelf.css';
import '../Dice/Dice';
import Dice from "../Dice/Dice";

export default class Game extends React.Component {
	drawDice(eyes, size) {
		return (
			<Dice
				eyes={eyes} size={size} rotate={0}
			/>
		);
	}

	render() {
		return (
			<div className="shelf">
				<div className="row">
					<div className="col">{this.drawDice(1,80)}</div>
					<div className="col" />
					<div className="col" />
					<div className="col" />
					<div className="col" />
					<div className="col" />
				</div>
				<div className="row">
					<div className="col" />
					<div className="col" />
					<div className="col" />
					<div className="col" />
					<div className="col" />
				</div>
				<div className="row">
					<div className="col" />
					<div className="col" />
					<div className="col" />
					<div className="col" />
				</div>
				<div className="row">
					<div className="col" />
					<div className="col" />
					<div className="col" />
				</div>
				<div className="row">
					<div className="col" />
					<div className="col" />
				</div>
				<div className="row">
					<div className="col" />
				</div>
			</div>
		)
	}
}
