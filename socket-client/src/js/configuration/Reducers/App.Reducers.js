import RegistrationReducer from './Registration.Reducer';
import DashboardReducer from './Dashboard.Reducer';
import {combineReducers} from 'redux';

const rootReducers = combineReducers({
    RegistrationReducer,
    DashboardReducer
});

export default rootReducers;