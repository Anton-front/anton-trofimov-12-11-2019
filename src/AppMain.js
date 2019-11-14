import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Header from './components/header';
import Layout from './components/layout';
import { observer, inject } from 'mobx-react';

const AppMain = inject('themeUI')(observer(({themeUI}) => (
  <ThemeProvider theme={themeUI.currentTheme}>
    <div className="App">
      <Header />
      <Layout />
    </div>
  </ThemeProvider>
)))

export default AppMain;
