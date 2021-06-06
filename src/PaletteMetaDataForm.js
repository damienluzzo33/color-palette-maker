import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaDataForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            open: true,
            newPaletteName: ""
        };
        this.handleFormChange = this.handleFormChange.bind(this);
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
    
    render () {
        const { newPaletteName } = this.state;
        const { saveNewPalette } = this.props;

        return (
            <Dialog 
                open={this.state.open} 
                onClose={this.handleClose} aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Enter New Palette Name
                </DialogTitle>
                <ValidatorForm 
                    onSubmit={() => saveNewPalette(newPaletteName)}
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
                            onClick={this.handleClose} 
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
        );
    };
};

export default PaletteMetaDataForm;