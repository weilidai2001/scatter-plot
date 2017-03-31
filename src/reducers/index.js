import { combineReducers } from 'redux';
import chartData from './chart-data-reducer';

const rootReducer = combineReducers({
    chartData
});

export default rootReducer;