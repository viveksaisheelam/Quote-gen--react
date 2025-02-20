import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import QuoteGenerator from './gen';
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <QuoteGenerator/>
  </React.StrictMode>
);
