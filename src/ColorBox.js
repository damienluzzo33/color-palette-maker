import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import clsx from 'clsx';

import ColorBoxStyles from './styles/ColorBoxStyles';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, 
			() => {setTimeout(() => this.setState({ copied: false }), 1200);
		});
	}

	render() {
		const { copied } = this.state;
		const { name, bgColor, extraUrl, showFullPalette } = this.props;
		const { copyText, colorName, seeMore, copyBtnText, colorBox, colorBoxContent, copyOverlay, showOverlay, copyMsg, showMsg, contentContainer } = this.props.classes;
		return (
			<CopyToClipboard text={bgColor} onCopy={this.changeCopyState}>
				<div className={colorBox} style={{ background: bgColor }}>
					<div 
						className={clsx(copyOverlay, {[showOverlay]: copied})} 
						style={{ background: bgColor }} 
					/>
					<div className={clsx(copyMsg, copyText, {[showMsg]: copied})}>
						<h1>COPIED!</h1>
						<p>{bgColor}</p>
					</div>
					<div className={contentContainer}>
						<div className={colorBoxContent}>
							<span className={colorName}>{name}</span>
						</div>
						<button className={copyBtnText}>Copy</button>
					</div>
					{showFullPalette && (
						<Link to={extraUrl} onClick={(evt) => evt.stopPropagation()}>
							<span className={seeMore}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}

export default withStyles(ColorBoxStyles)(ColorBox);