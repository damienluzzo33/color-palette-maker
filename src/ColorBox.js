import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';

class ColorBox extends Component {
	render() {
        const { name, background } = this.props;
		return (
            <CopyToClipboard text={ background }>
			<div className="ColorBox" style={{ background }}>
                <div className="ColorBox-copy">
                    <div className="ColorBox-content">
                        <span>{name}</span>
                    </div>
                    <button className="ColorBox-copy-btn">Copy</button>
                </div>
                <span className="ColorBox-more">More</span>
			</div>
            </CopyToClipboard>
		);
	}
}

export default ColorBox;
