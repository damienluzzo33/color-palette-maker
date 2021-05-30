import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
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
				<Navbar sliderValue={sliderValue} changeSlider={this.changeSlider} />
				{/* Navbar will go here... */}
				<div className="ColorPalette-colors">{colorBoxes}</div>
				{/* The Footer will go here... */}
			</div>
		);
	}
}

export default ColorPalette;
