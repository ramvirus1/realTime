import Actions from '../Actions';
const initialChatState = {
    enteredMessage:"",
    toUser:"",
    chatErrorMsg:"",
    chatErrorToastState:false,
    incomingMsgModel:[],
    joinedUsers:{}
};

const ChatReducer = (state = initialChatState,action) => {
   switch(action.type){
    case Actions.Chat.UPDATE_TO_USER_SELECTION:
        return Object.assign({}, state, {
            toUser:action.payload.toUser
        })
    case Actions.Chat.MESSAGE_ENTRY_CHANGE:
        return Object.assign({}, state, {
            enteredMessage:action.payload.message
        })
    case Actions.Chat.UPDATE_MESSAGES_LIST:
        return Object.assign({}, state, {
            incomingMsgModel:state.incomingMsgModel.concat(action.payload.messages)
        })
    case Actions.Chat.TOGGLE_ERROR_TOAST:
        return Object.assign({}, state, {
            chatErrorToastState:action.payload.state,
            chatErrorMsg:action.payload.message
        })
    case Actions.Chat.USERS_LIST_UPDATE:
        return Object.assign({}, state, {
            joinedUsers:action.payload.users
        })  
    default:
        return state;    
   }
};

export default ChatReducer;