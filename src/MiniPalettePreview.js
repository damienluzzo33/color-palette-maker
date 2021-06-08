import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPaletteStyles from './styles/MiniPaletteStyles';
import { Delete } from "@material-ui/icons";

class MiniPalette extends Component {
    constructor(props) {
        super(props);
        this.deletePalette = this.deletePalette.bind(this);
    }

    deletePalette(evt) {
        evt.stopPropagation();
        this.props.openDialog(this.props.id);
    }

    render() {
        const { classes, paletteName, emoji, id, colors, miniClick } = this.props;
        const miniColorBoxes = colors.map((c) => (
            <div 
                className={classes.miniBox} 
                style={{backgroundColor: c.color}}
                key={c.name}
            />
        ));
        return (
            <div className={classes.root} onClick={miniClick} >
                <Delete 
                    className={classes.deleteIcon} 
                    onClick={this.deletePalette}
                />
                <div className={classes.colors}>
                    {miniColorBoxes}
                </div>
                <h5 className={classes.title}>
                    {paletteName} <span className={classes.emoji}>{emoji}</span>
                </h5>
            </div>
        );
    }
}

export default withStyles(MiniPaletteStyles)(MiniPalette);