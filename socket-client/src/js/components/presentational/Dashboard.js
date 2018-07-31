import React from "react";
import PropTypes from "prop-types";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import MapView from '../container/subContainers/MapView';
import ChatView from '../container/subContainers/ChatView';

const Dashboard = ({onTabChange, tabIndex, chatMessages, userLocations, onlineUsers}) => {
    return (
    <div>
        <AppBar position="static">
          <Tabs value={tabIndex} onChange={onTabChange}>
            <Tab label="Chat" />
            <Tab label="Locations" />
          </Tabs>
        </AppBar>
        {tabIndex === 0 && <ChatView messages={chatMessages} users={onlineUsers}/>}
        {tabIndex === 1 && <MapView locations={userLocations}/>}
    </div>
    )
};

Dashboard.propTypes = {
    onTabChange:PropTypes.func.isRequired,
    tabIndex:PropTypes.number.isRequired,
};

export default Dashboard;