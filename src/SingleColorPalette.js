import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';

import Navbar from './Navbar';
import ColorBox from './ColorBox';
import ColorPaletteFooter from './ColorPaletteFooter';

import ColorPaletteStyles from './styles/ColorPaletteStyles';

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.collectShades(this.props.palette, this.props.colorId);
		this.state = { format: 'hex' };
		this.changeFormat = this.changeFormat.bind(this);
	};

	collectShades(palette, colorId) {
		let shadeArray = [], allColors = palette.colors;
		for (let key in allColors) {
			shadeArray = shadeArray.concat(allColors[key].filter((color) => 
				color.id === colorId
			));
		};
		return shadeArray.slice(1);
	};

	changeFormat(value) {
		this.setState({ format: value });
	};

	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const { ColorPalette, paletteColors, goBack } = this.props.classes;

		let shadeBoxes = this._shades.map((c) => (
			<ColorBox 
				name={c.name} 
				key={c.name} 
				bgColor={c[format]} 
				showFullPalette={false} 
			/>
		));

		return (
			<div className={ColorPalette}>
				<Navbar 
					changeFormat={this.changeFormat} 
					allPaletteColors={false} 
				/>
				<div className={paletteColors}>
					{shadeBoxes}
					<div className={goBack}>
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                    </div>
				</div>
				<ColorPaletteFooter 
					paletteName={paletteName} 
					emoji={emoji} 
				/>
			</div>
		);
	}
}

export default withStyles(ColorPaletteStyles)(SingleColorPalette);