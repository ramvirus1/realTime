import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import PropTypes from "prop-types";
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
    formControl: {
        minWidth: 170,
    },
    sendButton:{
        marginTop:10
    }
});

let messageList = (messages) => {
    return (
        messages.map(function(messageItem){
            return <ListItem>
                    <ListItemText primary={messageItem.chat} secondary={<span>{messageItem.name + ' At ' +messageItem.time}</span>}/>
                </ListItem>
        })
    )
};
 
let getUserList = (users) => {
     return (
         Object.keys(users).length ? Object.keys(users).map(function (key) {
             return <MenuItem value={key}>{key}</MenuItem>
         }) : <MenuItem value={''}>No Online Users</MenuItem>
     )
};

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

 const ChatTemplate = ({message, onMessageEntry, onUserEntry, toUser, incomingMsgModel, onMessageSend, chatErrorMsg, chatErrorToastState, onChatErrorToastClose, joinedUsers, classes}) => {
    return (
        <div style={{ padding: 8 }}>
            <Grid container spacing={24}>
                <Grid item xs={12} className={classes.paper}>
                    <TextField label="Enter Message" onChange={onMessageEntry} 
                        value={message}
                        id="messageInput"
                        margin="normal" 
                    />
                </Grid>
                <Grid item xs={12} className={classes.paper}>
                    <FormControl required className={classes.formControl}>
                        <InputLabel>Receiver Name</InputLabel>
                        <Select value={toUser} onChange={onUserEntry} name="Receiver Name">
                            {getUserList(joinedUsers)} 
                        </Select>
                    </FormControl>  
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.paper}>
                <Button className={classes.sendButton} onClick={onMessageSend} variant="contained" color="primary">
                    Send Message
                </Button>
            </Grid>
            <List>
                {messageList(incomingMsgModel)}
            </List>
            <Snackbar open={chatErrorToastState} onClose={onChatErrorToastClose}
                TransitionComponent={TransitionLeft}
                message={<span>{chatErrorMsg}</span>}
            />
        </div>
    )
 };

 ChatTemplate.propTypes = {
    message: PropTypes.string.isRequired,
    onMessageEntry:PropTypes.func.isRequired,
    onUserEntry:PropTypes.func.isRequired,
    toUser:PropTypes.string.isRequired,
    incomingMsgModel:PropTypes.array.isRequired,
    onMessageSend:PropTypes.func.isRequired,
    chatErrorMsg:PropTypes.string.isRequired,
    chatErrorToastState:PropTypes.bool.isRequired,
    onChatErrorToastClose:PropTypes.func.isRequired,
    joinedUsers:PropTypes.object.isRequired,
    classes:PropTypes.object.isRequired
 };

 export default withStyles(styles, { withTheme: true })(ChatTemplate);