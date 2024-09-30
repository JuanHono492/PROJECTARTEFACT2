// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

<<<<<<< HEAD
const root = ReactDOM.createRoot(document.getElementById('root'));
=======
function Greeting(){
    const hola = 'QUE WEBADA'
    return <h1>{hola}</h1>
}
>>>>>>> b399c0ce486e5c544f7915d186d2ec50900f6c91

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
