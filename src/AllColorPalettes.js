import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalettePreview';
import Icon from '@mdi/react';
import { mdiPlusCircle } from '@mdi/js';
import AllColorPaletteStyles from './styles/AllColorPaletteStyles';

class AllColorPalettes extends Component {
    goToColorPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }
    
	render() {
		const { palettes, classes, deletePalette } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1 className={classes.title}>ReactColorPicker</h1>
						<Link to="/palette/new">
							<span className={classes.createReg}>
								Create Palette
							</span>
							<Icon 
								className={classes.createMobile}
								path={mdiPlusCircle}
								size={2}
							/>
						</Link>
					</nav>
					<div className={classes.palettes}>
                        {palettes.map((p) => 
                            <MiniPalette 
								{...p}
								miniClick={() => 
                                    this.goToColorPalette(p.id)
                                }
								key={p.id}
								deletePalette={deletePalette}
                            />
                        )}
                    </div>
				</div>
			</div>
		);
	}
}

export default withStyles(AllColorPaletteStyles)(AllColorPalettes);
