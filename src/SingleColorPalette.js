import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ColorBox from './ColorBox';
import ColorPaletteFooter from './ColorPaletteFooter';
import { withStyles } from '@material-ui/styles';
import Navbar from './Navbar';

const styles = {
	ColorPalette: {
		height: "100vh",
		display: "flex",
		flexDirection: "column"
	},
	paletteColors: {
		height: "90%"
	},
	goBack: {
		height: '50%',
		width: '20%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		opacity: "1",
		backgroundColor: "black",
		"& a": {
			width: "100px",
			height: "30px",
			position: "absolute",
			display: "inline-block",
			top: "50%",
			left: "50%",
			marginLeft: "-50px",
			marginTop: "-15px",
			textAlign: "center",
			outline: "none",
			border: "none",
			borderRadius: "10px",
			background: "rgba(255,255,255,0.3)",
			fontSize: "1rem",
			lineHeight: "30px",
			color: "white",
			textTransform: "uppercase",
			cursor: "pointer",
			textDecoration: "none"
		}
	}
}

class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.collectShades(this.props.palette, this.props.colorId);
		this.state = {
			format: 'hex'
		};
		this.changeFormat = this.changeFormat.bind(this);
	}

	collectShades(palette, colorId) {
		let shadeArray = [];
		let allColors = palette.colors;

		for (let key in allColors) {
			shadeArray = shadeArray.concat(allColors[key].filter((color) => color.id === colorId));
		}
		return shadeArray.slice(1);
	}

	changeFormat(value) {
		this.setState({
			format: value
		});
	}

	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const { ColorPalette, paletteColors, goBack } = this.props.classes;

		let shadeBoxes = this._shades.map((c) => (
			<ColorBox name={c.name} key={c.name} bgColor={c[format]} showFullPalette={false} />
		));
		return (
			<div className={ColorPalette}>
				<Navbar changeFormat={this.changeFormat} allPaletteColors={false} />
				<div className={paletteColors}>
					{shadeBoxes}
					<div className={goBack}>
                        <Link to={`/palette/${id}`}>GO BACK</Link>
                    </div>
				</div>
				<ColorPaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}

export default withStyles(styles)(SingleColorPalette);
