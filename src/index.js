import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import store from "./redux/store";
import { Provider } from "react-redux";
import { HashRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
);


