import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Drawer, Button, Typography, IconButton } from '@material-ui/core/';
import { mdiChevronLeftCircle } from '@mdi/js';
import arrayMove from 'array-move';
import Icon from '@mdi/react';
import clsx from 'clsx';

import ChromeColorPickerForm from './ChromeColorPickerForm';
import DraggableColorList from './DraggableColorList';
import CreatePaletteNav from './CreatePaletteNav';
import seedColors from './SEED_COLORS';

import NewPaletteFormStyles from './styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {
	static defaultProps = { maxColors: 20 }
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newColors: seedColors[0].colors
        };

        this.createNewColor = this.createNewColor.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.saveNewPalette = this.saveNewPalette.bind(this);
		this.deleteColor = this.deleteColor.bind(this);
		this.onSortEnd = this.onSortEnd.bind(this);
		this.clearPalette = this.clearPalette.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
    };

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

    createNewColor(newColor) {
        this.setState({
            newColors: [...this.state.newColors, newColor],
			newColorName: ''
        });
    };

	handleFormChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	};

	clearPalette() {
		this.setState({ newColors: [] });
	};

	saveNewPalette(newColorPalette) {
		newColorPalette.id = newColorPalette.paletteName.toLowerCase().replace(/ /g, '-');
		newColorPalette.colors = this.state.newColors;
		newColorPalette.key = newColorPalette.id;
		this.props.savePalette(newColorPalette);
		this.props.history.push("/");
	};

	deleteColor(colorName) {
		this.setState({ 
			newColors: this.state.newColors.filter(value => value.name !== colorName)
		});
	};

	addRandomColor() {
		const allColors = this.props.palettes.map(p => p.colors).flat();
		let randNum, randomColor;
		let currColors = this.state.newColors.map(x => x.name);
		let duplicateColor = true;
		while (duplicateColor) {
			randNum = Math.floor(Math.random() * allColors.length);
			randomColor = allColors[randNum];
			if (!currColors.includes(randomColor.name)) {
				duplicateColor = false;
			};
		};
		this.setState({ newColors: [...this.state.newColors, randomColor] });
	};

	onSortEnd = ({oldIndex, newIndex}) => {
		this.setState(({newColors}) => ({ 
			newColors: arrayMove(newColors, oldIndex, newIndex) 
		}));
	};

	render() {
		const { maxColors, palettes } = this.props;
		const { drawerMain, root, drawerPaper, drawerHeader, drawerContainer, drawerButtons, btn, content, contentShift } = this.props.classes;
		const { open, newColors } = this.state;
		const fullPalette = newColors.length >= maxColors;

		return (
			<div className={root}>
				<CreatePaletteNav 
					open={open} 
					palettes={palettes}
					saveNewPalette={this.saveNewPalette}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={drawerMain}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{ paper: drawerPaper }}
				>
					<div className={drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<Icon 
								path={mdiChevronLeftCircle}
								size={1}
							/>
						</IconButton>
					</div>
                    <Divider />
					<div className={drawerContainer}>
						<Typography variant="h4" gutterBottom>
							Design Your Palette
						</Typography>
						<div className={drawerButtons}>
							<Button 
								variant="contained" 
								color="secondary"
								onClick={this.clearPalette}
								className={btn}
							>
								Clear Palette
							</Button>
							<Button 
								variant="contained" 
								color="primary"
								onClick={this.addRandomColor}
								disabled={fullPalette}
								className={btn}
							>
								Random Color
							</Button>
						</div>
						<ChromeColorPickerForm 
							fullPalette={fullPalette}
							createNewColor={this.createNewColor}
							newColors={newColors}
						/>
					</div>
				</Drawer>
				<main className={ clsx(content, { [contentShift]: open }) } >
					<div className={drawerHeader} />
                    <DraggableColorList 
						newColors={newColors}
						deleteColor={this.deleteColor}
						axis="xy"
						onSortEnd={this.onSortEnd}
						distance={10}
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(NewPaletteFormStyles, { withTheme: true })(NewPaletteForm);