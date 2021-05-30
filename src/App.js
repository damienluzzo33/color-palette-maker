import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';
import { generateColorPalette } from './chromaColorHelpers';

class App extends Component {
	render() {
		console.log(generateColorPalette(seedColors[4]));
		return (
			<div>
				<ColorPalette {...seedColors[4]} />
			</div>
		);
	}
}

export default App;
