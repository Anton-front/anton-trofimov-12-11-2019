import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Home from '../../views/Home';
import Favorites from '../../views/Favorites';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(5, 1),
  },
}));

const routes = [
	{
    key: 0,
		path: '/',
		exact: true,
		component: Home
	},
	{
    key: 1,
		path: '/favorites',
		exact: true,
		component: Favorites
	}  
];

export default function Layout() {
	const classes = useStyles();

  return (
  	<main className={classes.root}>
      <Container>
        <Switch>
        	{ routes.map((props) => <Route {...props} />) }
        </Switch>
      </Container>
  	</main>
  );
}
