import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
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
		const { name, bgColor } = this.props;
		return (
			<CopyToClipboard text={bgColor} onCopy={this.changeCopyState}>
				<div className="ColorBox" style={{ background: bgColor }}>
					<div className={`ColorBox-copy-overlay ${copied && 'show'}`} style={{ background: bgColor }} />
					<div className={`ColorBox-copy-msg ${copied && 'show'}`}>
						<h1>COPIED!</h1>
						<p>{bgColor}</p>
					</div>
					<div className="ColorBox-copy">
						<div className="ColorBox-content">
							<span>{name}</span>
						</div>
						<button className="ColorBox-copy-btn">Copy</button>
					</div>
					<Link to="/" onClick={(evt) => evt.stopPropagation()}>
						<span className="ColorBox-more">More</span>
					</Link>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
