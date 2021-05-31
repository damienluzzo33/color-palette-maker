import React, { Component } from 'react';
import ColorBox from './ColorBox';
import ColorPaletteFooter from './ColorPaletteFooter';
import Navbar from './Navbar';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.collectShades(this.props.palette, this.props.colorId);
        this.state = {
            format: "hex"
        };
        this.changeFormat = this.changeFormat.bind(this);
    }

    collectShades(palette, colorId) {
        let shadeArray = [];
        let allColors = palette.colors;

        for (let key in allColors) {
            shadeArray = shadeArray.concat(
                allColors[key].filter(color => color.id === colorId)
            );
        }
        return shadeArray.slice(1);
    }

    changeFormat(value) {
		this.setState({
			format: value
		})
	}
    
    render() {
        const { format } = this.state;
        const { paletteName, emoji } = this.props.palette;
        let shadeBoxes = this._shades.map((c) => (
            <ColorBox name={c.name} key={c.id} bgColor={c[format]} showMore={false} />
        ));
        return (
            <div className="ColorPalette">
                <Navbar changeFormat={this.changeFormat} allPaletteColors={false} />
                <div className="ColorPalette-colors" >
                    {shadeBoxes}
                </div>
                <ColorPaletteFooter paletteName={paletteName} emoji={emoji} />
            </div>
        );
    }
}

export default SingleColorPalette;