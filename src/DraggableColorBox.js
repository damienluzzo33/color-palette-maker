import React from 'react';
import { withStyles } from '@material-ui/core/styles';

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
        padding: "0.5rem"
    }
}

function DraggableColorBox(props) {
    const { root } = props.classes;
    return (
        <div 
            className={root}
            style={{ backgroundColor: props.color }}
        >
            {props.colorName}
        </div>
    )
}

export default withStyles(draggableStyles)(DraggableColorBox);