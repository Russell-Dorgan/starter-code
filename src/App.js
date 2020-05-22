import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//Components
import Navbar from './components/Navbar';
//Pages
import home from './pages/home';
import signup from './pages/signup';
import login from './pages/login';

const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#3f50b5',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      }
    },
    typography: {
      useNextVariants: true
    }
})


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
              <div className="App">
        <Router>
        <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path ="/signup" component={signup} />
              <Route exact path ="/login" component={login} />
            </Switch>  
          </div>
        </Router>
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
