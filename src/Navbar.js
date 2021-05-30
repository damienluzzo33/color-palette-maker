import React, { Component } from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = { format: 'hex' }
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(evt) {
        this.setState({
            format: evt.target.value
        });
        this.props.changeFormat(evt.target.value);
    }

	render() {
		const { changeSlider, sliderValue } = this.props;
        const { format } = this.state;
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
                <div className="Color-format-selector">
                    <Select value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
                    </Select>
                </div>
			</header>
		);
	}
}

export default Navbar;
