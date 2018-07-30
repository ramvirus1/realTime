import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import AppRoutes from '../js/configuration/App.route';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Paper, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import rootReducers from '../js/configuration/Reducers/App.Reducers';

const store = createStore(rootReducers);

const Header = () => 
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" >
                Title
            </Typography>
        </Toolbar>
    </AppBar>

class CoreApp extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <React.Fragment>
                <CssBaseline />
                    <Header />
                    <Paper>
                        <Typography variant='display1' align='center' gutterBottom>
                            <AppRoutes />
                        </Typography>
                    </Paper>     
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
