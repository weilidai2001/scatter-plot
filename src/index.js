import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Homepage from './pages/homepage';
import configureStore from './store/configure-store';
import {loadChartData} from './actions/chart-data-actions';

const store = configureStore();
store.dispatch(loadChartData());

ReactDOM.render(
    <Provider store={store}>
        <Homepage />
    </Provider>,
    document.getElementById('root')
);