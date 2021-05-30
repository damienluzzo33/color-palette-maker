import chroma from 'chroma-js';
const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

function generateColorPalette(seedColors) {
	let newColorPalette = {
		paletteName: seedColors.paletteName,
		id: seedColors.id,
		emoji: seedColors.emoji,
		colors: {}
	};
	for (let level of levels) {
		newColorPalette.colors[level] = [];
	}
	for (let color of seedColors.colors) {
		let colorScale = generateColorScale(color.color, 10).reverse();
		for (let index in colorScale) {
			newColorPalette.colors[levels[index]].push({
				name: `${color.name} ${levels[index]}`,
				id: `${color.name} ${levels[index]}`.toLowerCase().replace(/ /g, '-'),
				hex: colorScale[index],
				rgb: chroma(colorScale[index]).css(),
                rgba: chroma(colorScale[index]).css().replace("rgb","rgba").replace(')', ',1.0)')
			});
		}
	}
    return newColorPalette;
}

function getColorRange(hexValue) {
	const lightColor = '#ffffff';
	return [ chroma(hexValue).darken(1.4).hex(), hexValue, lightColor ];
}

function generateColorScale(hexValue, numberOfColors) {
	return chroma.scale(getColorRange(hexValue)).mode('lab').colors(numberOfColors);
}

export { generateColorPalette };
