import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import 'normalize.css';
import AppProvider from './providers/AppProvider.jsx';

render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.getElementById('root')
);
