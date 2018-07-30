import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

export default class AppHeader extends React.Component{
    constructor(){
        super();
        this.state = {
            headerTitle:'Register'
        }
    }
    render(){
        return(
            <AppBar position="static">
                <Toolbar>
                    <span>{this.state.headerTitle}</span>
                </Toolbar>
            </AppBar>
        );
    }
}
