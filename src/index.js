// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Greeting(){
    const hola = 'QUE WEBADA'
    return <h1>{hola}</h1>
}


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
