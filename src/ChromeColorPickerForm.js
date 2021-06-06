import React, { Component } from 'react';
import { Button } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

const styles = {
    root: {
        width: "100%"
    },
    chromePicker: {
        width: "100% !important",
        marginTop: "2rem"
    },
    addColorBtn: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "1.5rem"
    },
    textInput: {
        width: "100%",
        marginTop: "1rem",
        height: "3rem"
    }
}

class ChromeColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentColor: "#1e8feb",
			newColorName: "",
        };
        this.handleColorUpdate = this.handleColorUpdate.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', (value) => 
            this.props.newColors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
        );
		ValidatorForm.addValidationRule('isColorUnique', (value) => 
            this.props.newColors.every(
				({ color }) => color.toLowerCase() !== this.state.currentColor.toLowerCase()
			)
        );
    };

    handleColorUpdate(newColor) {
        this.setState({ currentColor: newColor.hex });
    };

    handleFormChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	};
    
    handleSubmit() {
        const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName
		};
        this.props.createNewColor(newColor);
        this.setState({
            newColorName: ""
        })
    };

    render() {
        const { fullPalette } = this.props;
        const { currentColor, newColorName } = this.state;
        const { root, chromePicker, addColorBtn, textInput } = this.props.classes

        return (
            <div className={root}>
                <ChromePicker 
                    color={currentColor} 
                    onChangeComplete={this.handleColorUpdate} 
                    className={chromePicker}
                />
                <ValidatorForm onSubmit={this.handleSubmit} >
                    <TextValidator 
                        value={newColorName}
                        name='newColorName'
                        variant="filled"
                        onChange={this.handleFormChange}
                        placeholder="Color Name"
                        validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
                        errorMessages={[
                            'Enter a name for your color',
                            'Color name must be unique', 
                            'Color already used'
                        ]}
                        className={textInput}
                    />
                    <Button 
                        variant="contained" 
                        color="primary"
                        style={{ backgroundColor: fullPalette ? "rgba(0,0,0,0.5)" : currentColor }}
                        type="submit"
                        disabled={fullPalette}
                        className={addColorBtn}
                    >
                        {fullPalette ? "Palette Is Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ChromeColorPickerForm);