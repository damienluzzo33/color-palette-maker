import React, { Component } from 'react';
import MiniPalette from './MiniPalettePreview';
import { withStyles } from '@material-ui/styles';
import AllColorPaletteStyles from './styles/AllColorPaletteStyles';

class AllColorPalettes extends Component {
    goToColorPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    
	render() {
		const { allPalettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
					</nav>
					<div className={classes.palettes}>
                        {allPalettes.map((p) => 
                            <MiniPalette {...p} 
                                miniClick={() => 
                                    this.goToColorPalette(p.id)
                                }
                            />
                        )}
                    </div>
				</div>
			</div>
		);
	}
}

export default withStyles(AllColorPaletteStyles)(AllColorPalettes);
