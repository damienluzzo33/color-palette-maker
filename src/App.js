import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { generateColorPalette } from './chromaColorHelpers';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ColorPalette from './ColorPalette';
import seedColors from './SEED_COLORS';
import AllColorPalettes from './AllColorPalettes';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		let savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettes: savedPalettes || seedColors };
		this.savePalette = this.savePalette.bind(this);
		this.findColorPalette = this.findColorPalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}

	findColorPalette(id) {
		return this.state.palettes.find((paletteSelection) => paletteSelection.id === id);
	}

	deletePalette(id) {
		this.setState(
			(st) => ({
				palettes: st.palettes.filter((p) => p.id !== id)
			}),
			this.syncLocalStorage
		);
	}

	savePalette(newPalette) {
		this.setState(
			{
				palettes: [ ...this.state.palettes, newPalette ]
			},
			this.syncLocalStorage
		);
	}

	syncLocalStorage() {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes));
	}

	render() {
		const { palettes } = this.state;
		return (
			<Route
				render={({location}) => (
					<TransitionGroup>
						<CSSTransition
							classNames='fade'
							timeout={500}
							key={location.key}
						>
							<Switch location={location}>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<div className="page">
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={palettes}
												{...routeProps}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										<div className="page">
											<AllColorPalettes
												palettes={palettes}
												deletePalette={this.deletePalette}
												{...routeProps}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path="/palette/:id"
									render={(routeProps) => (
										<div className="page">
											<ColorPalette
												palette={generateColorPalette(
													this.findColorPalette(routeProps.match.params.id)
												)}
											/>
										</div>
									)}
								/>
								<Route
									exact
									path="/palette/:paletteId/:colorId"
									render={(routeProps) => (
										<div className="page">
											<SingleColorPalette
												colorId={routeProps.match.params.colorId}
												palette={generateColorPalette(
													this.findColorPalette(routeProps.match.params.paletteId)
												)}
											/>
										</div>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
