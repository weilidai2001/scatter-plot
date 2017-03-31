import * as types from './action-types';
import propertyApi from '../api/chart-data-api';

export function loadChartDataSuccess(data) {
    return {type: types.LOAD_CHART_DATA_SUCCESS, data};
}

export function loadChartData() {
    return function (dispatch) {
        return propertyApi
            .getAllChartData()
            .then(data => dispatch(loadChartDataSuccess(data)))
            .catch(error => {
                throw(error)
            });
    }
}