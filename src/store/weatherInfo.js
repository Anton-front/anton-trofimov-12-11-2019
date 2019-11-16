import { observable, computed, action, decorate } from 'mobx';

class WeatherInfo {
  constructor() {
    this.defaultCity = 'Tel Aviv';
    this.isFavorite = false;
    this.currentUnit = false;
    this.apikey = 'apikey=pDu5xempVF8sw40jqPMObfxVIF7Gofk4';
    this.urlAutocomplete = 'https://dataservice.accuweather.com/locations/v1/cities/autocomplete';
    this.urlCityInfo = 'https://dataservice.accuweather.com/currentconditions/v1/';
    this.urlWeather5day = 'https://dataservice.accuweather.com/forecasts/v1/daily/5day/';
    this.isLoading = false;
    this.favorites = [
    ];
    this.currentCityInfo = {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv"
      }
    };
    this.currentCityWeather = {
      "LocalObservationDateTime": "2019-11-13T18:20:00+02:00",
      "EpochTime": 1573662000,
      "WeatherText": "Clear",
      "WeatherIcon": 33,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 27.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 82,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us",
      "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/current-weather/215854?lang=en-us"
    };
    this.weather5day = [
      {
        "Date": "2019-11-14T07:00:00+02:00",
        "EpochDate": 1573707600,
        "Temperature": {
          "Minimum": {
            "Value": 21.1,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 31.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 1,
          "IconPhrase": "Sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us"
      },
      {
        "Date": "2019-11-15T07:00:00+02:00",
        "EpochDate": 1573794000,
        "Temperature": {
          "Minimum": {
            "Value": 16.6,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25.8,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 17,
          "IconPhrase": "Partly sunny w/ t-storms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Night": {
          "Icon": 41,
          "IconPhrase": "Partly cloudy w/ t-storms",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Moderate"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us"
      },
      {
        "Date": "2019-11-16T07:00:00+02:00",
        "EpochDate": 1573880400,
        "Temperature": {
          "Minimum": {
            "Value": 16.9,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us"
      },
      {
        "Date": "2019-11-17T07:00:00+02:00",
        "EpochDate": 1573966800,
        "Temperature": {
          "Minimum": {
            "Value": 15.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 26.2,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 2,
          "IconPhrase": "Mostly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 34,
          "IconPhrase": "Mostly clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us"
      },
      {
        "Date": "2019-11-18T07:00:00+02:00",
        "EpochDate": 1574053200,
        "Temperature": {
          "Minimum": {
            "Value": 14.4,
            "Unit": "C",
            "UnitType": 17
          },
          "Maximum": {
            "Value": 25.1,
            "Unit": "C",
            "UnitType": 17
          }
        },
        "Day": {
          "Icon": 3,
          "IconPhrase": "Partly sunny",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 33,
          "IconPhrase": "Clear",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
        "Link": "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us"
      }
    ]
  }

  checkFavorite() {
    this.isFavorite = this.favorites.some(el => (
      el.LocalizedName === this.currentCityInfo.LocalizedName
    ));
  }

  convertCelsToFahr(celsius) {
    const cToFahr = celsius * 9 / 5 + 32;

    if (this.currentUnit === false) {
      return (celsius + '\xB0C')
    } else {
      return (cToFahr.toFixed(2) + '\xB0F')
    }
  }

  convertUnits(stateCheck) {
    this.currentUnit = stateCheck;
  }

  handleToggleItems() {
    const getDataObj = {
      "Key": this.currentCityInfo.key,
      "LocalizedName": this.currentCityInfo.LocalizedName,
      "WeatherText": this.currentCityWeather.WeatherText,
      "Temperature": {
        "Metric": {
          "Value": this.currentCityWeather.Temperature.Metric.Value,
          "Unit": "C",
          "UnitType": 17
        }
      }
    }

    const foundEl = this.favorites.some(el => (
      el.LocalizedName === this.currentCityInfo.LocalizedName
    ));

    if (!foundEl) {
      this.favorites.push(getDataObj);
    } else {
      this.favorites = this.favorites.filter((value, index) => {
        return value.LocalizedName !== this.currentCityInfo.LocalizedName
      })
    }
  }

  handleChange(newCity) {
    this.defaultCity = newCity;
  }

  handleSubmit() {
    this.fetchData(this.defaultCity);
  }

  fetchData(city) {
    this.isLoading = true;
    fetch(this.urlAutocomplete + '?q=' + city + '&' + this.apikey)
      .then(response => response.json())
      .then(resData => {
        if (resData.length > 0) {
          this.currentCityInfo = resData[0]
        }
      })
      .then(newRes => (
        fetch(this.urlCityInfo + this.currentCityInfo.Key + '?' + this.apikey)
          .then(response => response.json())
          .then(resData => {
            if (resData.length > 0) {
              this.currentCityWeather = resData[0]
            }
          })
          .then(newRes => (
            fetch(this.urlWeather5day + this.currentCityInfo.Key + '?' + this.apikey + '&metric=true')
              .then(response => response.json())
              .then(resData => {
                this.weather5day = resData.DailyForecasts;
                this.isLoading = false;
                this.checkFavorite();
              })
            ))
        ))
      .catch(error => {
        console.log('error message: ', error);
        this.isLoading = false;
      })
  }
}

decorate(WeatherInfo, {
  defaultCity: observable,
  currentCityInfo: observable,
  currentCityWeather: observable,
  weather5day: observable,
  favorites: observable,
  isFavorite: observable,
  currentUnit: observable,
  handleChange: action,
  handleSubmit: action,
  handleToggleItems: action,
  checkFavorite: action,
  convertCelsToFahr: action,
  convertUnits: action
})

const weatherInfo = new WeatherInfo();

export default weatherInfo;
export { WeatherInfo };
