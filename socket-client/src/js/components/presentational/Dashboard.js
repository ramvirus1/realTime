import React from "react";
import MapView from '../container/subContainers/MapView';
import ChatView from '../container/subContainers/ChatView';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 }}>
        {props.children}
      </Typography>
    );
  }

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

const Dashboard = ({tabIndex, onTabChange, classes}) => {
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={tabIndex} onChange={onTabChange}>
                    <Tab label="Chat" />
                    <Tab label="Map" />
                </Tabs>
            </AppBar>
            {tabIndex === 0 && <TabContainer><ChatView /></TabContainer>}
            {tabIndex === 1 && <TabContainer><MapView /></TabContainer>}
        </div>
    )
};

Dashboard.propTypes = {
    tabIndex:PropTypes.number.isRequired,
    onTabChange:PropTypes.func.isRequired
}

export default withStyles(styles,{ withTheme: true })(Dashboard);