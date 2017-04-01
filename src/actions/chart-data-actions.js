import * as types from './action-types';
import propertyApi from '../api/chart-data-api';
import { beginAjaxCall, ajaxCallError, ajaxCallSuccess } from './ajax-status-actions';

export function loadChartDataSuccess(data) {
    return { type: types.LOAD_CHART_DATA_SUCCESS, data };
}

export function loadChartData() {
    return function (dispatch) {
        dispatch(beginAjaxCall());

        return propertyApi
            .getAllChartData()
            .then((data) => {
                dispatch(ajaxCallSuccess(data));
                dispatch(loadChartDataSuccess(data));
            })
            .catch(() => {
                dispatch(ajaxCallError());
            });
    };
}
