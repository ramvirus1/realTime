import React from "react";
import Dashboard from "../presentational/Dashboard";
import {withRouter} from 'react-router-dom';
import SocketConn from '../../configuration/Socket.start';

class DashboardView extends React.Component{
   constructor(){
       super();
       this.state = {
            enteredMessage:"",
            toUser:"",
            chatErrorMsg:"",
            chatErrorToastState:false,
            incomingMsgModel:[],
            joinedUsers:{},
            loggedInUser:""
       };
       this.SocketSwitch = new SocketConn();
       this.onMessageEntry = this.onMessageEntry.bind(this);
       this.onUserEntry = this.onUserEntry.bind(this);
       this.onMessageSend = this.onMessageSend.bind(this);
       this.onChatErrorToastClose = this.onChatErrorToastClose.bind(this);
       this.onMessageReceive = this.onMessageReceive.bind(this);
       this.onUserJoinEvent = this.onUserJoinEvent.bind(this);
   }
   componentDidMount(){ 
        this.setState({loggedInUser:this.props.location.state.loggedInUser});  
        this.SocketSwitch.connect(this.onMessageReceive,this.onUserJoinEvent);
        this.SocketSwitch.sendJoinEvent(this.props.location.state.loggedInUser);
   }

   onMessageReceive(message){
      this.state.incomingMsgModel.push(message);
      this.setState({incomingMsgModel:this.state.incomingMsgModel});
   }
   onUserJoinEvent(users){
      this.setState({joinedUsers:users});
   }
   onMessageEntry(event){
    this.setState({enteredMessage:event.target.value}); 
   }
   onUserEntry(event){
    this.setState({toUser:event.target.value});    
   }
   onChatErrorToastClose(){
    this.setState({chatErrorToastState:false});
   }
   onMessageSend(event){
       if(this.state.enteredMessage === ""){
        this.setState({chatErrorToastState:true,chatErrorMsg:"Please Enter Message"});
        return;
       }else if(this.state.toUser === ""){
        this.setState({chatErrorToastState:true,chatErrorMsg:"Please Enter Receiver Name"});
        return;
       }
       this.SocketSwitch.sendMessage(this.state.loggedInUser,this.state.enteredMessage,this.state.toUser);
   }
   render(){
       return(
        <Dashboard message={this.state.enteredMessage} 
            onMessageEntry={this.onMessageEntry}
            onUserEntry={this.onUserEntry} 
            toUser={this.state.toUser} 
            incomingMsgModel={this.state.incomingMsgModel} 
            onMessageSend={this.onMessageSend} 
            chatErrorMsg={this.state.chatErrorMsg} 
            chatErrorToastState={this.state.chatErrorToastState}
            onChatErrorToastClose={this.onChatErrorToastClose}
            joinedUsers={this.state.joinedUsers}
        />
       )
   }
}
export default withRouter(DashboardView);