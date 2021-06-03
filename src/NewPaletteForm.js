import React, { Component } from 'react';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import { CssBaseline, AppBar, Toolbar, Divider, IconButton } from '@material-ui/core/';
import { Drawer, Button, Typography } from '@material-ui/core/';
import { Menu, ChevronLeft } from '@material-ui/icons/';
import { ChromePicker } from 'react-color';
import DraggableColorBox from './DraggableColorBox';

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
    constructor(props) {
        super(props)
    
        this.state = {
            open: true,
            currentColor: "#1e8feb",
            newColors: ["red", "purple"]
        }
        this.handleColorUpdate = this.handleColorUpdate.bind(this);
        this.createNewColor = this.createNewColor.bind(this);
    }

	handleDrawerOpen = () => {
		this.setState({
			open: true
		});
	};

	handleDrawerClose = () => {
		this.setState({
			open: false
		});
	};

    handleColorUpdate(newColor) {
        this.setState({
            currentColor: newColor.hex
        })
    };

    createNewColor() {
        this.setState({
            newColors: [...this.state.newColors, this.state.currentColor]
        });
    }

	render() {
		const { classes } = this.props;
		const { open, currentColor, newColors } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					className={clsx(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={this.handleDrawerOpen}
							edge="start"
							className={clsx(classes.menuButton, open && classes.hide)}
						>
							<Menu />
						</IconButton>
						<Typography variant="h6" noWrap>
							Persistent drawer
						</Typography>
					</Toolbar>
				</AppBar>
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
                        <Button variant="contained" color="secondary">
                            Clear Palette
                        </Button>
                        <Button variant="contained" color="primary">
                            Random Color
                        </Button>
                    </div>
                    <ChromePicker 
                        color={currentColor} 
                        onChangeComplete={this.handleColorUpdate} 
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        style={{ backgroundColor: currentColor }}
                        onClick={this.createNewColor}
                    >
                        Add Color
                    </Button>
				</Drawer>
				<main
					className={clsx(classes.content, {
						[classes.contentShift]: open
					})}
				>
					<div className={classes.drawerHeader} />
                    {newColors.map(c => (
                        <DraggableColorBox color={c} />
                    ))}
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
