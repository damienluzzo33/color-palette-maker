import React, { Component } from 'react';
import PaletteMetaDataForm from './PaletteMetaDataForm';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar } from '@material-ui/core/';
import { Button, Typography, IconButton } from '@material-ui/core/';
import CreatePaletteNavStyles from './styles/CreatePaletteNavStyles';
import { mdiPalette } from '@mdi/js';
import Icon from '@mdi/react';

class CreatePaletteNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
            newPaletteName: "",
			showForm: false
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.toggleShowForm = this.toggleShowForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
	}

    handleFormChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	toggleShowForm() {
		this.setState({ showForm: true });
	};

	hideForm() {
		this.setState({ showForm: false });
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
							<Icon 
								path={mdiPalette}
								size={1}
							/>
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
								Back
							</Button>
						</Link>
						<Button
							className={btns}
							variant="contained" 
							color="primary" 
							onClick={this.toggleShowForm}
						>
							Save
						</Button>
					</div>
				</AppBar>
				{showForm && (
					<PaletteMetaDataForm 
						palettes={palettes}
						saveNewPalette={saveNewPalette}
						hideForm={this.hideForm}
					/>
				)}
			</div>
		);
	}
}

export default withStyles(CreatePaletteNavStyles, { withTheme: true })(CreatePaletteNav);
