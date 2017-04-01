import * as types from './action-types';

export function beginAjaxCall() {
    return { type: types.AJAX_CALL_BEGIN };
}

export function ajaxCallSuccess() {
    return { type: types.AJAX_CALL_SUCCESS };
}

export function ajaxCallError() {
    return { type: types.AJAX_CALL_ERROR };
}
