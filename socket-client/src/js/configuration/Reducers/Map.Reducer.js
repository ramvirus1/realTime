import Actions from '../Actions';
const initialMapState = {
    userPositions:[{ name:'Test User',coordinates:{lat: 59.955413, lng: 30.337844}  }]
};

const MapReducer = (state=initialMapState,action) => {
    switch(action.type){
        case Actions.Map.UPDATE_ALL_POSTIONS:
            return Object.assign({}, state, {
                userPositions:action.payload.locations
        })
        default:
        return state;
    }
};

export default MapReducer;