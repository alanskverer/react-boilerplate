import React, { useState } from 'react'
import useStyles from '../Components/styles';
import Alert from '@material-ui/lab/Alert'
import { Button } from '@material-ui/core'


const MaterialUI = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false)

    const showAlert = () => {
        setShow(true);
        setTimeout(() => {
            setShow((prevState) => !prevState);
        }, 4000);
    }




    return (
        <div>
            {show && <Alert severity="success">This is a success alert — check it out!</Alert>}
            <Button onClick={() => showAlert()} variant="contained">Default</Button>

        </div>
    )
}

export default MaterialUI
