import React, { Component } from 'react';
import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';
import { generateColorPalette } from './chromaColorHelpers';

class App extends Component {
	render() {
		return (
			<div>
				<ColorPalette palette={generateColorPalette(seedColors[0])} />
			</div>
		);
	}
}

export default App;
