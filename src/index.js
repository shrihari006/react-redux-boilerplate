import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import "babel-polyfill";

import configureStore from './store/configure';
import Routes from './routes.jsx';

const store = configureStore();
const renderApp = () => {
    return (
        <Provider store={store} key={Math.random()}>
            <Routes />
        </Provider>
    );
  };

const root = document.getElementById('root');
render(renderApp(), root);
