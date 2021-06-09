import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

import DraggableColorBoxStyles from './styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement((props) => {
	const { root, boxContent, deleteIcon } = props.classes;
	const { deleteColor, name, color } = props;
	return (
		<div className={root} style={{ backgroundColor: color }}>
			<div className={boxContent}>
				<span>{name}</span>
				<DeleteForeverRoundedIcon 
                    className={deleteIcon} 
                    onClick={deleteColor} 
                />
			</div>
		</div>
	);
});

export default withStyles(DraggableColorBoxStyles)(DraggableColorBox);
