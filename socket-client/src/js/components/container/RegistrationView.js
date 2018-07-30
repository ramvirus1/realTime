import React from "react";
import ReactDOM from "react-dom";
import Registration from '../presentational/Registration';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import Actions from '../../configuration/Actions';

class RegistrationView extends React.Component{
    constructor() {
        super();
    }
    onRegistration(){
        console.log(this.props.username);
        if(this.props.username === ""){
            this.props.toggleErrorToast(true,'Please Enter UserName');
        }else{
            this.props.history.push('/dashboard',{ loggedInUser:this.props.username});
        }
    }
    onLoginNameChange(event){
        this.props.handleUserNameChange(event.target.value);
    }
    onToastClose(event){
        this.props.toggleErrorToast(false,'');
    }
    render() {
        return (
            <Registration onRegistration={this.onRegistration.bind(this)} 
                onLoginNameChange={this.onLoginNameChange.bind(this)} 
                loginName={this.props.username}
                toastState={this.props.errorToastState}
                regErrorMessage={this.props.regErrorMessage}
                onToastClose={this.onToastClose.bind(this)}
            />
        );
    }
}
function mapStateToProps(state) {
    return({
        username:state.RegistrationReducer.username,
        regErrorMessage:state.RegistrationReducer.regErrorMessage,
        errorToastState:state.RegistrationReducer.errorToastState
    })
}
function mapDispatchToProps(dispatch) {
    return({
        handleUserNameChange(text){
            dispatch({type:Actions.Registration.REG_USER_NAME_CHANGE,
                payload:{name:text}
            })
        },
        toggleErrorToast(state,errorMessage){
           dispatch({type:Actions.Registration.TOGGLE_ERROR_TOAST,
                payload:{
                    message:errorMessage,
                    state:state
                }
            });
        }
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistrationView);
ReactDOM.render(<RegistrationView />, document.getElementById("realTime"));

