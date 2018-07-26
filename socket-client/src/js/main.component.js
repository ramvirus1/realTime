import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from '../js/configuration/App.route';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Paper, Typography } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';

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
ReactDOM.render(<CoreApp/>,document.getElementById("realTime"));
