import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
	footer: {
		backgroundColor: "white",
		height: "5vh",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		fontWeight: "bold"
	},
	footerEmoji: {
		fontSize: "1.2rem",
		margin: "0 1rem"
	}
}

function ColorPaletteFooter(props) {
    const { paletteName, emoji } = props;
	const { footer, footerEmoji } = props.classes;
    
	return (
		<footer className={footer}>
			{paletteName}
			<span className={footerEmoji}>{emoji}</span>
		</footer>
	);
}

export default withStyles(styles)(ColorPaletteFooter);
