import React from 'react';
import Document from '../../containers/Document';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AboutUs from '../aboutUs/AboutUs';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path = '/'>
          <LandingPage />
        </Route> 
        <Route path = '/document/:id'>
          <Document />
        </Route> 
        <Route exact path = '/AboutUs'>
          <AboutUs />
        </Route> 
      </Switch>

    </Router>
  );
}
