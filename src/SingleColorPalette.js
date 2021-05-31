import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.collectShades(this.props.palette, this.props.colorId);
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
    
    render() {
        let shadeBoxes = this._shades.map((c) => (
            <ColorBox name={c.name} key={c.id} bgColor={c.hex} showMore={false} />
        ));
        return (
            <div className="ColorPalette">
                <h1>
                    Single Color Palette
                </h1>
                <div className="ColorPalette-colors" >
                    {shadeBoxes}
                </div>
            </div>
        );
    }
}

export default SingleColorPalette;