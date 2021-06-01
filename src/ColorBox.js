import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';
import './ColorBox.css';

const styles = {
	colorBox: {
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
	},
	colorBoxContent: {
		position: "absolute",
		padding: "10px",
		width: "100%",
		left: "0px",
		bottom: "0px",
		color: "black",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "12px"
	},
	copyOverlay: {
		opacity: "0",
		zIndex: "0",
		width: "100%",
		height: "100%",
		transform: "scale(0.1)",
		transition: "transform 0.6s ease-in-out"
	},
	showOverlay: {
		opacity: "1",
		zIndex: "10",
		transform: "scale(50)",
		position: "absolute"
	},
	copyMsg: {
		position: "fixed",
		left: "0",
		right: "0",
		top: "0",
		bottom: "0",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "4rem",
		transform: "scale(0.1)",
		opacity: "0",
		color: "white",
		flexDirection: "column",
		"& h1": {
			fontWeight: "400",
			textShadow: "1px 2px black",
			background: "rgba(255,255,255,0.2)",
			width: "100%",
			textAlign: "center",
			marginBottom: "0",
			padding: "1rem",
			textTransform: "uppercase"
		},
		"& p": {
			fontSize: "2.5rem",
			fontWeight: "100"
		}
	},
	showMsg: {
		opacity: '1',
		zIndex: '25',
		transform: 'scale(1)',
		transition: 'all 0.6s ease-in-out',
		transitionDelay: '0.4s'
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
		const { copyText, colorName, seeMore, copyBtnText, colorBox, colorBoxContent, copyOverlay, showOverlay, copyMsg, showMsg } = this.props.classes;
		return (
			<CopyToClipboard text={bgColor} onCopy={this.changeCopyState}>
				<div className={colorBox} style={{ background: bgColor }}>
					<div className={`${copyOverlay} ${copied && showOverlay}`} style={{ background: bgColor }} />
					<div className={`${copyMsg} ${copied && showMsg} ${copyText}`}>
						<h1>COPIED!</h1>
						<p>{bgColor}</p>
					</div>
					<div>
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

export default withStyles(styles)(ColorBox);
