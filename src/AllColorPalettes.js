import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalettePreview';
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
						<h1>ReactColorPicker</h1>
						<Link to="/palette/new">
							Create Palette
						</Link>
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
