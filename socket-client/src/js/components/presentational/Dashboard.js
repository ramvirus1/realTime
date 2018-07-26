import React from "react";
import PropTypes from "prop-types";
import List from '@material-ui/core/List';
import TextField from '@material-ui/core/TextField';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';

let messageList = (messages) => {
   return (
       messages.map(function(messageItem){
           return <ListItem>
                    <ListItemText primary={messageItem.chat} secondary={<span>{messageItem.name}</span>}/>
                </ListItem>
       })
   )
};

let getUserList = (users) => {
    return (
        Object.keys(users).map(function (key) {
            return <MenuItem value={key}>{key}</MenuItem>
        })
    )
};

function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
}

const Dashboard = ({message, onMessageEntry, onUserEntry, toUser, incomingMsgModel, onMessageSend, chatErrorMsg, chatErrorToastState, onChatErrorToastClose, joinedUsers}) => (
    <div>
        <TextField label="Enter Message" onChange={onMessageEntry} 
            value={message}
            id="messageInput"
            margin="normal" 
        />
        <FormControl required>
            <InputLabel htmlFor="age-required">Receiver Name</InputLabel>
            <Select value={toUser} onChange={onUserEntry} name="Receiver Name"
                inputProps={{
                    id: 'age-required',
                }}>
                {getUserList(joinedUsers)}
            </Select>
            <FormHelperText>Required</FormHelperText>
        </FormControl>  
        <Button onClick={onMessageSend} variant="contained" color="primary">
            Send Message
        </Button>
        <List>
            {messageList(incomingMsgModel)}
        </List>
        <Snackbar open={chatErrorToastState} onClose={onChatErrorToastClose}
            TransitionComponent={TransitionLeft}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{chatErrorMsg}</span>}
        />
    </div>
);

Dashboard.propTypes = {
    message: PropTypes.string.isRequired,
    onMessageEntry:PropTypes.func.isRequired,
    onUserEntry:PropTypes.func.isRequired,
    toUser:PropTypes.string.isRequired,
    incomingMsgModel:PropTypes.array.isRequired,
    onMessageSend:PropTypes.func.isRequired,
    chatErrorMsg:PropTypes.string.isRequired,
    chatErrorToastState:PropTypes.bool.isRequired,
    onChatErrorToastClose:PropTypes.func.isRequired,
    joinedUsers:PropTypes.object.isRequired
};

export default Dashboard;