import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
	ColorBox: {
		height: props => props.showFullPalette ? '25%' : '50%',
		width: '20%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
		"&:hover button": {
			opacity: "1",
			transition: "0.5s"
		}
	},
	copyText: {
		color: (props) =>
			chroma.contrast('#fff', props.bgColor) / chroma(props.bgColor).luminance() >= 18 ? 'white' : 'black'
	},
	colorName: {
		color: (props) =>
			chroma.contrast('#fff', props.bgColor) / chroma(props.bgColor).luminance() >= 18 ? 'white' : 'black'
	},
	copyBtnText: {
		color: (props) =>
			chroma.contrast('#fff', props.bgColor) / chroma(props.bgColor).luminance() >= 18 ? 'white' : 'rgba(0,0,0,0.6)',
		width: "100px",
		height: "30px",
		position: "absolute",
		display: "inline-block",
		top: "50%",
		left: "50%",
		marginLeft: "-50px",
		marginTop: "-15px",
		textAlign: "center",
		outline: "none",
		border: "none",
		borderRadius: "10px",
		background: "rgba(255,255,255,0.3)",
		fontSize: "1rem",
		lineHeight: "30px",
		textTransform: "uppercase",
		cursor: "pointer",
		textDecoration: "none",
		opacity: "0"
	},
	seeMore: {
		color: (props) =>
			chroma.contrast('#fff', props.bgColor) / chroma(props.bgColor).luminance() >= 18 ? 'white' : 'rgba(0,0,0,0.6)',
		background: 'rgba(255,255,255,0.3)',
		position: 'absolute',
		border: 'none',
		right: '0px',
		bottom: '0px',
		width: '60px',
		height: '30px',
		textAlign: 'center',
		lineHeight: '30px',
		textTransform: 'uppercase'
	}
};

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
		const { name, bgColor, extraUrl, showFullPalette } = this.props;
		const { copyText, colorName, seeMore, copyBtnText, ColorBox } = this.props.classes;
		return (
			<CopyToClipboard text={bgColor} onCopy={this.changeCopyState}>
				<div className={ColorBox} style={{ background: bgColor }}>
					<div className={`ColorBox-copy-overlay ${copied && 'show'}`} style={{ background: bgColor }} />
					<div className={`ColorBox-copy-msg ${copied && 'show'} ${copyText}`}>
						<h1>COPIED!</h1>
						<p>{bgColor}</p>
					</div>
					<div className="ColorBox-copy">
						<div className="ColorBox-content">
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

export default withStyles(styles)(ColorBox);
