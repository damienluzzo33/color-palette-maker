import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/styles';
import MiniPaletteStyles from './styles/MiniPaletteStyles';
import { Delete } from "@material-ui/icons";

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
        const { classes, paletteName, emoji, id, colors } = this.props;
        console.log("RENDERING ", paletteName);
        const miniColorBoxes = colors.map((c) => (
            <div 
                className={classes.miniBox} 
                style={{backgroundColor: c.color}}
                key={c.name}
            />
        ));
        return (
            <div className={classes.root} onClick={this.handleClick} >
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