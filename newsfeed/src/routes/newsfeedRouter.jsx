/**
 * All of the routes for the application.
 */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
    Home,
    Other,
} from '../views';
import { Routes } from './routes';

export const NewsfeedRouter = () => (
	<Router>
		<Switch>
			<Route exact path={Routes.HOME} component={Home} />
			<Route exact path={Routes.OTHER} component={Other} />
		</Switch>
	</Router>
);
