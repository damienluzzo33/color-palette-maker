import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import { Delete } from "@material-ui/icons";

import MiniPaletteStyles from './styles/MiniPaletteStyles';

class MiniPalette extends PureComponent {
    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.miniClick(this.props.id);
    }

    deletePalette(evt) {
        evt.stopPropagation();
        this.props.openDialog(this.props.id);
    }

    render() {
        const { paletteName, emoji, colors } = this.props;
        const { miniBox, root, deleteIcon, miniColors, paletteTitle, paletteEmoji } = this.props.classes;
        const miniColorBoxes = colors.map((c) => (
            <div 
                className={miniBox} 
                style={{backgroundColor: c.color}}
                key={c.name}
            />
        ));
        return (
            <div className={root} onClick={this.handleClick} >
                <Delete 
                    className={deleteIcon} 
                    onClick={this.deletePalette}
                />
                <div className={miniColors}>
                    {miniColorBoxes}
                </div>
                <h5 className={paletteTitle}>
                    {paletteName} <span className={paletteEmoji}>{emoji}</span>
                </h5>
            </div>
        );
    }
}

export default withStyles(MiniPaletteStyles)(MiniPalette);