import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
});

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}
const Registration = ({ loginName, onRegistration, onLoginNameChange, 
    regErrorMessage, toastState, onToastClose, classes
 }) => (
    <div className={classes.root}> 
        <Grid container spacing={24}>
            <Grid item xs={12} className={classes.paper}>
                <TextField
                    id="username"
                    label="Enter Username"
                    margin="normal"
                    value={loginName}
                    onChange={onLoginNameChange}
                />
            </Grid>
            <Grid item xs={12} className={classes.paper}>        
                <Button onClick={onRegistration} variant="contained" color="primary">
                    Register
                </Button>
            </Grid>
            <Snackbar
                open={toastState}
                onClose={onToastClose}
                TransitionComponent={TransitionLeft}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={<span id="message-id">{regErrorMessage}</span>}
            />
        </Grid>
   </div>
);

Registration.propTypes = {
    loginName: PropTypes.string.isRequired,
    onRegistration:PropTypes.func.isRequired,
    onLoginNameChange:PropTypes.func.isRequired,
    regErrorMessage:PropTypes.string.isRequired,
    toastState:PropTypes.bool.isRequired,
    onToastClose:PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Registration);