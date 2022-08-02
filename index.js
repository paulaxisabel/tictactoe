import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.scss';
import App from './App';

import {createStore} from "redux";
import {Provider} from "react-redux"; //connects store to app, wrap <App> with this
import allReducers from "./reducers"; //reducers/index.js imports and combines reducers/counter.js and reducers/isLoggged.js (imports from reducers/index.js as file not specified)

//store variable, create global store using allReducers (could move and import this from src/store/store.js, for example)
export const store = createStore(allReducers, //(or just import and use src/reducers/counter.js)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //optional, required for chrome redux dev tools
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>    
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
