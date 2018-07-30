import React from "react";
import Dashboard from "../presentational/Dashboard";
import {withRouter} from 'react-router-dom';
import SocketConn from '../../configuration/Socket.start';
import {connect} from 'react-redux';
import Actions from '../../configuration/Actions';

class DashboardView extends React.Component{
   constructor(){
       super();
       this.SocketSwitch = new SocketConn();
       this.onMessageReceive = this.onMessageReceive.bind(this);
       this.onUserJoinEvent = this.onUserJoinEvent.bind(this);
   }
   componentDidMount(){ 
        this.SocketSwitch.connect(this.onMessageReceive,this.onUserJoinEvent);
        this.SocketSwitch.sendJoinEvent(this.props.location.state.loggedInUser);
   }

   onMessageReceive(message){
       this.props.updateMessageList(message);
   }
   onUserJoinEvent(users){
    this.props.updateOnlineUsers(users);
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
        this.SocketSwitch.sendMessage(this.props.loggedInUser,this.props.enteredMessage,this.props.toUser);
       }   
   }
   render(){
       return(
        <Dashboard message={this.props.enteredMessage} 
            onMessageEntry={this.onMessageEntry.bind(this)} 
            onUserEntry={this.onUserEntry.bind(this)} 
            toUser={this.props.toUser} 
            incomingMsgModel={this.props.incomingMsgModel} 
            onMessageSend={this.onMessageSend.bind(this)} 
            chatErrorMsg={this.props.chatErrorMsg} 
            chatErrorToastState={this.props.chatErrorToastState}
            onChatErrorToastClose={this.onChatErrorToastClose.bind(this)}
            joinedUsers={this.props.joinedUsers}
        />
       )
   }
}
function mapStateToProps(state) {
    return({
        enteredMessage:state.DashboardReducer.enteredMessage,
        toUser:state.DashboardReducer.toUser,
        chatErrorMsg:state.DashboardReducer.chatErrorMsg,
        chatErrorToastState:state.DashboardReducer.chatErrorToastState,
        incomingMsgModel:state.DashboardReducer.incomingMsgModel,
        joinedUsers:state.DashboardReducer.joinedUsers,
        loggedInUser:state.DashboardReducer.loggedInUser
    })
}
function mapDispatchToProps(dispatch) {
    return({
        updateCurrentUserName(name){
            dispatch({type:Actions.Dashboard.UPDATE_CURRENT_LOGIN_NAME,
                payload:{
                    name:name
                }
            })
        },
        handleMessageChange(message){
            dispatch({type:Actions.Dashboard.MESSAGE_ENTRY_CHANGE,
                payload:{
                    message:message
                }
            })
        },
        toggleErrorToast(state,errorMessage){
            dispatch({type:Actions.Dashboard.TOGGLE_ERROR_TOAST,
                payload:{
                    state:state,
                    message:errorMessage
                }
            })
        },
        onToUserSelection(toUser){
            dispatch({type:Actions.Dashboard.UPDATE_TO_USER_SELECTION,
                payload:{
                  toUser:toUser
                }
            })
        },
        updateMessageList(messages){
            dispatch({type:Actions.Dashboard.UPDATE_MESSAGES_LIST,
                payload:{
                   messages:messages
                }
            })
        },
        updateOnlineUsers(userList){
            dispatch({type:Actions.Dashboard.UPDATE_ONLINE_USERS,
                payload:{
                    userlist:userList
                }
            })
        }
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(DashboardView);
