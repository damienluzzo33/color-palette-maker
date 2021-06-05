import React, { Component } from 'react';
import CreatePaletteNav from './CreatePaletteNav';
import ChromeColorPickerForm from './ChromeColorPickerForm';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core/';
import { Drawer, Button, Typography, IconButton } from '@material-ui/core/';
import { ChevronLeft } from '@material-ui/icons/';
import DraggableColorList from './DraggableColorList';
import { arrayMove } from 'react-sortable-hoc';


const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
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
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
        height: "calc(100vh - 64px)",
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	}
});

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

	saveNewPalette(newPaletteName) {
		const newColorPalette = {
			paletteName: newPaletteName,
			id: newPaletteName.toLowerCase().replace(/ /g, '-'),
			colors: this.state.newColors
		};
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
		const { open, currentColor, newColors, newColorName } = this.state;
		const fullPalette = newColors.length >= maxColors;

		return (
			<div className={classes.root}>
				<CreatePaletteNav 
					open={open} 
					classes={classes}
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
                            <ChevronLeft /> 
						</IconButton>
					</div>
                    <Divider />
                    <Typography variant="h4">
                        Design Your Palette
                    </Typography>
                    <div>
                        <Button 
							variant="contained" 
							color="secondary"
							onClick={this.clearPalette}
						>
                            Clear Palette
                        </Button>
                        <Button 
							variant="contained" 
							color="primary"
							onClick={this.addRandomColor}
							disabled={fullPalette}
						>
                            Random Color
                        </Button>
                    </div>
					<ChromeColorPickerForm 
						fullPalette={fullPalette}
						createNewColor={this.createNewColor}
						newColors={newColors}
					/>
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

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
