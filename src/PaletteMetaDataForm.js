import React, { Component } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

class PaletteMetaDataForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stage: "form",
            newPaletteName: ""
        };
        this.handleFormChange = this.handleFormChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
    };

    componentDidMount() {
        ValidatorForm.addValidationRule('isPaletteNameUnique', (value) => 
            this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
        );
    };

    handleFormChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	};

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    showEmojiPicker() {
        this.setState({
            stage: "emoji"
        });
    };

    handleSelection(emoji) {
        const newColorPalette = {
            paletteName: this.state.newPaletteName,
			emoji: emoji.native
        };
        this.props.saveNewPalette(newColorPalette);
    }
    
    render () {
        const { newPaletteName } = this.state;
        const { hideForm } = this.props;

        return (
            <div>
            <Dialog
                open={this.state.stage === "emoji"}
                onClose={hideForm}
            >
                <Picker 
                    onSelect={this.handleSelection}
                    title='Choose You Color Palette Emoji' 
                    emoji='point_up'
                    perLine='14'
                    emojiSize='28px'
                />
                <Button 
                    onClick={hideForm}
                    color="primary"
                >
                    Cancel
                </Button>
            </Dialog>
            <Dialog 
                open={this.state.stage === "form"}
                onClose={hideForm} 
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Enter New Palette Name
                </DialogTitle>
                <ValidatorForm 
                    onSubmit={this.showEmojiPicker}
                >
                    <DialogContent>
                        <DialogContentText>
                            Please give your amazing new color palette a memorable and unique name!
                        </DialogContentText>
                        <TextValidator
                            label="Palette Name"
                            onChange={this.handleFormChange}
                            value={newPaletteName}
                            name="newPaletteName"
                            fullWidth
                            margin="normal"
                            validators={[ 'required', 'isPaletteNameUnique' ]}
                            errorMessages={[ 'Enter a palette name', 'Name already used' ]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button 
                            onClick={hideForm}
                            color="primary"
                        >
                            Cancel
                        </Button>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            type="submit"
                        >
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
            </div>
        );
    };
};

export default PaletteMetaDataForm;