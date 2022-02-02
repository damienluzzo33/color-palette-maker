import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Dialog, DialogTitle, Avatar } from '@material-ui/core';
import { List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core"
import { Check as CheckIcon, Close as CloseIcon } from "@material-ui/icons";
import { blue, red } from "@material-ui/core/colors"
import { mdiPlusCircle } from '@mdi/js';
import Icon from '@mdi/react';

import MiniPalette from './MiniPalettePreview';

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
		this.goToColorPalette = this.goToColorPalette.bind(this);
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
		const { root, nav, container, title, createReg, createMobile, allMiniPalettes} = this.props.classes;
		const { palettes } = this.props;
		const { openDeleteDialog } = this.state;
		return (
			<div className={root}>
				<div className={container}>
					<nav className={nav}>
						<h1 className={title}>ColorPalletteMaker</h1>
						<Link to="/palette/new">
							<span className={createReg}>Create Palette</span>
							<Icon 
								className={createMobile}
								path={mdiPlusCircle}
								size={2}
							/>
						</Link>
					</nav>
					<TransitionGroup className={allMiniPalettes}>
                        {palettes.map((p) => 
							<CSSTransition
								key={p.id}
								classNames="fade"
								timeout={500}
							>
								<MiniPalette 
									{...p}
									miniClick={this.goToColorPalette}
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
					<DialogTitle id="delete-dialog-title">
						Delete Color Palette?
					</DialogTitle>
					<List>
						<ListItem button onClick={this.handleDelete}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: blue[100], color: blue[600] }}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Delete</ListItemText>
						</ListItem>
						<ListItem button onClick={this.closeDialog}>
							<ListItemAvatar>
								<Avatar style={{ backgroundColor: red[100], color: red[600] }}>
									<CloseIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>Cancel</ListItemText>
						</ListItem>
					</List>
				</Dialog>
			</div>
		);
	};
}

export default withStyles(AllColorPaletteStyles)(AllColorPalettes);