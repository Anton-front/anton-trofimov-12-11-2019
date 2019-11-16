import React from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import AppMain from './AppMain';
import { Provider } from 'mobx-react';
import themeUI from './store/themeUI';
import weatherInfo from './store/weatherInfo';

const stores = { themeUI, weatherInfo };

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <Provider { ...stores }>
      <AppMain />
    </Provider>
  </Router>
)

export default App;
