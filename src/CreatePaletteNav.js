import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar } from '@material-ui/core/';
import { Button, Typography, IconButton } from '@material-ui/core/';
import { Menu } from '@material-ui/icons/';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: "flex"
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		flexDirection: "row",
		justifyContent: "space-between"
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	hide: {
		display: 'none'
	},
	navButtons: {}
});

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
        const { open, saveNewPalette, handleDrawerOpen } = this.props;
		const { root, appBar, appBarShift, menuButton, hide, navButtons } = this.props.classes;
        const { newPaletteName } = this.state;
		return (
			<div className={root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={clsx(appBar, {
						[appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={clsx(menuButton, open && hide)}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6" noWrap>
							Create A Palette
						</Typography>
					</Toolbar>
					<div className={navButtons}>
						<ValidatorForm onSubmit={() => saveNewPalette(newPaletteName)}>
							<TextValidator
								label="Palette Name"
								onChange={this.handleFormChange}
								value={newPaletteName}
								name="newPaletteName"
								validators={[ 'required', 'isPaletteNameUnique' ]}
								errorMessages={[ 'Enter a palette name', 'Name already used' ]}
							/>
							<Button variant="contained" color="primary" type="submit">
								Save Palette
							</Button>
						</ValidatorForm>
						<Link to="/">
							<Button variant="contained" color="secondary">
								Go Back
							</Button>
						</Link>
					</div>
				</AppBar>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(CreatePaletteNav);
