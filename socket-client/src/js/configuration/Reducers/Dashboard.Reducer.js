import Actions from '../Actions';

const initialDashboardState = {
    enteredMessage:"",
    toUser:"",
    chatErrorMsg:"",
    chatErrorToastState:false,
    incomingMsgModel:[],
    joinedUsers:{},
    loggedInUser:""
};

const DashboardReducer = (state = initialDashboardState,action) => {
    switch(action.type){
      case Actions.Dashboard.UPDATE_CURRENT_LOGIN_NAME:
        return Object.assign({}, state, {
            loggedInUser:action.payload.name
        })
      case Actions.Dashboard.UPDATE_TO_USER_SELECTION:
        return Object.assign({}, state, {
            toUser:action.payload.toUser
        })
      case Actions.Dashboard.MESSAGE_ENTRY_CHANGE:
        return Object.assign({}, state, {
            enteredMessage:action.payload.message
        })
      case Actions.Dashboard.UPDATE_MESSAGES_LIST:
        return Object.assign({}, state, {
            incomingMsgModel:state.incomingMsgModel.concat(action.payload.messages)
        })
      case Actions.Dashboard.TOGGLE_ERROR_TOAST:
        return Object.assign({}, state, {
            chatErrorToastState:action.payload.state,
            chatErrorMsg:action.payload.message
        })
      case Actions.Dashboard.UPDATE_ONLINE_USERS:
        return Object.assign({}, state, {
            joinedUsers:action.payload.userlist
        })  
      default:
      return state;
    }
};

export default DashboardReducer;
