import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegistrationView from '../components/container/RegistrationView';
import DashboardView from '../components/container/DashboardView';

const AppRoutes = () =>
    <Router>
        <section>
            <Route exact path="/" component={RegistrationView} />
            <Route path='/registration' component={RegistrationView} />
            <Route path='/dashboard' component={DashboardView} />
        </section>
    </Router>

export default AppRoutes;


