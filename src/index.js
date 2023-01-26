import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Auth from 'components/common/Auth';

import "./initialize.css"
import "./variable.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Auth>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Auth>
  </React.StrictMode>
);