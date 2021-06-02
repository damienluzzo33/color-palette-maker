import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';
import { generateColorPalette } from './chromaColorHelpers';
import AllColorPalettes from './AllColorPalettes';
import SingleColorPalette from './SingleColorPalette';

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
					<Route 
						exact path="/" 
						render={(routeProps) => (
							<AllColorPalettes allPalettes={seedColors} {...routeProps} />
						)} 
					/>
					<Route 
						exact 
						path="/palette/:id" 
						render={(routeProps) => (
							<ColorPalette palette={generateColorPalette(this.findColorPalette(routeProps.match.params.id))} /> 
						)}
					/>
					<Route 
						exact 
						path="/palette/:paletteId/:colorId" 
						render={(routeProps) => (
							<SingleColorPalette
								colorId={routeProps.match.params.colorId}
								palette={generateColorPalette(this.findColorPalette(routeProps.match.params.paletteId))} />
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
