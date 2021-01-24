/**
 * All of the routes for the application.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/home/Home';
import Other from '../views/other/Other';
import { Routes } from './routes';

export const NewsfeedRouter = () => (
	<Router>
		<Switch>
			<Route exact path={Routes.HOME} component={Home} />
			<Route exact path={Routes.OTHER} component={Other} />
            <Route exact path={Routes.SIGN_IN} component={null} />
		</Switch>
	</Router>
);
