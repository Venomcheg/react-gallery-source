import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {GlobalStyles} from "./global-styles";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <GlobalStyles/>
      <App />
    </Provider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
