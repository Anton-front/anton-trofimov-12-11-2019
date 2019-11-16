import React from 'react';
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { observer, inject } from 'mobx-react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  gridItem: {
    color: theme.palette.primary.main,
  },
}));

const Favorites  = inject('weatherInfo')(observer(({weatherInfo}) => {

  const classes = useStyles();

  const submitSearch = (newCity) => {
    weatherInfo.handleChange(newCity);
    weatherInfo.handleSubmit();
  }

	return (
		<div className="weather-favorites-wrap">
      { weatherInfo.favorites.map((item, index) =>
        <div
        className='weather-favorite-col text-center'
          key={ index }>
          <Card
            className='weather-favorite-item text-center'
          >
            <div className={ classes.gridItem }>
              <CardContent>
                <Typography
                  variant="h5"
                >
                  { item.LocalizedName }
                </Typography>
                <Typography
                  component="p"
                >
                  { weatherInfo.convertCelsToFahr(item.Temperature.Metric.Value) }
                </Typography>
              </CardContent>
              <CardActions className="btn-details-wrap">
                <NavLink
                  className="btn-details-link"
                  to="/"
                  onClick={ () => submitSearch(item.LocalizedName) }
                >
                  See details
                </NavLink>
              </CardActions>
            </div>
          </Card>
        </div>
			)}
		</div>
	)
}))

export default Favorites;
