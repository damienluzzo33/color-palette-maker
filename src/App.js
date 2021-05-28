import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';

class App extends Component {
	render() {
		return (
			<div>
				<ColorPalette {...seedColors[4]}/>
			</div>
		);
	}
}

export default App;