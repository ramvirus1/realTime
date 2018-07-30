import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppHeader from '../js/configuration/App.Header';
import AppRoutes from '../js/configuration/App.route';

import { Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import rootReducers from '../js/configuration/Reducers/App.Reducers';

const store = createStore(rootReducers);

class CoreApp extends React.Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                <Typography variant='display1' align='center' gutterBottom>
                    <AppHeader />
                    <AppRoutes/>    
                </Typography>
            </React.Fragment>
        );
    }
}
export default CoreApp;
ReactDOM.render(
    <Provider store={store}>
        <CoreApp/>
    </Provider>
,document.getElementById("realTime"));
