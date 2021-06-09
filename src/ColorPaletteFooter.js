import React from 'react';
import { withStyles } from '@material-ui/styles';

import FooterStyles from './styles/FooterStyles';

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

export default withStyles(FooterStyles)(ColorPaletteFooter);