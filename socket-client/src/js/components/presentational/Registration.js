import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}
const Registration = ({ loginName, onRegistration, onLoginNameChange, 
    regErrorMessage, toastState, onToastClose
 }) => (
    <div> 
        <form noValidate autoComplete="off">
            <TextField
                id="username"
                label="Enter Username"
                margin="normal"
                value={loginName}
                onChange={onLoginNameChange}
            />
            <Button onClick={onRegistration} variant="contained" color="primary">
                Register
            </Button>
        </form>
        <Snackbar
            open={toastState}
            onClose={onToastClose}
            TransitionComponent={TransitionLeft}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{regErrorMessage}</span>}
        />
   </div>
);

Registration.propTypes = {
    loginName: PropTypes.string.isRequired,
    onRegistration:PropTypes.func.isRequired,
    onLoginNameChange:PropTypes.func.isRequired,
    regErrorMessage:PropTypes.string.isRequired,
    toastState:PropTypes.bool.isRequired,
    onToastClose:PropTypes.func.isRequired
};

export default Registration;