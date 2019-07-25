import React from 'react';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';


function SimpleDialog(props){
    const { onClose, selectedValue, open } = props;

    function handleClose(){
        onClose(selectedValue);
    }
   
    return (
        <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
            <DialogTitle id="simple-dialog-title" >Play List Created.....</DialogTitle>

        </Dialog>
    );
}

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);


    function handleClickOpen() {
        setOpen(true);
    }

    const handleClose = value => {
        setOpen(false)
    };

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Create Playlist!
      </Button>
            <SimpleDialog open={open} onClose={handleClose} />
        </div>
    );
}