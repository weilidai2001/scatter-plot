import * as types from '../actions/action-types';
import initialState from './initial-state';

export default function chartDataReducer(state = initialState.chartData, action) {
    switch (action.type) {
        case types.LOAD_CHART_DATA_SUCCESS:
            return action.data;

        default:
            return state;
    }
}