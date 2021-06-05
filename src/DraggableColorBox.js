import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement } from 'react-sortable-hoc'
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const draggableStyles = {
    root: {
        height:'25%',
        width: '20%',
		margin: '0 auto',
		display: 'inline-block',
		position: 'relative',
		cursor: 'pointer',
		marginBottom: '-3.5px',
        color: "white",
        textAlign: "center",
        padding: "0.5rem",
        "&:hover": {
            "& svg": {
                color: "white",
                transform: "scale(1.5)"
            }
        }
    },
    boxContent: {
        position: "absolute",
		padding: "10px",
		width: "100%",
		left: "0px",
		bottom: "0px",
		color: "rgba(0,0,0,0.5)",
		letterSpacing: "1px",
		textTransform: "uppercase",
		fontSize: "14px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.5s ease-in-out",
        fontSize: "20px"
    }
}

const DraggableColorBox = SortableElement((props) => {
    const { root, boxContent, deleteIcon } = props.classes;
    const { deleteColor, name, color } = props;
    return (
        <div 
            className={root}
            style={{ backgroundColor: color }}
        >
            <div className={boxContent}>
                <span>{name}</span>
                <DeleteForeverRoundedIcon className={deleteIcon} onClick={deleteColor}/>
            </div>
        </div>
    )
})

export default withStyles(draggableStyles)(DraggableColorBox);