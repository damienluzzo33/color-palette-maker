import React from 'react';

function ColorPaletteFooter(props) {
    const { paletteName, emoji } = props;
    
	return (
		<footer className="ColorPalette-footer">
			{paletteName}
			<span className="emoji">{emoji}</span>
		</footer>
	);
}

export default ColorPaletteFooter;
