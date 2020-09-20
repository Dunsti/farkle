import React from 'react';
import './Dice.css'

export default class Dice extends React.Component {
	drawEye(coords) {
		return (
			<circle
				cx={coords[0]}
				cy={coords[1]}
				r="7.5"
				className="eyes"
			/>
		)
	}

	renderEyes() {
		let eyeCoords;
		switch (this.props.eyes) {
			case 1:
				eyeCoords = [[50, 50]];
				break;
			case 2:
				eyeCoords = [[30, 30], [70, 70]];
				break;
			case 3:
				eyeCoords = [[30, 30], [50, 50], [70, 70]];
				break;
			case 4:
				eyeCoords = [[30, 30], [30, 70], [70, 30], [70, 70]];
				break;
			case 5:
				eyeCoords = [[30, 30], [30, 70], [50, 50], [70, 30], [70, 70]];
				break;
			case 6:
				eyeCoords = [[30, 30], [30, 50], [30, 70], [70, 30], [70, 50], [70, 70]];
				break;
			default:
				eyeCoords = [];
				break;
		}
		return eyeCoords.map(this.drawEye);
	}

	render() {
		let xrotate = "rotate(" + this.props.rotate + ",50,50)";
		let renderedEyes = this.renderEyes();
		return (
			<svg
				viewBox="0 0 200 200"
				height={this.props.size}
				width={this.props.size}
				className="Dice"
			>
				<defs>
					<filter id="f1">
						<feGaussianBlur in="SourceGraphic" stdDeviation="1" />
					</filter>
					<filter id="dropShadow">
						<feGaussianBlur in="SourceAlpha" stdDeviation="10" />
						<feOffset dx="10" dy="10" />
						<feMerge>
							<feMergeNode />
							<feMergeNode in="SourceGraphic" />
						</feMerge>
					</filter>
				</defs>


				<g>
					<g transform="translate(50,50)" filter="url(#dropShadow)">
						<g transform={xrotate}>
							<rect
								ry="20"
								y="0"
								x="0"
								height="100"
								width="100"
								className="rect_rolu"
							/>
							<rect
								ry="20"
								x="0"
								y="0"
								height="70"
								width="70"
								className="rect_lo"
							/>
							<rect
								ry="20"
								x="30"
								y="30"
								height="70"
								width="70"
								className="rect_ru"
							/>
							<rect
								ry="40"
								y="0"
								x="0"
								height="100"
								width="100"
								className="circle"
							/>
							{renderedEyes}
						</g>
					</g>
				</g>
			</svg>
		)
	}
}
