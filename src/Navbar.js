import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/styles';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

const NavbarStyles = {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
        width: "100%"
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "22px",
        backgroundColor: "#eceff1",
        fontFamily: "Roboto",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
        }
    },
    navbarSlider: {
        width: "350px",
        margin: "0 10px",
        display: "inline-block"
    },
	ColorFormatSelector: {
        marginRight: "1rem",
        marginLeft: "auto"
    }
	// ,
    // rcSliderTrack: {
    //     backgroundColor: "transparent"
    // },
    // rcSliderRail: {
    //     height: "8px"
    // },
    // rcSliderHandle: {
    //     backgroundColor: "green",
    //     outline: "none",
    //     border: "2px solid green",
    //     boxShadow: "none",
    //     width: "12px",
    //     height: "12px",
    //     top: "8px",
    //     "&:active": {
    //         backgroundColor: "green",
    //         outline: "none",
    //         border: "2px solid green",
    //         boxShadow: "none",
    //         width: "12px",
    //         height: "12px",
    //         top: "8px"
    //     },
    //     "&:hover": {
    //         backgroundColor: "green",
    //         outline: "none",
    //         border: "2px solid green",
    //         boxShadow: "none",
    //         width: "12px",
    //         height: "12px",
    //         top: "8px"
    //     },
    //     "&:focus": {
    //         backgroundColor: "green",
    //         outline: "none",
    //         border: "2px solid green",
    //         boxShadow: "none",
    //         width: "12px",
    //         height: "12px",
    //         top: "8px"
    //     }
    // }
}

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex', open: false };
		this.handleFormatChange = this.handleFormatChange.bind(this);
		this.closeSnackbarMsg = this.closeSnackbarMsg.bind(this);
	}

	handleFormatChange(evt) {
		this.setState({
			format: evt.target.value,
			open: true
		});
		this.props.changeFormat(evt.target.value);
	}

	closeSnackbarMsg() {
		this.setState({
			open: false
		});
	}

	render() {
		const { changeSlider, sliderValue, allPaletteColors } = this.props;
		const { Navbar, logo, navbarSlider, rcSliderTrack, rcSliderRail, rcSliderHandle, ColorFormatSelector } = this.props.classes;
		const { format, open } = this.state;

		return (
			<header className={Navbar}>
				<div className={logo}>
					<Link to="/" alt="react color picker">
						ReactColorPicker
					</Link>
				</div>
				{allPaletteColors && (
					<div>
						<span>Level: {sliderValue}</span>
						<div className={navbarSlider}>
							<Slider min={100} max={900} step={100} defaultValue={sliderValue} onChange={changeSlider} />
						</div>
					</div>
				)}
				<div className={ColorFormatSelector}>
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					open={open}
					autoHideDuration={3000}
					message={<span>Successfully Changed Format To {format.toUpperCase()}</span>}
					ContentProps={{ 'aria-describedby': 'message-id' }}
					onClose={this.closeSnackbarMsg}
					action={[
						<IconButton onClick={this.closeSnackbarMsg} color="inherit" key="close" aria-label="close">
							<CloseIcon />
						</IconButton>
					]}
				/>
			</header>
		);
	}
}

export default withStyles(NavbarStyles)(Navbar);
