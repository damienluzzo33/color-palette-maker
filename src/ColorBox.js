import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import './ColorBox.css';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			copied: false
		};
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(
				() =>
					this.setState({
						copied: false
					}),
				1200
			);
		});
	}

	render() {
		const { copied } = this.state;
		const { name, bgColor, extraUrl, showMore } = this.props;

		const luminance = (chroma(bgColor).luminance());
		const contrast = chroma.contrast('#fff', bgColor);
		const giveWhiteText = contrast/luminance > 18;

		return (
			<CopyToClipboard text={bgColor} onCopy={this.changeCopyState}>
				<div className="ColorBox" style={{ background: bgColor }}>
					<div className={`ColorBox-copy-overlay ${copied && 'show'}`} style={{ background: bgColor }} />
					<div className={`ColorBox-copy-msg ${copied && 'show'} ${!giveWhiteText && 'dark-msg'}`}>
						<h1>COPIED!</h1>
						<p>{bgColor}</p>
					</div>
					<div className="ColorBox-copy">
						<div className="ColorBox-content">
							<span className={ (giveWhiteText) && "light-text" } >{name}</span>
						</div>
						<button className={`ColorBox-copy-btn ${!giveWhiteText && 'dark-copy'}`}>Copy</button>
					</div>
					{ showMore && 
						<Link to={extraUrl} onClick={(evt) => evt.stopPropagation()}>
							<span className={ (giveWhiteText) ? "ColorBox-more" : "ColorBox-more dark-text" }>More</span>
						</Link> }
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
