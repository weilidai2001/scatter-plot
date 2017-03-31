import * as types from '../actions/action-types';

export default function chartDataReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_CHART_DATA_SUCCESS:
            return action.data.slice(0, 5000);

        default:
            return state;
    }
}