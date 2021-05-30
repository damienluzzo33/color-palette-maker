import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './ColorPalette.css';

class ColorPalette extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sliderValue: 500
		};
		this.changeSlider = this.changeSlider.bind(this);
	}

	changeSlider(sliderValue) {
		this.setState({ sliderValue });
	}

	render() {
		const { sliderValue } = this.state;
		const { colors } = this.props.palette;
		const colorBoxes = colors[sliderValue].map((c) => <ColorBox bgColor={c.hex} name={c.name} />);

		return (
			<div className="ColorPalette">
				<div className="Slider">
					<Slider min={100} max={900} step={100} defaultValue={sliderValue} onChange={this.changeSlider} />
				</div>
				{/* Navbar will go here... */}
				<div className="ColorPalette-colors">{colorBoxes}</div>
				{/* The Footer will go here... */}
			</div>
		);
	}
}

export default ColorPalette;
