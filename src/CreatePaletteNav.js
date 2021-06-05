import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { CssBaseline, AppBar, Toolbar } from '@material-ui/core/';
import { Button, Typography, IconButton } from '@material-ui/core/';
import { Menu } from '@material-ui/icons/';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';



class CreatePaletteNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
            newPaletteName: ""
        };
        this.handleFormChange = this.handleFormChange.bind(this);
	}

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
            this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
        );
    }

    handleFormChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	render() {
        const { classes, open, saveNewPalette, handleDrawerOpen } = this.props;
        const { newPaletteName } = this.state;
		return (
			<div>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6" noWrap>
							Persistent drawer
						</Typography>
						<ValidatorForm onSubmit={() => saveNewPalette(newPaletteName)}>
							<TextValidator
								label="Palette Name"
								onChange={this.handleFormChange}
								value={newPaletteName}
								name="newPaletteName"
								validators={[ 'required', 'isPaletteNameUnique' ]}
								errorMessages={[ 'Enter a palette name', 'Name already used' ]}
							/>
							<Link to="/">
								<Button variant="contained" color="secondary">
									Go Back
								</Button>
							</Link>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</ValidatorForm>
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

export default CreatePaletteNav;
