const Actions = {
    Registration:{
        REG_USER_NAME_CHANGE: 'REG_USER_NAME_CHANGE',
        TOGGLE_ERROR_TOAST: 'TOGGLE_ERROR_TOAST'
    },
    Dashboard:{
        ON_TAB_CHANGE:'ON_TAB_CHANGE',
        UPDATE_ONLINE_USERS:'UPDATE_ONLINE_USERS',
        UPDATE_USER_POSITIONS:'UPDATE_USER_POSITIONS',
        UPDATE_INDEX:'UPDATE_INDEX'
    },
    Chat:{
        USERS_LIST_UPDATE:'USERS_LIST_UPDATE',
        UPDATE_TO_USER_SELECTION:'UPDATE_TO_USER_SELECTION',
        MESSAGE_ENTRY_CHANGE:'MESSAGE_ENTRY_CHANGE',
        UPDATE_MESSAGES_LIST:'UPDATE_MESSAGES_LIST',
        TOGGLE_ERROR_TOAST:'TOGGLE_ERROR_TOAST',
    },
    Map:{
        UPDATE_ALL_POSTIONS:'UPDATE_ALL_POSTIONS'
    }
};

export default Actions;
