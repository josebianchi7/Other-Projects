import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// Ensure argument name for getElementById method matches index.html ID for body div element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);