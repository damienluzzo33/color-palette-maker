import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generateColorPalette } from './chromaColorHelpers';

import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';
import AllColorPalettes from './AllColorPalettes';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			palettes: seedColors
		};

		this.savePalette = this.savePalette.bind(this);
		this.findColorPalette = this.findColorPalette.bind(this);
	};
	

	findColorPalette(id) {
		return this.state.palettes.find((paletteSelection) => paletteSelection.id === id);
	};

	savePalette(newPalette) {
		this.setState({
			palettes: [...this.state.palettes, newPalette]
		});
	};

	render() {
		const { palettes } = this.state;
		return (
			<div>
				<Switch>
					<Route 
						exact 
						path="/palette/new" 
						render={(routeProps) => 
							<NewPaletteForm 
								savePalette={this.savePalette}
								{...routeProps}
							/>
						} 
					/>
					<Route
						exact
						path="/"
						render={(routeProps) => <AllColorPalettes palettes={palettes} {...routeProps} />}
					/>
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<ColorPalette
								palette={generateColorPalette(this.findColorPalette(routeProps.match.params.id))}
							/>
						)}
					/>
					<Route
						exact
						path="/palette/:paletteId/:colorId"
						render={(routeProps) => (
							<SingleColorPalette
								colorId={routeProps.match.params.colorId}
								palette={generateColorPalette(this.findColorPalette(routeProps.match.params.paletteId))}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	};
};

export default App;
