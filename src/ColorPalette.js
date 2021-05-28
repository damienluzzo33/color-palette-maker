import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './ColorPalette.css';

class ColorPalette extends Component {
	render() {
        const colorBoxes = this.props.colors.map(color => (
            <ColorBox background={color.color} name={color.name} />
        ));
		return (
			<div className="ColorPalette">
				{/* Navbar will go here... */}
				<div className="ColorPalette-colors">
                    {colorBoxes}
                </div>
				{/* The Footer will go here... */}
			</div>
		);
	}
}

export default ColorPalette;
