import React from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPaletteStyles from './styles/MiniPaletteStyles';

function MiniPalette(props) {
    const { classes, paletteName, emoji, id, colors, miniClick } = props;
    const miniColorBoxes = colors.map((c) => (
        <div className={classes.miniBox} style={{backgroundColor: c.color}} key={c.id}></div>
    ));

	return (
		<div className={classes.root} key={id} onClick={miniClick}>
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
