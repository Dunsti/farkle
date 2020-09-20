import React from 'react';
import Game from "./Game/Game";
import './App.css';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<h1>Farkle</h1>
				<Game />
			</div>
		);
	}
}
