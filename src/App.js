import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import ColorPalette from './ColorPalette';
import AllColorPalettes from './AllColorPalettes';
import SingleColorPalette from './SingleColorPalette';
import NewPaletteForm from './NewPaletteForm';
import Page from './Page';

import seedColors from './SEED_COLORS';
import { generateColorPalette } from './chromaColorHelpers';
import PageNotFound from './404Error';

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
		this.setState((st) => ({palettes: st.palettes.filter((p) => p.id !== id)}), this.syncLocalStorage);
	}

	savePalette(newPalette) {
		this.setState({palettes: [ ...this.state.palettes, newPalette ]}, this.syncLocalStorage);
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
							classNames='page'
							timeout={500}
							key={location.key}
						>
							<Switch location={location}>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<Page>
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={palettes}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										<Page>
											<AllColorPalettes
												palettes={palettes}
												deletePalette={this.deletePalette}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:id"
									render={(routeProps) => (
										<Page>
											<ColorPalette
												palette={generateColorPalette(
													this.findColorPalette(routeProps.match.params.id)
												)}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:paletteId/:colorId"
									render={(routeProps) => (
										<Page>
											<SingleColorPalette
												colorId={routeProps.match.params.colorId}
												palette={generateColorPalette(
													this.findColorPalette(routeProps.match.params.paletteId)
												)}
											/>
										</Page>
									)}
								/>
								<Route
									render={(routeProps) => (
										<Page>
											<PageNotFound 
												{...routeProps}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	};
}

export default App;
