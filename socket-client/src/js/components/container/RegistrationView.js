import React from "react";
import ReactDOM from "react-dom";
import Registration from '../presentational/Registration';
import {withRouter} from 'react-router-dom';

class RegistrationView extends React.Component{
    constructor() {
        super();
        this.state = {
            username:"",
            regErrorMessage:"",
            errorToastState:false
        };
        this.onRegistration = this.onRegistration.bind(this);
        this.onLoginNameChange = this.onLoginNameChange.bind(this);
        this.onToastClose = this.onToastClose.bind(this);
    }
    onRegistration(){
        if(this.state.username === ""){
          this.setState({regErrorMessage:"Please Enter UserName",errorToastState:true});
          return;
        }
        this.props.history.push('/dashboard',{ loggedInUser:this.state.username});
    }
    onLoginNameChange(event){
        this.setState({username:event.target.value});
    }
    onToastClose(event){
        this.setState({errorToastState:false});
    }
    render() {
        return (
            <Registration onRegistration={this.onRegistration} 
                        onLoginNameChange={this.onLoginNameChange} 
                        loginName={this.state.username}
                        toastState={this.state.errorToastState}
                        regErrorMessage={this.state.regErrorMessage}
                        onToastClose={this.onToastClose}
            />
        );
    }
}
export default withRouter(RegistrationView);
ReactDOM.render(<RegistrationView />, document.getElementById("realTime"));

