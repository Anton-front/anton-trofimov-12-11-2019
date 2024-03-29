import React from 'react';
import { observer, inject } from 'mobx-react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import icoImg from '../weather-ico.png';

const useStyles = makeStyles(theme => ({
    gridItem: {
      color: theme.palette.primary.main,
      padding: '30px 20px'
    },
}));

const days = ['Sun', 'Mon', 'Tus', 'Wen', 'Thu'];

const Home  = inject('weatherInfo')(observer(({weatherInfo}) => {
  const classes = useStyles();

  const changeCity = (e) => {
    weatherInfo.handleChange(e.target.value);
  }

  const submitSearch = (e) => {
    e.preventDefault();
    weatherInfo.handleSubmit();
  }

  const toggleFavorites = (e) => {
    e.preventDefault();
    weatherInfo.handleToggleItems();
    weatherInfo.checkFavorite();
  }

  const changeUnits = (e) => {
    weatherInfo.convertUnits(e.target.checked)
  }

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="center"
      >
        <Paper
          component="form"
          className="search-form"
          onSubmit={ submitSearch }
        >
          <InputBase
            placeholder="Search city"
            onChange={ changeCity }
            value={ weatherInfo.defaultCity }
          />
          <IconButton
            type="submit"
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Paper
        className={ classes.gridItem }
      >
        <div className={(weatherInfo.isLoading) ? 'preloader-wrap active' : 'preloader-wrap' }>
          <div className="weather-details-wrap">
            <div className="weather-details-col">
              <div className="weather-details-img">
                <img
                  src={ icoImg }
                  alt="weather ico"
                />
              </div>
              <div>
                <Typography
                  variant="h5"
                >
                  { weatherInfo.currentCityInfo.LocalizedName },
                  &nbsp;
                  { weatherInfo.currentCityInfo.Country.LocalizedName }
                </Typography>
                <Typography
                  variant="h5"
                >
                  { weatherInfo.convertCelsToFahr(weatherInfo.currentCityWeather.Temperature.Metric.Value) }
                </Typography>
              </div>
            </div>
            <div className="weather-details-col btn-wrap">
              <Fab
                aria-label="like"
                color="primary"
                className={ (weatherInfo.isFavorite) ? 'favorite-on' : 'favorite-off' }
                onClick={ toggleFavorites }
              >
                <FavoriteIcon />
              </Fab>
            </div>
          </div>
          <Typography
            variant="h3"
            className="weather-heading-text"
          >
            { weatherInfo.currentCityWeather.WeatherText }
          </Typography>
          <div className="weather-days-wrap">
            { weatherInfo.weather5day.map((item, index) =>
              <article
                className="day-weather-item"
                key={ index }
              >
                <div className="text-center">
                  <Typography
                    variant="h6"
                    className="day-title"
                  >
                    { days[index] }
                  </Typography>
                  <Typography
                    component="p"
                  >
                    min: &nbsp;
                    { weatherInfo.convertCelsToFahr(item.Temperature.Minimum.Value) }
                  </Typography>
                  <Typography
                    component="p"
                  >
                    max: &nbsp;
                    { weatherInfo.convertCelsToFahr(item.Temperature.Maximum.Value) }
                  </Typography>
                  <Typography
                    variant="caption"
                    display="block"
                    className="weather-day-caption"
                  >
                    { item.Day.IconPhrase }
                  </Typography>
                </div>
              </article>
            )}
          </div>
          <div className="preloader-ico-wrap">
            <CircularProgress className="preloader-ico" />
          </div>
        </div>
        <div>
          <FormControlLabel
            label="convert to fahrenheit"
            control={
              <Switch
                onChange={ changeUnits }
                checked={ weatherInfo.currentUnit }
                value={ weatherInfo.currentUnit }
                color="secondary"
              />
            }
          />
        </div>
      </Paper>
    </div>
  )
}));

export default Home;
