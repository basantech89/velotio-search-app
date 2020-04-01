import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './assets/styles/global.scss';
import Search from "./screens/Search/Search";
import Companies from "./screens/Companies/Companies";
import { PageProvider } from "./components/generic/Pagination/PageProvider";

const CompaniesContainer = () => (
	<PageProvider>
		<Companies />
	</PageProvider>
);

const routes = [
  {
    path: '/',
    component: Search
  },
	{
		path: '/companies',
		component: CompaniesContainer
	}
];

const Main = () => {
	return (
		<Switch>
			{routes.map((route, index) =>
				<Route key={index} exact path={route.path} component={route.component} />)
			}
			<Redirect from="/home" to="/" />
		</Switch>
	);
};

export default Main;
