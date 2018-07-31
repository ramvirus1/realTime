import React from 'react';
import {connect} from 'react-redux';
import Actions from '../../../configuration/Actions';
import ChatTemplate from '../../presentational/Chat';
import SocketConn from '../../../configuration/Socket.start';

class ChatView extends React.Component{
    constructor(){
        super();
    }
    componentDidMount(){
        this.SocketInstance = new SocketConn();
    }
    componentWillReceiveProps(nextProps) {
        this.props.updateOnlineUsers(nextProps.users);  
    }
    onMessageEntry(event){
        this.props.handleMessageChange(event.target.value);  
    }
    onUserEntry(event){
        this.props.onToUserSelection(event.target.value);
    }
    onChatErrorToastClose(){
        this.props.toggleErrorToast(false,'');
    }
    onMessageSend(event){
        if(this.props.enteredMessage === ""){
         this.props.toggleErrorToast(true,'Please Enter Message');
        }else if(this.props.toUser === ""){
         this.props.toggleErrorToast(true,'Please Enter Receiver Name');
        }else{
         this.SocketInstance.sendMessage(this.props.loggedInUser,this.props.enteredMessage,this.props.toUser);
        }   
    }
    render(){
        return(
            <ChatTemplate message={this.props.enteredMessage} 
                onMessageEntry={this.onMessageEntry.bind(this)} 
                onUserEntry={this.onUserEntry.bind(this)} 
                toUser={this.props.toUser} 
                incomingMsgModel={this.props.incomingMsgModel} 
                onMessageSend={this.onMessageSend.bind(this)} 
                chatErrorMsg={this.props.chatErrorMsg} 
                chatErrorToastState={this.props.chatErrorToastState}
                onChatErrorToastClose={this.onChatErrorToastClose.bind(this)}
                joinedUsers={this.props.joinedUsers}
                socketConn={this.socketConn}
            />
        )
    }
}
const mapStateToProps = (state) => {
    return({
        enteredMessage:state.ChatReducer.enteredMessage,
        toUser:state.ChatReducer.toUser,
        incomingMsgModel:state.ChatReducer.incomingMsgModel,
        chatErrorMsg:state.ChatReducer.chatErrorMsg,
        chatErrorToastState:state.ChatReducer.chatErrorToastState,
        joinedUsers:state.ChatReducer.joinedUsers
    });
};

const mapDispatchToProps = (dispatch) => {
   return({
        handleMessageChange(message){
            dispatch({type:Actions.Chat.MESSAGE_ENTRY_CHANGE,
                payload:{
                    message:message
                }
            })
        },
        onToUserSelection(toUser){
            dispatch({type:Actions.Chat.UPDATE_TO_USER_SELECTION,
                payload:{
                  toUser:toUser
                }
            })
        },
        toggleErrorToast(state,errorMessage){
            dispatch({type:Actions.Chat.TOGGLE_ERROR_TOAST,
                payload:{
                    state:state,
                    message:errorMessage
                }
            })
        },
        updateMessageList(messages){
            dispatch({type:Actions.Chat.UPDATE_MESSAGES_LIST,
                payload:{
                   messages:messages
                }
            })
        },
        updateOnlineUsers(users){
            dispatch({type:Actions.Chat.USERS_LIST_UPDATE,
                payload:{
                    users:users
                }
            })
        }
   })
};

export default connect(mapStateToProps,mapDispatchToProps)(ChatView);