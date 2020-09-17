import React from 'react';

export default class Dice extends React.Component {
	// renderSwitch(param) {
	// 	let returnvalue;
	// 	switch (param) {
	// 		case 1:
	// 			returnvalue = returnvalue + <circle
	// 				cx="50"
	// 				cy="50"
	// 				r="7.5"
	// 				className="eyes"
	// 			/>;
	//
	// 	}
	// }

	render() {
		return (
			<svg
				viewBox="0 0 110 110"
				height={this.props.width}
				width={this.props.width}
			>
				<defs>
					<filter id="f1" x="0" y="0">
						<feGaussianBlur in="SourceGraphic" stdDeviation="3" />
					</filter>
				</defs>
				<rect
					ry="20%"
					y="5"
					x="5"
					height="100"
					width="100"
					className="shadow"
					filter="url(#f1)"
				/>
				<rect
					ry="20%"
					y="0"
					x="0"
					height="100"
					width="100"
					className="rect_ro"
				/>
				<rect
					ry="20%"
					x="0"
					y="0"
					height="70"
					width="70"
					className="rect_lo"
				/>
				<rect
					ry="20%"
					x="30"
					y="30"
					height="70"
					width="70"
					className="rect_ru"
				/>
				<rect
					ry="40%"
					y="0"
					x="0"
					height="100"
					width="100"
					className="circle"
				/>
				<circle
					cx="50"
					cy="50"
					r="7.5"
					className="eyes"
				/>
				<circle
					cx="30"
					cy="50"
					r="7.5"
					className="eyes"
				/>
				<circle
					cx="30"
					cy="70"
					r="7.5"
					className="eyes"
				/>
				<circle
					cx="30"
					cy="30"
					r="7.5"
					className="eyes"
				/>
				<circle
					cx="70"
					cy="30"
					r="7.5"
					className="eyes"
				/>
				<circle
					cx="70"
					cy="50"
					r="7.5"
					className="eyes"
				/>
				<circle
					cx="70"
					cy="70"
					r="7.5"
					className="eyes"
				/>
			</svg>
		)
	}
}
