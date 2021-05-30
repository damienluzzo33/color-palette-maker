import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';

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
        })
    }

	render() {
		const { changeSlider, sliderValue } = this.props;
		const { format } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/" alt="react color picker">
						ReactColorPicker
					</Link>
				</div>
				<div className="Slider-container">
					<span>Level: {sliderValue}</span>
					<div className="Slider">
						<Slider min={100} max={900} step={100} defaultValue={sliderValue} onChange={changeSlider} />
					</div>
				</div>
				<div className="Color-format-selector">
					<Select value={format} onChange={this.handleFormatChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
					open={this.state.open}
					autoHideDuration={3000}
					message={<span>Successfully Changed Format To {format.toUpperCase()}</span>}
					ContentProps={{ "aria-describedby": 'message-id' }}
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

export default Navbar;
