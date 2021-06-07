import React from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPaletteStyles from './styles/MiniPaletteStyles';
import { Delete } from "@material-ui/icons";

function MiniPalette(props) {
    const { classes, paletteName, emoji, id, colors, miniClick } = props;
    const miniColorBoxes = colors.map((c) => (
        <div 
            className={classes.miniBox} 
            style={{backgroundColor: c.color}}
            key={c.name}
        />
    ));

	return (
		<div className={classes.root} onClick={miniClick} >
            <div className={classes.delete}>
                <Delete className={classes.deleteIcon} />
            </div>
			<div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>
                {paletteName} <span className={classes.emoji}>{emoji}</span>
            </h5>
		</div>
	);
}

export default withStyles(MiniPaletteStyles)(MiniPalette);