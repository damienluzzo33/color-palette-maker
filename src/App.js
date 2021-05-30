import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';
import { generateColorPalette } from './chromaColorHelpers';

class App extends Component {
	findColorPalette(id) {
		return seedColors.find(
			paletteSelection => paletteSelection.id === id
		);
	}

	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" render={() => <h1>PALETTE LIST HERE</h1>} />
					<Route 
						exact 
						path="/palette/:id" 
						render={(routeProps) => (
							<ColorPalette palette={generateColorPalette(
								this.findColorPalette(routeProps.match.params.id)
							)} /> 
						)}
					/>
				</Switch>
				{/* <div>
					<ColorPalette palette={generateColorPalette(seedColors[0])} />
				</div> */}
			</div>
		);
	}
}

export default App;
