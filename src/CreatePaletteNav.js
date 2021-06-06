import React, { Component } from 'react';
import PaletteMetaDataForm from './PaletteMetaDataForm';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar } from '@material-ui/core/';
import { Button, Typography, IconButton } from '@material-ui/core/';
import { Menu } from '@material-ui/icons/';

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
		justifyContent: "space-between",
		alignItems: "center"
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
	navButtons: {
		marginRight: "1rem",
		"& a": {
			textDecoration: "none"
		}
	},
	btns: {
		margin: "0 0.5rem"
	}
});

class CreatePaletteNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
            newPaletteName: "",
			showForm: false
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.toggleShowForm = this.toggleShowForm.bind(this);
	}

    handleFormChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	toggleShowForm() {
		this.setState({ showForm: true });
	};

	render() {
        const { open, saveNewPalette, handleDrawerOpen, palettes } = this.props;
		const { root, appBar, appBarShift, menuButton, hide, navButtons, btns } = this.props.classes;
        const { newPaletteName, showForm } = this.state;
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
						<Link to="/">
							<Button
								className={btns}
								variant="contained" 
								color="secondary"
							>
								Go Back
							</Button>
						</Link>
						<Button
							className={btns}
							variant="contained" 
							color="primary" 
							onClick={this.toggleShowForm}
						>
							Save Palette
						</Button>
					</div>
				</AppBar>
				{showForm && (
					<PaletteMetaDataForm 
						palettes={palettes}
						saveNewPalette={saveNewPalette}
					/>
				)}
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(CreatePaletteNav);
