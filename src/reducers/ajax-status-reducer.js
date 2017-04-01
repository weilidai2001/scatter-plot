import * as types from '../actions/action-types';
import initialState from './initial-state';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) == '_SUCCESS';
}

export default function ajaxStatusReducer(state = initialState.isAjaxCallsInProgress, action) {
    return action.type === types.AJAX_CALL_BEGIN;
}