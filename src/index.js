import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import 'normalize.css';
import AppProvider from './providers/AppProvider.jsx';
import {
  BrowserRouter as Router
} from 'react-router-dom';

render(
  <Router>
    <AppProvider>
      <App />
    </AppProvider>
  </Router>,
  document.getElementById('root')
);
