import React from 'react';
import {connect} from 'react-redux';
import Actions from '../../../configuration/Actions';
import MapTemplate from '../../presentational/Map';


class MapView extends React.Component{
    constructor(){
      super();
    };
    componentWillReceiveProps(nextProps) {
        debugger;
       this.props.updateLocations(nextProps.locations);
    }
    render(){
        return(
            <MapTemplate userPositions={this.props.userPositions}/>
        )
    };
}
const mapStateToProps = (state) => {
    return({
        userPositions:state.MapReducer.userPositions
    })
};
const mapDispatchToProps = (dispatch) => {
    return({
        updateLocations(locations){
            dispatch({type:Actions.Chat.TOGGLE_ERROR_TOAST,
                payload:{
                    locations:locations
                }
            })
        }
    })
};

export default connect(mapStateToProps,mapDispatchToProps)(MapView);

