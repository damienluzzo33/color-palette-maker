import React, { Component } from 'react';
import './ColorBox.css';

class ColorBox extends Component {
	render() {
        const { name, background } = this.props;
		return (
			<div className="ColorBox" style={{ background }}>
                <div className="ColorBox-copy">
                    <div className="ColorBox-content">
                        <span>{name}</span>
                    </div>
                    <button className="ColorBox-copy-btn">Copy</button>
                </div>
                <span className="ColorBox-more">More</span>
			</div>
		);
	}
}

export default ColorBox;
