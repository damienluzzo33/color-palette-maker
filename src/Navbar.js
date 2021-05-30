import React, { Component } from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	render() {
		const { changeSlider, sliderValue } = this.props;
		return (
			<header className="Navbar">
				<div className="logo">
					<a href="#" alt="color picker">
						reactcolorpicker
					</a>
				</div>
				<div className="Slider-container">
                    <span>Level: {sliderValue}</span>
					<div className="Slider">
						<Slider min={100} max={900} step={100} defaultValue={sliderValue} onChange={changeSlider} />
					</div>
				</div>
			</header>
		);
	}
}

export default Navbar;
