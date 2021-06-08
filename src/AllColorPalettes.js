import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalettePreview';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckIcon from "@material-ui/icons/Check"
import CloseIcon from "@material-ui/icons/Close"
import Avatar from '@material-ui/core/Avatar';
import blue from "@material-ui/core/colors/blue"
import red from "@material-ui/core/colors/red"
import Icon from '@mdi/react';
import { mdiPlusCircle } from '@mdi/js';
import AllColorPaletteStyles from './styles/AllColorPaletteStyles';

class AllColorPalettes extends Component {
	constructor(props) {
		super(props);
		this.state = { 
			openDeleteDialog: false,
			deletingId: ""
		};
		this.openDialog = this.openDialog.bind(this);
		this.closeDialog = this.closeDialog.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
	}

	openDialog(id) {
		this.setState({
			openDeleteDialog: true,
			deletingId: id
		});
	};

	closeDialog() {
		this.setState({
			openDeleteDialog: false,
			deletingId: ""
		});
	};
	
    goToColorPalette(id) {
        this.props.history.push(`/palette/${id}`);
    };

	handleDelete() {
		this.props.deletePalette(this.state.deletingId);
		this.closeDialog();
	};
    
	render() {
		const { palettes, classes, deletePalette } = this.props;
		const { openDeleteDialog, deletingId } = this.state;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>ReactColorPicker</h1>
						<Link to="/palette/new">
							<span className={classes.createReg}>
								Create Palette
							</span>
							<Icon 
								className={classes.createMobile}
								path={mdiPlusCircle}
								size={2}
							/>
						</Link>
					</nav>
					<TransitionGroup className={classes.palettes}>
                        {palettes.map((p) => 
							<CSSTransition
								key={p.id}
								classNames="fade"
								timeout={500}
							>
								<MiniPalette 
									{...p}
									miniClick={() => 
										this.goToColorPalette(p.id)
									}
									key={p.id}
									openDialog={this.openDialog}
								/>
							</CSSTransition>
                        )}
					</TransitionGroup>
				</div>
				<Dialog
					open={openDeleteDialog}
					aria-labelledby="delete-dialog-title"
					onClose={this.closeDialog}
				>
					<DialogTitle
						id="delete-dialog-title"
					>
						Delete Color Palette?</DialogTitle>
					<List>
						<ListItem 
							button
							onClick={this.handleDelete}
						>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor: blue[100],
										color: blue[600]
									}}
								>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>
								Delete
							</ListItemText>
						</ListItem>
						<ListItem 
							button
							onClick={this.closeDialog}
						>
							<ListItemAvatar>
								<Avatar
									style={{
										backgroundColor: red[100],
										color: red[600]
									}}
								>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>
								Cancel
							</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	}
}

export default withStyles(AllColorPaletteStyles)(AllColorPalettes);
