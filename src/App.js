import React from 'react';
import Dice from "./Dice";
import './App.css';

function App() {
	return (
		<div className="App">
			<div>
				<Dice eyes={1} width={50} />
				<Dice eyes={1} width={100} />
				<Dice eyes={1} width={200} />
				<Dice eyes={1} width={400} />
			</div>
		</div>
	);
}

export default App;
