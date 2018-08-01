import Actions from '../Actions';

const initialDashboardState = {
    loggedInUser:"",
    tabIndex:0
};

const DashboardReducer = (state = initialDashboardState,action) => {
    switch(action.type){
      case Actions.Dashboard.UPDATE_USER_POSITIONS:
        let positionObject = [{
            name:action.payload.user,
            coordinates:{
                lat:action.payload.location.latitude,
                lng:action.payload.location.longitude
            }
        }];
        return Object.assign({}, state, {
            userLocations:state.userLocations.concat(positionObject)
      })
      case Actions.Dashboard.UPDATE_INDEX:
        return Object.assign({}, state, {
            containerIndex:action.payload.index
        })
      case Actions.Dashboard.ON_TAB_CHANGE:
        return Object.assign({}, state, {
            tabIndex:action.payload.tabIndex
        })
      case Actions.Dashboard.UPDATE_ONLINE_USERS:
        return Object.assign({}, state, {
            onlineUsers:action.payload.userlist
        })
      default:
      return state;
    }
};

export default DashboardReducer;
