import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	main: {
		backgroundColor: 'purple',
		border: '3px solid blue'
	}
};

function MiniPalette(props) {
	return (
		<div className={props.classes.main}>
			<h1>Mini Palette Preview</h1>
		</div>
	);
}

export default withStyles(styles)(MiniPalette);
