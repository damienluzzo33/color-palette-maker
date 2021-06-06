import React, { Component } from 'react';
import CreatePaletteNav from './CreatePaletteNav';
import ChromeColorPickerForm from './ChromeColorPickerForm';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Divider, Drawer, Button, Typography, IconButton } from '@material-ui/core/';
import { mdiChevronLeftCircle } from '@mdi/js';
import Icon from '@mdi/react';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';
import NewPaletteFormStyles from './styles/NewPaletteFormStyles';

class NewPaletteForm extends Component {
	static defaultProps = {
		maxColors: 20
	}
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            newColors: this.props.palettes[0].colors
        };
        
        this.createNewColor = this.createNewColor.bind(this);
		this.handleFormChange = this.handleFormChange.bind(this);
		this.saveNewPalette = this.saveNewPalette.bind(this);
		this.deleteColor = this.deleteColor.bind(this);
		this.onSortEnd = this.onSortEnd.bind(this);
		this.clearPalette = this.clearPalette.bind(this);
		this.addRandomColor = this.addRandomColor.bind(this);
    }

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
		this.props.savePalette(newColorPalette);
		this.props.history.push("/");
	};

	deleteColor(colorName) {
		this.setState({ newColors: this.state.newColors.filter(value => 
			value.name !== colorName
		)});
	};

	addRandomColor() {
		const allColors = this.props.palettes.map(p => p.colors).flat();
		let randNum = Math.floor(Math.random() * allColors.length);
		const randomColor = allColors[randNum];
		this.setState({
			newColors: [...this.state.newColors, randomColor]
		});
	};

	onSortEnd = ({oldIndex, newIndex}) => {
		this.setState(({newColors}) => ({ 
			newColors: arrayMove(newColors, oldIndex, newIndex) 
		}));
	};

	render() {
		const { classes, maxColors, palettes } = this.props;
		const { open, newColors } = this.state;
		const fullPalette = newColors.length >= maxColors;

		return (
			<div className={classes.root}>
				<CreatePaletteNav 
					open={open} 
					palettes={palettes}
					saveNewPalette={this.saveNewPalette}
					handleDrawerOpen={this.handleDrawerOpen}
				/>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<Icon 
								path={mdiChevronLeftCircle}
								size={1}
							/>
						</IconButton>
					</div>
                    <Divider />
					<div className={classes.drawerContainer}>
						<Typography variant="h4" gutterBottom>
							Design Your Palette
						</Typography>
						<div className={classes.drawerButtons}>
							<Button 
								variant="contained" 
								color="secondary"
								onClick={this.clearPalette}
								className={classes.btn}
							>
								Clear Palette
							</Button>
							<Button 
								variant="contained" 
								color="primary"
								onClick={this.addRandomColor}
								disabled={fullPalette}
								className={classes.btn}
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
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
                    <DraggableColorList 
						newColors={newColors}
						deleteColor={this.deleteColor}
						axis="xy"
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(NewPaletteFormStyles, { withTheme: true })(NewPaletteForm);
