import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';
import * as serviceWorker from './serviceWorker';


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>,
  rootElement
);


serviceWorker.unregister();
