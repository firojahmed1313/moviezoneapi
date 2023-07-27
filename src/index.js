import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import store from './redux/store';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-yabh1f15gyayj2sp.us.auth0.com"
    clientId="ADV9gAigC4uWu84AcGKyZ1V31BRGwlwo"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <Provider store={store}>
        <BrowserRouter>
          <App />
          
        </BrowserRouter>
      </Provider>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
