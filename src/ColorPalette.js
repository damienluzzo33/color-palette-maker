import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './ColorPalette.css';

class ColorPalette extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sliderValue: 500,
			format: 'hex'
		};
		this.changeSlider = this.changeSlider.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}

	changeSlider(sliderValue) {
		this.setState({ sliderValue });
	}

	changeFormat(value) {
		this.setState({
			format: value
		})
	}

	render() {
		const { sliderValue, format } = this.state;
		const { colors, emoji, paletteName } = this.props.palette;
		const colorBoxes = colors[sliderValue].map((c) => <ColorBox bgColor={c[format]} name={c.name} key={c.id}/>);

		return (
			<div className="ColorPalette">
				<Navbar sliderValue={sliderValue} changeSlider={this.changeSlider} changeFormat={this.changeFormat}/>
				<div className="ColorPalette-colors">{colorBoxes}</div>
				<footer className="ColorPalette-footer">
					{paletteName}
					<span className="emoji">
						{emoji}
					</span>
				</footer>
			</div>
		);
	}
}

export default ColorPalette;
