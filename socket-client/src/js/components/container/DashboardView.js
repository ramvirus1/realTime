import React from "react";
import Dashboard from "../presentational/Dashboard";
import {connect} from 'react-redux';
import Actions from '../../configuration/Actions';

class DashboardView extends React.Component{
   constructor(){
    super();
   }
  
   componentDidMount(){
    
   }
   onTabChange(event,value){
    this.props.onTabChange(value);
   }
   render() {
    return (
        <Dashboard  
            tabIndex={this.props.tabIndex}
            onTabChange={this.onTabChange.bind(this)}
        />
    );
   }
}

function mapStateToProps(state) {
    return({
        tabIndex:state.DashboardReducer.tabIndex
    })
}

function mapDispatchToProps(dispatch) {
    return({
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
