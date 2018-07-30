import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegistrationView from '../components/container/RegistrationView';
import DashboardView from '../components/container/DashboardView';
import PropTypes from "prop-types";

const styles = theme => ({
    margin: {
      margin: theme.spacing.unit
    },
});

const AppRoutes = (props) =>
    <Router>
        <section className={props.margin}>
            <Route exact path="/" component={RegistrationView} />
            <Route path='/registration' component={RegistrationView} />
            <Route path='/dashboard' component={DashboardView} />
        </section>
    </Router>

AppRoutes.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppRoutes);


