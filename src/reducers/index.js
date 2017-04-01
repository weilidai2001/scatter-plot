import { combineReducers } from 'redux';
import chartData from './chart-data-reducer';
import ajaxStatus from './ajax-status-reducer';

const rootReducer = combineReducers({
    chartData,
    ajaxStatus
});

export default rootReducer;
