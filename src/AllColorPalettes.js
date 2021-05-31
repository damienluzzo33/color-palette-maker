import React, { Component } from 'react';
import MiniPalette from './MiniPalettePreview';
import { Link } from 'react-router-dom';

class AllColorPalettes extends Component {
	render() {
		const { allPalettes } = this.props;
		return (
			<div>
                <MiniPalette />
				<h1>React Colors</h1>
				{allPalettes.map((p) => (
					<p>
						<Link to={`/palette/${p.id}`}>{p.paletteName}</Link>
					</p>
				))}
			</div>
		);
	}
}

export default AllColorPalettes;
