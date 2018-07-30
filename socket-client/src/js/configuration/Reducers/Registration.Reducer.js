import Actions from '../Actions';
const initialRegistrationState = {
    username:"",
    regErrorMessage:"",
    errorToastState:false
};

const RegistrationReducer = (state = initialRegistrationState ,action) => {
    switch(action.type){
        case Actions.Registration.REG_USER_NAME_CHANGE:
          return Object.assign({}, state, {
            username:action.payload.name
          })
        case Actions.Registration.TOGGLE_ERROR_TOAST:
            return Object.assign({}, state, {
                regErrorMessage:action.payload.message,
                errorToastState:action.payload.state
              })
        default:
        return state;
    }
};

export default RegistrationReducer;