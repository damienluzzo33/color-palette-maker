import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';
import { generateColorPalette } from './chromaColorHelpers';

class App extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" render={() => <h1>PALETTE LIST HERE</h1>} />
					<Route exact path="/palette/:id" render={() => <h1>SOME SPECIFIC PALETTE</h1>} />
				</Switch>
				{/* <div>
					<ColorPalette palette={generateColorPalette(seedColors[0])} />
				</div> */}
			</div>
		);
	}
}

export default App;
