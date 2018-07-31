import RegistrationReducer from './Registration.Reducer';
import DashboardReducer from './Dashboard.Reducer';
import ChatReducer from './Chat.Reducer';
import MapReducer from './Map.Reducer';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    RegistrationReducer,
    ChatReducer,
    MapReducer,
    DashboardReducer
});

export default rootReducers;