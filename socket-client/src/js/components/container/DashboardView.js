import React from "react";
import Dashboard from "../presentational/Dashboard";
import SocketConn from '../../configuration/Socket.start';
import {connect} from 'react-redux';
import Actions from '../../configuration/Actions';
import Common from '../../configuration/Common';
import {geolocated} from 'react-geolocated';

class DashboardView extends React.Component{
   constructor(){
    super();
    this.SocketSwitch = new SocketConn();
    this.CommonInstance = new Common();
    this.onMessageReceive = this.onMessageReceive.bind(this);
    this.onUserJoinEvent = this.onUserJoinEvent.bind(this);
    this.onDisconnect = this.onDisconnect.bind(this);
    this.OnlocationSuccess = this.OnlocationSuccess.bind(this);
   }
   onMessageReceive(message){
    this.props.updateMessageList(message);
   }
   onUserJoinEvent(users){
    this.props.updateOnlineUsers(users);
   }
   onDisconnect(users){
    this.props.updateOnlineUsers(users);
   }
   OnlocationSuccess(position){
      this.props.updateUserLocation(position,this.CommonInstance.getValue('currentUser'));
   }
   OnlocationFailed(){
     console.log('failed');
   }
   componentDidMount(){
    this.CommonInstance.setValue('currentUser',this.props.location.state.loggedInUser);
    this.SocketSwitch.connect(this.onMessageReceive,this.onUserJoinEvent,this.onDisconnect);
    this.SocketSwitch.sendJoinEvent(this.props.location.state.loggedInUser);
    this.CommonInstance.getUserLocation(this.OnlocationSuccess,this.OnlocationFailed);
   }
   onTabChange(event,value){
    this.props.onTabChange(value);
   }
   render() {
    return (
        <Dashboard
            onTabChange={this.onTabChange.bind(this)}
            tabIndex={this.props.tabIndex}
            chatMessages={this.props.chatMessages}
            userLocations={this.props.userLocations}
            onlineUsers={this.props.onlineUsers}
        />
    );
   }
}

function mapStateToProps(state) {
    return({
        tabIndex:state.DashboardReducer.tabIndex,
        chatMessages:state.DashboardReducer.chatMessages,
        userLocations:state.DashboardReducer.userLocations,
        onlineUsers:state.DashboardReducer.onlineUsers
    })
}

function mapDispatchToProps(dispatch) {
    return({
        updateOnlineUsers(userList){
            dispatch({type:Actions.Dashboard.UPDATE_ONLINE_USERS,
                payload:{
                    userlist:userList
                }
            })
        },
        updateUserLocation(location,user){
            dispatch({type:Actions.Dashboard.UPDATE_USER_POSITIONS,
                payload:{
                    location:location,
                    user:user
                }
            })
        },
        onTabChange(value){
            dispatch({type:Actions.Dashboard.ON_TAB_CHANGE,
                payload:{
                    tabIndex:value
                }
            })
        }
    })
};
export default connect(mapStateToProps,mapDispatchToProps)(DashboardView);
