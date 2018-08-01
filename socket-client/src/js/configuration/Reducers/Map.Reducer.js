import Actions from '../Actions';
const initialMapState = {
    userPositions:[]
};

const MapReducer = (state=initialMapState,action) => {
    switch(action.type){
        case Actions.Map.UPDATE_ALL_POSTIONS:
            return Object.assign({}, state, {
                userPositions:state.userPositions.concat(action.payload.locations)
            })
        default:
        return state;
    }
};

export default MapReducer;